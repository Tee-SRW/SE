package controller

import (
	"se/dateset"

	"se/model"

	"github.com/gin-gonic/gin"
)

type companyController struct{}

func (u UserController) CreateAccountCompany(c *gin.Context) {
	var companyModel model.CompanyModel	
	var company dateset.Company

	e := c.ShouldBind(&company)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}

	status, err := companyModel.CreateAccountCompany(
		company.CompanyName,
		company.CompanyEmail,
		company.CompanyPhone,
		company.Address,
		company.Subdistrict,
		company.District,
		company.Province,
		company.Postcode,
		company.Password)

	if err != nil {
		panic(err)
	}
	c.JSON(200, status)
}