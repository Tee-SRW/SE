package model

import (
	"database/sql"
	"fmt"
)

type UserModel struct{}
	
func (u UserModel) CreateUser(firstname string,
	lastname string,
	email string,
	password string,
	phone string) (bool, error) {
	db, err := sql.Open("mysql", "root:root@tcp(127.0.0.1:3307)/se")
	// if there is an error opening the connection, handle it
	if err != nil {
		panic(err.Error())
	}
	stmt, err := db.Prepare("insert into user_account(FirstName,LastName,Email,Password,Phone) values(?,?,?,?,?)")
	if err != nil {
		fmt.Print(err)
	}
	
	_, err = stmt.Exec(
		firstname,
		lastname,
		email,
		password,
		phone)
		check := true 
		
	if err != nil {
		check = false
	}

	return check, nil
}
