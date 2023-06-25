package store

import (
	"fmt"

	"github.com/jinzhu/gorm"
	"github.com/shifujito/todo_app/api/model"
)

type CardStore struct {
	db *gorm.DB
}

func NewCardStore(db *gorm.DB) CardStore {
	return CardStore{db: db}
}

func (s CardStore) CreateCard(card *model.Card) error {
	result := s.db.Create(&card)
	if result.Error != nil {
		return fmt.Errorf("Invalid request param")
	}
	return nil
}

func (s CardStore) GetCard() ([]model.Card, error) {
	var cards []model.Card
	s.db.Find(&cards)
	return cards, nil
}
