package database

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
)

const (
	host     = "root"
	port = "whitewolf.monster:3306"
	password = "Joppy.inc123456789"
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
