package model

import (
	"fmt"
	"log"
	"os"

	"github.com/jinzhu/gorm"
	"github.com/joho/godotenv"
)

func init() {
	user, pass, dbname, hostname := dbEnv()
	// psqlに接続
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s sslmode=disable", hostname, user, pass, dbname)
	db, err := gorm.Open("postgres", dsn)
	if err != nil {
		panic(err)
	}
	// db.AutoMigrate().DropTable(&model.Todo{})
	db.AutoMigrate(&Todo{})
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()
}

func Db() *gorm.DB {
	user, pass, dbname, hostname := dbEnv()
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s sslmode=disable", hostname, user, pass, dbname)
	db, err := gorm.Open("postgres", dsn)
	if err != nil {
		panic(err)
	}
	return db
}

func dbEnv() (string, string, string, string) {
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Printf("読み込み出来ませんでした: %v", err)
	}
	user := os.Getenv("POSTGRES_USER")
	pass := os.Getenv("POSTGRES_PASSWORD")
	dbname := os.Getenv("POSTGRES_DB")
	hostname := os.Getenv("POSTGRES_HOSTNAME")
	return user, pass, dbname, hostname
}
