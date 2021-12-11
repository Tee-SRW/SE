package controller

import (
	"fmt"

	"se/dateset"
	"se/model"

	"strconv"

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
	statuslogin, id, err := userModel.LoginUser(
		user.Email, user.Password, user.ID)

	// aa := [2]string{statuslogin, user.Email}
	uservalue.ID = id
	uservalue.Status = statuslogin
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
		user.Phone)

	if err != nil {
		panic(err)
	}
	c.JSON(200, statusUpdateuser)
}
func (u UserController) GetUpdateuser(c *gin.Context) {
	var userModel model.UserModel
	var uservalue dateset.GetUser
	//var user dateset.User
	id := c.Param("id")
	idint, err := strconv.Atoi(id)
	FirstName, LastName, Email, Phone := userModel.GetUpdateuser(
		idint)
	uservalue.FirstName = FirstName
	uservalue.LastName = LastName
	uservalue.Email = Email
	uservalue.Phone = Phone

	if err != nil {
		panic(err)
	}
	c.JSON(200, uservalue)

}
func (u UserController) AddWorkFeelance(c *gin.Context) {
	var userModel model.UserModel
	var user dateset.AddWorkFeelance
	//var puser dateset.User

	e := c.ShouldBind(&user)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}
	fmt.Println("before =", user.WorkPostID)
	newWorkPostID, err := strconv.Atoi(user.WorkPostID)
	fmt.Println("after =", newWorkPostID, "pri =", user.PricePostWork)
	newTypeWorkNumber, err := strconv.Atoi(user.TypeWorkNumber)
	newUserID, err := strconv.Atoi(user.UserID)
	status, err := userModel.AddWorkFeelance(
		newWorkPostID,
		newTypeWorkNumber,
		newUserID,
		user.DetailWork,
		user.PricePostWork,
		user.NameWork)

	if err != nil {
		panic(err)
	}
	c.JSON(200, status)
}
