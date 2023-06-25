package model

import "time"

type Card struct {
	ID        int    `gorm:"primaryKey;autoIncrement" json:"id"`
	Title     string `gorm:"not null" json:"title"`
	StartDate time.Time
}
