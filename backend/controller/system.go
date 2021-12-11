package controller

import (
	"se/dateset"

	"se/model"

	"github.com/gin-gonic/gin"
)

type systemController struct{}

func (u UserController) GetWorkgraphic(c *gin.Context) {
	var systemModel model.SystemModel	
	var system dateset.System
	var getwork dateset.Getwork
	e := c.ShouldBind(&system)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}

	Type_Work_Name, Price_Post_Work, Name_Work, FirstName, LastName, err := systemModel.GetWork(
		system.Type_Work_ID ,
		)

		getwork.Type_Work_Name = Type_Work_Name
		getwork.Price_Post_Work = Price_Post_Work
		getwork.Name_Work = Name_Work
		getwork.FirstName = FirstName
		getwork.LastName = LastName
		
	if err != nil {
		panic(err)
	}
	c.JSON(200, getwork)
}