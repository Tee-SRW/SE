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
		panic(e)
	}

	if typeworkid.Select_ID == 1 {
		works,err := systemModel.GetWorkfreelance(typeworkid)

		if err != nil {
			panic(err)
		}
		c.JSON(200, works)

	} else {
		works,err := systemModel.GetWorkcompany(typeworkid)

		if err != nil {
			panic(err)
		}
		
		c.JSON(200, works)
	}
}

