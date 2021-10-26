package controller

import (
	"se/dateset"
	"se/model"

	"github.com/gin-gonic/gin"
)

type comparyController struct{}

func (u UserController) CreateAccountCompary(c *gin.Context) {
	var userModel model.UserModel
	var user dateset.User

	e := c.ShouldBind(&user)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}
	_, err := userModel.CreateUser(user.Id,
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
