package main

import (
	"fmt"
	"log"
	"os"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
	"github.com/labstack/echo"
	"github.com/shifujito/todo_app/api/handler"
	"github.com/shifujito/todo_app/api/model"
	"github.com/shifujito/todo_app/api/store"
)

func init() {
}

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Printf("読み込み出来ませんでした: %v", err)
	}
	user := os.Getenv("POSTGRES_USER")
	pass := os.Getenv("POSTGRES_PASSWORD")
	dbname := os.Getenv("POSTGRES_DB")
	hostname := os.Getenv("POSTGRES_HOSTNAME")
	// psqlに接続
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s sslmode=disable", hostname, user, pass, dbname)
	db, err := gorm.Open("postgres", dsn)
	if err != nil {
		panic(err)
	}
	// db.AutoMigrate().DropTable(&model.Todo{})
	db.AutoMigrate(&model.Todo{})
	if err != nil {
		log.Fatal(err)
	}

	// // Echoインスタンスを作成
	e := echo.New()

	// ハンドラの初期化
	todoHandler := handler.NewTodoHandler(store.NewTodoStore(db))

	// ルーティングの設定
	// v1 := e.Group("/api/v1")
	e.GET("/todos", todoHandler.GetTodos)
	e.POST("/todos", todoHandler.CreateTodo)
	// サーバー起動
	if err := e.Start(":8080"); err != nil {
		log.Fatal(err)
	}
}
