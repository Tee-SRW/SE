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

	stmt, err := db.Prepare("insert into user (FirstName, LastName, Email, Password, Phone) values(?,?,?,?,?)")
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
	statuslogin := "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้องอีเมล"
	if strings.Contains(email, findemail) {

		var passworddb string
        err := db.QueryRow("select Password from user WHERE Email=? union select Password from company WHERE CompanyEmail=?", email, email).Scan(&passworddb)

		if err != nil {
			fmt.Print(err)

		}

		fmt.Print(passworddb + " pass")
		if passworddb == password {
			statuslogin = "ถูกต้อง"
		}

	} else {
		var passworddb string
		err := db.QueryRow("select Password from user WHERE Phone=? union select Password from company WHERE CompanyPhone=?", email, email).Scan(&passworddb)

		if err != nil {
			fmt.Print(err)
		}

		fmt.Print(passworddb + " pass")
		if passworddb == password {
			statuslogin = "ถูกต้อง"
		}
	}
	return statuslogin, nil
}

func (u UserModel) Updateuser(idint int,
	firstname string,
	lastname string,
	email string,
	password string,
	phone string,
) (string, error) {
	db := database.Connectdata()
	// rows, err := db.Query("select * from user_account where ID = ?;",id)
	fmt.Print(lastname)

	_, err := db.Exec("UPDATE user SET FIrstName = ?, LastName = ?, Email = ?, Password = ?, Phone = ? WHERE id = ?", firstname, lastname, email, password, phone, idint)

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

	fmt.Print(idint)
	fmt.Print(lastname)
	statusUpdateuser := "สำเร็จ"
	return statusUpdateuser, nil
}
func (u UserModel) GetUpdateuser(idint int) (string, string, string, string) {
	db := database.Connectdata()
	var FirstName string
	var LastName string
	var Email string
	var Phone string
	err := db.QueryRow("select FirstName,LastName,Email,Phone from user WHERE id = ?", idint).Scan(&FirstName, &LastName, &Email, &Phone)
	if err != nil {
		fmt.Print(err)
	}
	return FirstName, LastName, Email, Phone
}
