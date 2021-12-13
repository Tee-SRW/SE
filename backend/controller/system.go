package controller

import (
	"se/dateset"


	"se/model"

	"github.com/gin-gonic/gin"
)

type systemController struct{}

func (u UserController) GetAllWork(c *gin.Context) {
	systemModel := model.SystemModel{}
	var typeworkid dateset.Typeworkid

	e := c.ShouldBind(&typeworkid)

	if e != nil {
		// fmt.Println(e)
		panic(e)
	}
	works,err := systemModel.GetWork(typeworkid)
	
	if err != nil {
		panic(err)
	}
	c.JSON(200, works)
}

func (u UserController) Updatepost(c *gin.Context) {
	var userModel model.UserModel
	var user dateset.UpdateUser
	// id := c.Param("id")
	// idint, err := strconv.Atoi(id)
	e := c.ShouldBind(&user)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}
	//
	statusUpdateuser, err := userModel.Updateuser(
		user.ID,
		user.FirstName,
		user.LastName,
		user.Email,
		user.Phone,
		user.Profile_user)

	if err != nil {
		panic(err)
	}
	c.JSON(200, statusUpdateuser)
}