package store

import (
	"fmt"

	"github.com/google/uuid"
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

func (s TodoStore) CreateTodo(todo *model.Todo) (*model.Todo, error) {
	result := s.db.Create(&todo)
	if result.Error != nil {
		return todo, fmt.Errorf("Invalid request param")
	}
	return todo, nil
}

func (s TodoStore) DeleteTodo(id string) error {
	todo := model.Todo{}
	uuid, _ := uuid.Parse(id)
	todo.ID = uuid
	result := s.db.Debug().Delete(todo)
	if result.Error != nil {
		return fmt.Errorf("Invalid request param")
	}
	return nil
}

func (s TodoStore) DeleteTodos() error {
	var todos []model.Todo
	result := s.db.Delete(&todos)
	if result.Error != nil {
		return fmt.Errorf("fail to delete todo")
	}
	return nil
}

func (s TodoStore) UpdateTodo(id string, todo *model.Todo) (*model.Todo, error) {
	uuid, _ := uuid.Parse(id)
	todo.ID = uuid
	result := s.db.Debug().Save(todo)
	if result.Error != nil {
		return todo, result.Error
	}
	return todo, nil
}
