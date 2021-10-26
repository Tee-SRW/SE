package controller

import (
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
