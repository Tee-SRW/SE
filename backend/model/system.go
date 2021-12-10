package model

import (
	// "database/sql"
	"fmt"
	"se/database"
	// "strings"
)

type SystemModel struct{}

func (u SystemModel) GetWorkgraphic(work_post_id int ,
	User_ID int ,
	Type_Work_Number int ,
	Detail_Work string ,
) (int, error)  {

	db := database.Connectdata()

	err := db.QueryRow("select FirstName,LastName,Email,Phone from user WHERE id = ?", idint).Scan(&FirstName, &LastName, &Email, &Phone)
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