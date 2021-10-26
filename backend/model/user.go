package model

import (
	"database/sql"
	"fmt"
)

type UserModel struct{}

func (u UserModel) CreateUser(id int,
	firstname string,
	lastname string,
	email string,
	password string,
	phone string) (bool, error) {

	check := true
	return check, nil
}
func PostUserData(firstname string,
	lastname string,
	email string,
	password string,
	phone string) {
	db, err := sql.Open("mysql", "root:00001828@tcp(127.0.0.1:3306)/se")
	// if there is an error opening the connection, handle it
	if err != nil {
		panic(err.Error())
	}
	stmt, err := db.Prepare("insert into customer(Firstname,Lastname,Email,Password,Phone) values(?,?,?,?,?)")
	if err != nil {
		fmt.Print(err)
	}
	_, err = stmt.Exec(
		firstname,
		lastname,
		email,
		password,
		phone)
	if err != nil {
		fmt.Print(err)
	}
}
