package main

import (
	"log"

	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/labstack/echo"
	"github.com/shifujito/todo_app/api/handler"
	"github.com/shifujito/todo_app/api/model"
	"github.com/shifujito/todo_app/api/store"
	"github.com/shifujito/todo_app/middleware"
)

func main() {
	db := model.Db()
	defer db.Close()
	// Echoインスタンスを作成
	e := echo.New()
	e.Use(middleware.SetCORSConfig())
	// ハンドラの初期化
	todoHandler := handler.NewTodoHandler(store.NewTodoStore(db))
	cardHandler := handler.NewCardHandler(store.NewCardStore(db))

	// ルーティングの設定
	// v1 := e.Group("/api/v1")
	e.GET("/todos", todoHandler.GetTodos)
	e.POST("/todos", todoHandler.CreateTodo)
	e.PATCH("/todos/:id", todoHandler.UpdateTodo)
	e.DELETE("/todos/:id", todoHandler.DeleteTodo)
	e.DELETE("/todos", todoHandler.DeleteTodos)
	e.GET("/cards", cardHandler.GetCard)
	e.POST("/cards", cardHandler.CreateCard)
	e.DELETE("/cards/:id", cardHandler.DeleteCard)
	// サーバー起動
	if err := e.Start(":8080"); err != nil {
		log.Fatal(err)
	}
}
