package handler

import (
	"fmt"
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
	// 必須チェック
	if err := requiredTodoValid(t); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	// インサート
	err := h.Store.CreateTodo(t)
	if err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	return c.JSON(http.StatusCreated, t)
}

func (h *TodoHandler) DeleteTodos(c echo.Context) error {
	if err := h.Store.DeleteTodos(); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	return c.JSON(http.StatusNoContent, nil)
}

func requiredTodoValid(t *model.Todo) error {
	// タイトルは必須
	if t.Title == "" {
		return fmt.Errorf("title is required")
	}
	return nil
}
