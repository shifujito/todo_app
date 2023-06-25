package handler

import (
	"fmt"
	"net/http"
	"time"

	"github.com/labstack/echo"
	"github.com/shifujito/todo_app/api/model"
	"github.com/shifujito/todo_app/api/store"
)

type CardHandler struct {
	Store store.CardStore
}

func NewCardHandler(store store.CardStore) *CardHandler {
	return &CardHandler{Store: store}
}

func (h CardHandler) CreateCard(c echo.Context) error {
	card := new(model.Card)
	if err := c.Bind(card); err != nil {
		return err
	}
	// validate
	if err := requiredCardValid(card); err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	// 時間をset
	setCreateTime(card)
	// インサート
	err := h.Store.CreateCard(card)
	if err != nil {
		return c.JSON(http.StatusBadRequest, err.Error())
	}
	return c.JSON(http.StatusCreated, card)
}

func (h CardHandler) GetCard(c echo.Context) error {
	cards, _ := h.Store.GetCard()
	return c.JSON(http.StatusOK, cards)
}

func requiredCardValid(c *model.Card) error {
	// タイトルは必須
	if c.Title == "" {
		return fmt.Errorf("title is required")
	}
	return nil
}

func setCreateTime(c *model.Card) {
	c.StartDate = time.Now()
}
