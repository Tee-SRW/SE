package main

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	fmt.Println("Go MySQL Tutorial")

	db, err := sql.Open("mysql", "root:root@tcp(127.0.0.1:3307)/oo55")

	// if there is an error opening the connection, handle it
	if err != nil {
		panic(err.Error())
	}

	// defer the close till after the main function has finished
	// executing
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

// package main

// import (
// 	"database/sql"
// 	"fmt"

// 	_ "github.com/go-sql-driver/mysql"
// )

// func main() {
// 	db, err := sql.Open("mysql", "root:root/oo55")
// 	if err != nil {
// 		fmt.Print(err)
// 	}
// 	defer db.Close()
// 	rows, err := db.Query("select id,Fname,Lname from customer")
// 	if err != nil {
// 		fmt.Print(err)
// 	}
// 	for rows.Next() {
// 		var id int
// 		var Fname string
// 		var Lname string
// 		err = rows.Scan(&id, &Fname, &Lname)
// 		fmt.Printf("id : %d Fname %s Lname %s\n ", id, Fname, Lname)
// 	}
// }
