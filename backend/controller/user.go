package controller

import (
	"github.com/gin-gonic/gin"
	"se/dateset"
	"se/model"
)
type UserController struct{}

func (u UserController) CreateUser(c *gin.Context) {
	var userModel model.UserModel
	var user dateset.User
	
	e := c.ShouldBind(&user)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}
	_,err := userModel.CreateUser(user.Id,
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