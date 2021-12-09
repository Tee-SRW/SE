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