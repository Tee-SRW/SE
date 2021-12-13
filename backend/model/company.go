package model

import (
	// "database/sql"
	"fmt"
	"se/database"
	// "strings"
)

type CompanyModel struct{}

func (u CompanyModel) CreateAccountCompany(companyname string,
	companyemail string,
	companyphone string,
	address string,
	subdistrict string,
	district string,
	province string,
	postcode string,
	password string) (string, error) {

	db := database.Connectdata()

	stmt, err := db.Prepare("insert into company(CompanyName, CompanyEmail, CompanyPhone, Address, Subdistrict, District, Province, Postcode, Password) values(?,?,?,?,?,?,?,?,?)")
	if err != nil {
		fmt.Print(err)
	}

	_, err = stmt.Exec(
		companyname,
		companyemail,
		companyphone,
		address,
		subdistrict,
		district,
		province,
		postcode,
		password)
	check := "Complete"

	if err != nil {
		check = "Fail"
	}

	return check, nil
}

func (u CompanyModel) AddWorkCompany(
	CompanyID int,
	TypeWorkNumber int,
	NameWork string,
	DetailWork string,
	Position string,
	NumPerson int,
	PriceWorkMin string,
	PriceWorkMax string,
	Education string,
	ImageWorkPostCompany string) (string, error) {

	db := database.Connectdata()

	stmt, err := db.Prepare("insert into work_post_company (Company_ID, Type_Work_Number, Name_Work, Detail_Work, Position, Num_Person, Price_Work_Min, Price_Work_Max, Education,Image_Work_Post_Company) values (?,?,?,?,?,?,?,?,?,?)")
	if err != nil {
		fmt.Print(err)
	}

	_, err = stmt.Exec(
		CompanyID,
		TypeWorkNumber,
		NameWork,
		DetailWork,
		Position,
		NumPerson,
		PriceWorkMin,
		PriceWorkMax,
		Education,
		ImageWorkPostCompany)
	check := "Complete!"

	if err != nil {
		check = "Fail!"
	}

	return check, nil
}

func (u CompanyModel) Updatepostcompany(
	workpostid int,
	typeworknumber int,
	namework string,
	detailwork string,
	position string,
	numperson int,
	priceworkmin string,
	priceworkmax string,
	education string,
	imageworkpostcompany string,) (string, error) {
		db := database.Connectdata()

		_, err := db.Exec("UPDATE work_post_company SET Type_Work_Number = ?, Name_Work = ?, Detail_Work = ?, Position = ?, Num_Person = ?, Price_Work_Min = ?, Price_Work_Max = ?, Education = ?, Image_Work_Post_Company = ? where Work_Post_ID = ?", typeworknumber, namework, detailwork, position, numperson, priceworkmin, priceworkmax, education, imageworkpostcompany, workpostid)

		if err != nil {
			fmt.Print(err)
		}
		statusUpdatecompany := "สำเร็จ"
		return statusUpdatecompany, nil
	}
