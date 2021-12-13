package server

import (
	"net/http"
	"se/controller"

	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	userController := controller.UserController{}

	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	r.POST("/createuser", userController.CreateUser)
	r.POST("/createcompany", userController.CreateAccountCompany)

	r.POST("/login", userController.LoginUser)

	r.PUT("/updateuser", userController.Updateuser)
	r.PUT("/updatefreelance", userController.UpdateFreelance)
	r.PUT("/updatecompany", userController.Updatecompany)

	r.POST("/getupdateuser", userController.GetUpdateuser)
	r.POST("/getupdatefreelance", userController.GetUpdatefreelance)
	r.POST("/getupdatecompany", userController.GetUpdatecompany)

	r.POST("/getallwork", userController.GetAllWork)

	r.POST("/addworkFreelance", userController.AddWorkFreelance)
	r.POST("/addworkcompany", userController.AddWorkCompany)

	r.PUT("/updatepostcompany", userController.Updatepostcompany)
	r.PUT("/updatepostfreelance", userController.Updatepostfreelance)
	return r
}
