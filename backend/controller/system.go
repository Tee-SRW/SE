package controller

import (
	// "se/dateset"

	// "se/model"

	// "github.com/gin-gonic/gin"
)

type systemController struct{}

// func (u UserController) GetWorkgraphic(c *gin.Context) {
// 	var systemModel model.SystemModel	
// 	var system dateset.System

// 	e := c.ShouldBind(&system)
// 	if e != nil {
// 		// fmt.Println(e)
// 		panic(e)
// 	}

// 	status, err := systemModel.GetWorkgraphic(
// 		system.Work_Post_ID ,
// 		system.User_ID,
// 		system.Type_Work_Number,
// 		system.Detail_Work,
// 		)

// 	if err != nil {
// 		panic(err)
// 	}
// 	c.JSON(200, status)
// }