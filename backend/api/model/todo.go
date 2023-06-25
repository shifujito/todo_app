package model

import (
	"time"

	"github.com/google/uuid"
)

type Todo struct {
	ID        uuid.UUID `gorm:"type:uuid;default:gen_random_uuid()"`
	CardId    int       `gorm:"not null" json:"cardId"`
	Title     string    `gorm:"not null" json:"title"`
	StartDate time.Time
	EndDate   time.Time
	Content   *string
	Status    string
}
