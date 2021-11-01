package model

import (
	"database/sql"
	"fmt"
	"se/database"
	"strings"
)

type UserModel struct{}

func (u UserModel) CreateUser(firstname string,
	lastname string,
	email string,
	password string,
	phone string) (bool, error) {
	db, err := sql.Open("mysql", "BulueColour:00BulueColour00@tcp(127.0.0.1:3306)/se")
	// if there is an error opening the connection, handle it
	if err != nil {
		panic(err.Error())
	}
	stmt, err := db.Prepare("insert into account(FirstName,LastName,Email,Password,Phone) values(?,?,?,?,?)")
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

func (u UserModel) LoginUser(email string,
	password string) (string, error) {

	db := database.Connectdata()

	findemail := "@"
	statuslogin := "ถูกต้อง"
	if strings.Contains(email, findemail) {
		rows, err := db.Query("select Email,Password from account")

		if err != nil {
			fmt.Print(err)
		}

		for rows.Next() {
			var emaildb string
			var passworddb string
			err = rows.Scan(&emaildb, &passworddb)
			if emaildb == email && passworddb == password {
				return statuslogin, nil
			}
			statuslogin = "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง"
			return statuslogin, nil

		}

	} else {

		rows, err := db.Query("select Phone,Password from account")

		if err != nil {
			fmt.Print(err)
		}

		for rows.Next() {
			var Phonedb string
			var passworddb string
			err = rows.Scan(&Phonedb, &passworddb)
			if Phonedb == email && passworddb == password {
				return statuslogin, nil
			}
		}
		statuslogin = "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง"
		return statuslogin, nil
	}
	return statuslogin, nil
}
