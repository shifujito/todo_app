package model

import (
	"github.com/google/uuid"
	"github.com/jinzhu/gorm"
)

type User struct {
	gorm.Model
	Id   uuid.UUID `gorm:"type:uuid;primaryKey;default:gen_random_uuid()"`
	Name string
}
