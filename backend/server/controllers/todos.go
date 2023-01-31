package controllers

import (
	"net/http"

	"github.com/labstack/echo"
)

func GetAllTodos(c echo.Context) error {
	return c.String(http.StatusOK, "OK")
}
