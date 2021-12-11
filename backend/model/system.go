package model

import (
	"fmt"
	"se/database"
	"se/dateset"
)

type SystemModel struct{}

func (u SystemModel) GetWork(Type_Work_ID int ,

) (string, int, string, string, string, error)  {

	var work []dataset.Getwork
	db := database.Connectdata()

	// var Type_Work_Name string
	// var Price_Post_Work int
	// var Name_Work string
	// var FirstName string
	// var LastName string

	// err := db.QueryRow("select Type_Work_Name,Price_Post_Work,Name_Work,FirstName,LastName from user,work_post_freelance,type_work WHERE User_ID=ID AND Type_Work_ID=Type_Work_Number AND Type_Work_ID = ?", Type_Work_ID).Scan(&Type_Work_Name, &Price_Post_Work, &Name_Work, &FirstName, &LastName)
	rows, err := db.Query("select Type_Work_Name,Price_Post_Work,Name_Work,FirstName,LastName from user,work_post_freelance,type_work WHERE User_ID=ID AND Type_Work_ID=Type_Work_Number AND Type_Work_ID = ?", Type_Work_ID)
	
	fmt.Print(rows)

	// var getwork dateset.Getwork

		for rows.Next() {
			var Type_Work_Name string
			var Price_Post_Work int
			var Name_Work string
			var FirstName string
			var LastName string
		err = rows.Scan(&Type_Work_Name, &Price_Post_Work, &Name_Work, &FirstName, &LastName)

		if err != nil {
			fmt.Print(err)
		}
	}

	if err != nil {
		fmt.Print(err)
	}

	return Type_Work_Name, Price_Post_Work, Name_Work, FirstName, LastName, nil	
}