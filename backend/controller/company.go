package controller

import (
	"se/dateset"

	"se/model"

	"github.com/gin-gonic/gin"
)

type companyController struct{}

func (u UserController) CreateAccountCompany(c *gin.Context) {
	var comparyModel model.CompanyModel
	var compary dateset.Company

	e := c.ShouldBind(&compary)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}

	status, err := comparyModel.CreateAccountCompany(
		compary.CompanyName,
		compary.CompanyEmail,
		compary.CompanyPhone,
		compary.Address,
		compary.Subdistrict,
		compary.District,
		compary.Province,
		compary.Postcode,
		compary.Password)

	if err != nil {
		panic(err)
	}
	c.JSON(200, status)
}