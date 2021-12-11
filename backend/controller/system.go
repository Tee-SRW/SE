package controller

import (
	"se/dateset"


	"se/model"

	"github.com/gin-gonic/gin"
)

type systemController struct{}

func (u UserController) GetWorkgraphic(c *gin.Context) {
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