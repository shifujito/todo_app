package internal

import (
	"database/sql"
	"reflect"
)

type NullString struct {
	sql.NullString
}

func (n *NullString) UnmarshalJSON(b []byte) error {
	n.Valid = true
	n.String = string(b)
	return nil
}

func (n *NullString) Validate(i interface{}) error {
	v := reflect.ValueOf(i)
	if !v.IsValid() || v.Kind() != reflect.String || v.String() == "" {
		n.Valid = false
		n.String = ""
	} else {
		n.Valid = true
		n.String = v.String()
	}
	return nil
}
