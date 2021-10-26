package routes
import (
	"database/sql"
	"fmt"

	// "net/http"
	//  "backend/database"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	// "golang.org/x/text/number"
	
)
	
func setupRouter() *gin.Engine {
	r := gin.Default()

	r.POST("/test", exampleFunc)
	r.POST("/testJSON", exampleJSON)

	return r
}

func exampleFunc(c *gin.Context) {
	var result Result
	result.id = c.Query("id")
	result.Fname = c.PostForm("Fname")
	result.Lname = c.PostForm("Lname")

	c.JSON(200, gin.H{
		"message" : result,
	})

}

func exampleJSON(c *gin.Context) {
	var input Result
	_, err := sql.Open("mysql", "BulueColour:00BulueColour00@tcp(127.0.0.1:3306)/se")

	// if there is an error opening the connection, handle it
	if err != nil {
		panic(err.Error())
	}
	e := c.BindJSON(&input)
	if e != nil {
		fmt.Println(e)
	}
	c.JSON(200, gin.H{
		"id": input.id,
		"Fname": input.Fname,
		"Lname": input.Lname,
	})
	// stmt, err := db.Prepare("insert into customer(id,Fname,Lname) values(?,?,?)")
    // if err != nil {
    //     fmt.Print(err)
    // }
	// for _, Result := range Result {
    //     _, err = stmt.Exec(Result.id, Result.Fname, Result.Lname)
    //     if err != nil {
    //         fmt.Print(err)
    //     }
	// }
}

type Result struct {
	id string `json:"id"`
	Fname string `json:"Fname"`
	Lname string `json:"Lname"`
}