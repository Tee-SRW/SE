package database

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func Connectdata() {
	fmt.Println("Go MySQL Tutorial")

	db, err := sql.Open("mysql", "root:root@tcp(127.0.0.1:3307)/se")

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()
	rows, err := db.Query("select id,Fname,Lname from customer")
	if err != nil {
		fmt.Print(err)
	}
	for rows.Next() {
		var id int
		var Fname string
		var Lname string
		err = rows.Scan(&id, &Fname, &Lname)
		fmt.Printf("id : %d Fname %s Lname %s\n ", id, Fname, Lname)
	}
}


