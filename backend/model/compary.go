package model

import (
	"database/sql"
	"fmt"
	// "se/database"
	// "strings"
)

type ComparyModel struct{}

func (u ComparyModel) CreateAccountCompary(companyname string ,
companyemail string ,
companyphone string ,
address string ,
subdistrict string ,
district string  ,
province string ,
postcode string ,) (bool,error)  {
	db, err := sql.Open("mysql", "BulueColour:00BulueColour00@tcp(127.0.0.1:3306)/se")

	if err!= nil {
		panic(err.Error())
	}
	stmt, err := db.Prepare("insert into account_company(companyname, companyemail, companyphone, address, subdistrict, district, province, postcode) values(?,?,?,?,?,?,?,?)")
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
		postcode)
	check := true

	if err != nil {
		check = false
	}

	return check, nil
}