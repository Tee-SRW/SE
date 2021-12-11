package controller

import (
	"se/dateset"

	"se/model"
	"strconv"

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

func (u UserController) AddWorkCompany(c *gin.Context) {
	var companyModel model.CompanyModel
	var company dateset.AddWorkCompany
	//var puser dateset.User

	e := c.ShouldBind(&company)
	if e != nil {
		// fmt.Println(e)w
		panic(e)
	}

	newCompanyID, err := strconv.Atoi(company.CompanyID)
	newTypeWorkNumber, err := strconv.Atoi(company.TypeWorkNumber)
	newNumPerson, err := strconv.Atoi(company.NumPerson)

	status, err := companyModel.AddWorkCompany(
		newCompanyID,
		newTypeWorkNumber,
		company.NameWork,
		company.DetailWork,
		company.Position,
		newNumPerson,
		company.PriceWorkMin,
		company.PriceWorkMax,
		company.Education)
	
		if err != nil {
			panic(err)
		}
		c.JSON(200, status)
}
