package controller

import (

	// "fmt"

	"se/dateset"
	"se/model"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"strconv"
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

	status, err := userModel.CreateUser(
		user.FirstName,
		user.LastName,
		user.Email,
		user.Password,
		user.Phone)

	if err != nil {
		panic(err)
	}
	c.JSON(200, status)
}

func (u UserController) LoginUser(c *gin.Context) {
	var userModel model.UserModel
	var user dateset.User
	var uservalue dateset.LoginUser
	e := c.ShouldBind(&user)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}
	//
	statuslogin,  err := userModel.LoginUser(
		user.Email, user.Password)

	// aa := [2]string{statuslogin, user.Email}
	uservalue.UserName = user.Email;
	uservalue.Status = statuslogin;
	if err != nil {
		panic(err)
	}
	c.JSON(200, uservalue)
	// gin.H{"message": "hey", "status": http.StatusOK}
}

func (u UserController) Updateuser(c *gin.Context) {
	var userModel model.UserModel
	var user dateset.User
	 id := c.Param("id")
	 idint, err := strconv.Atoi(id)
	 e := c.ShouldBind(&user)
	 if e != nil {
		// fmt.Println(e)
		panic(e)
	}
	//
	statusUpdateuser, err := userModel.Updateuser(
		idint,
		user.FirstName,
		user.LastName,
		user.Email,
		user.Password,
		user.Phone)

	if err != nil {
		panic(err)
	}
	c.JSON(200, statusUpdateuser)
}
