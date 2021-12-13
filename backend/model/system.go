package model

import (
	"fmt"
	"se/database"
	"se/dateset"
)

type SystemModel struct{}

func (u SystemModel) GetWork(Type_Work_ID dateset.Typeworkid ) ([]dateset.Getworkpagehome,error)  {
	var works []dateset.Getworkpagehome
	db := database.Connectdata()

	// err := db.QueryRow("select Type_Work_Name,Price_Post_Work,Name_Work,FirstName,LastName from user,work_post_freelance,type_work WHERE User_ID=ID AND Type_Work_ID=Type_Work_Number AND Type_Work_ID = ?", Type_Work_ID).Scan(&Type_Work_Name, &Price_Post_Work, &Name_Work, &FirstName, &LastName)
	rows, err := db.Query("select Type_Work_Name, Price_Post_Work, Name_Work, FirstName, LastName, Image_Work_Post_Freelance from user,work_post_freelance,type_work WHERE User_ID=ID AND Type_Work_ID=Type_Work_Number AND Type_Work_ID = ?", Type_Work_ID.Type_Work_ID)
	
	if err != nil{
		return works,err
	}
	fmt.Print(rows)

	// var getwork dateset.Getwork

		for rows.Next() {
			var work dateset.Getworkpagehome

			if err := rows.Scan(&work.Type_Work_Name, &work.Price_Post_Work, &work.Name_Work, &work.FirstName, &work.LastName, &work.Image_Work_Post_Freelance); 
			
			err != nil{
				return works,err
			}
			fmt.Print(work.Image_Work_Post_Freelance)

			works = append(works, work)
			
	}


	return works,nil	
}