package main

import (
	"github.com/labstack/echo"
	"github.com/shifujito/todo_app/backend/server/controllers"
)

func NewMux() {
	mux := echo.New()
	mux.GET("/todos", controllers.GetAllTodos)
	mux.Logger.Fatal(mux.Start(":8080"))
}
