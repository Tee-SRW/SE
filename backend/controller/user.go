package controller

import (
	"database/sql"
	"fmt"
	"se/dateset"
	"se/model"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

type UserController struct{}

func (u UserController) CreateUser(c *gin.Context) {
	var userModel model.UserModel
	var user dateset.User
	//var puser dateset.User

	e := c.ShouldBind(&user)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}
	//this _, err is use for check UserModel struct == dateset.User struct ?
	_, err := userModel.CreateUser(
		user.Id,
		user.Firstname,
		user.Lastname,
		user.Email,
		user.Password,
		user.Phone)

	if err != nil {
		panic(err)
	}
	// if user.Email ==  `SELECT email FROM account;` {
	// 	fmt.Print("Email not allow")
	// }
	db, err := sql.Open("mysql", "root:root@tcp(127.0.0.1:3307)/se")
	// if there is an error opening the connection, handle it
	if err != nil {
		panic(err.Error())
	}

	rows := db.QueryRow(`SELECT email from user_account WHERE email = ?`,user.Email,)

	err = rows.Scan(&user.Email)

	if err != nil {
		fmt.Println(err)
	}

	// var email string

	// for rows.Next() {
	// 	rows.Scan(&email)
	// 	if user.Email == email {
	// 		fmt.Print("kuy")
	// 	}
		// fmt.Printf("Got : email = %v",email)
	// }

	model.PostUserData(
		user.Firstname,
		user.Lastname,
		user.Email,
		user.Password,
		user.Phone)

	if err != nil {
		panic(err)
	}
	c.JSON(200, user)

}
