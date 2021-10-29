package controller

import (

	// "fmt"
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

	a, err := userModel.CreateUser(
		user.Firstname,
		user.Lastname,
		user.Email,
		user.Password,
		user.Phone)

	status := ""
	if a == true {
		status = "complete"
	} else {
		status = "Fail"
	}

	if err != nil {
		panic(err)
	}
	c.JSON(200, status)

}