package database

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

const (
	host     = "127.0.0.1"
	port     = "127.0.0.1:3306"
	password = "00BulueColour00"
	dbname   = "se"
)

func Connectdata() *sql.DB {
	fmt.Println("Connecting database")
	sqlinfo := fmt.Sprintf("%s:%s@tcp(%s)/%s", host, password, port, dbname)
	db, err := sql.Open("mysql", sqlinfo)

	if err != nil {
		panic(err.Error())

	}
	return db
}
