package main

import (
	"log"

	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/labstack/echo"
	"github.com/shifujito/todo_app/api/handler"
	"github.com/shifujito/todo_app/api/model"
	"github.com/shifujito/todo_app/api/store"
)

func init() {
}

func main() {
	db := model.Db()
	defer db.Close()
	// Echoインスタンスを作成
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
