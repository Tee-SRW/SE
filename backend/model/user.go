package model

import (
	"fmt"
	"se/database"
	"strings"
)

type UserModel struct{}

func (u UserModel) CreateUser(firstname string,
	lastname string,
	email string,
	password string,
	phone string) (string, error) {

	db := database.Connectdata()

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
	check := "Complete!"

	if err != nil {
		check = "Fail"
	}

	return check, nil
}

func (u UserModel) LoginUser(email string,
	password string) (string, error) {

	db := database.Connectdata()

	findemail := "@"
	statuslogin := "ถูกต้อง"
	if strings.Contains(email, findemail) {
		rows, err := db.Query("select Email,Password from user_account")

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

		rows, err := db.Query("select Phone,Password from user_account")

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

func (u UserModel) Updateuser(idint int,
	firstname string,
	lastname string,
	email string,
	phone string,
	) (string, error) {
		db := database.Connectdata()
		// rows, err := db.Query("select * from user_account where ID = ?;",id)
		rows, err := db.Query("UPDATE user_account SET LastName = ? WHERE id = ?",lastname,idint)
		
		if err != nil {
			fmt.Print(err)
		}

		// for rows.Next() {
		// 	var FirstNamedb string
		// 	var LastName string
		// 	var Email string
		// 	var Phone string
		// 	err = rows.Scan(&FirstNamedb, &LastName, &Email, &Phone)
		// 	FirstNamedb = firstname	
		// }
		

		fmt.Print(rows)
		fmt.Print(idint)
		statusUpdateuser :=  "สำเร็จ"
		return statusUpdateuser, nil
	}
