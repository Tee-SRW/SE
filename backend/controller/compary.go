package controller

import (
	"se/dateset"

	"se/model"

	"github.com/gin-gonic/gin"
)

type comparyController struct{}

func (u UserController) CreateAccountCompary(c *gin.Context) {
	var comparyModel model.ComparyModel
	var compary dateset.Company

	e := c.ShouldBind(&compary)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}

	a, err := comparyModel.CreateAccountCompary(
		compary.Companyname,
		compary.Companyemail,
		compary.Companyphone,
		compary.Address,
		compary.Subdistrict,
		compary.District,
		compary.Province,
		compary.Postcode)

	status := ""
	if a == true {
		status = "Complete!"
	} else {
		status = "Fail!"
	}

	if err != nil {
		panic(err)
	}
	c.JSON(200, status)
}