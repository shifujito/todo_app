package model

import "time"

type Card struct {
	ID        int    `gorm:"primaryKey;autoIncrement"`
	Title     string `gorm:"not null"`
	StartDate time.Time
}
