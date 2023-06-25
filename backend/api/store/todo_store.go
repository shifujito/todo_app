package store

import (
	"fmt"

	"github.com/jinzhu/gorm"
	"github.com/shifujito/todo_app/api/model"
)

type TodoStore struct {
	db *gorm.DB
}

func NewTodoStore(db *gorm.DB) TodoStore {
	return TodoStore{db: db}
}

func (s TodoStore) GetTodos() ([]model.Todo, error) {
	var todos []model.Todo
	s.db.Find(&todos)
	return todos, nil
}

func (s TodoStore) CreateTodo(todo *model.Todo) error {
	result := s.db.Create(&todo)
	if result.Error != nil {
		return fmt.Errorf("Invalid request param")
	}
	return nil
}
