package handler

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/shifujito/todo_app/api/model"
	"github.com/shifujito/todo_app/api/store"
)

type TodoHandler struct {
	Store store.TodoStore
}

func NewTodoHandler(store store.TodoStore) *TodoHandler {
	return &TodoHandler{Store: store}
}

func (h *TodoHandler) GetTodos(c echo.Context) error {
	todos, _ := h.Store.GetTodos()
	return c.JSON(http.StatusOK, todos)
}

func (h *TodoHandler) CreateTodo(c echo.Context) error {
	t := new(model.Todo)
	if err := c.Bind(t); err != nil {
		return err
	}
	h.Store.CreateTodo(t)
	return c.JSON(http.StatusCreated, t)
}
