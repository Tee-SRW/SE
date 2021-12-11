package model

import (
	// "database/sql"
	"fmt"
	"se/database"
	// "strings"
)

type CompanyModel struct{}

func (u CompanyModel) CreateAccountCompany(companyname string ,
companyemail string ,
companyphone string ,
address string ,
subdistrict string ,
district string  ,
province string ,
postcode string ,
password string) (string, error)  {

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
	Education string) (string, error) {

		db := database.Connectdata()

		stmt, err := db.Prepare("insert into work_post_company (Company_ID, Type_Work_Number, Name_Work, Detail_Work, Position, Num_Person, Price_Work_Min, Price_Work_Max, Education) values (?,?,?,?,?,?,?,?,?)")
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
		Education)
	check := "Complete!"

	if err != nil {
		check = "Fail!"
	}

	return check, nil
}