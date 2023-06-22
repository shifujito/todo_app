package model

import (
	"github.com/google/uuid"
	"github.com/jinzhu/gorm"
)

type Card struct {
	gorm.Model
	Id    uuid.UUID `gorm:"type:uuid;primaryKey;default:gen_random_uuid()"`
	Title string    `gorm:"not null"`
}
