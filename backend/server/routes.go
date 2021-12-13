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
	r.POST("/login", userController.LoginUser)
	r.POST("/createcompany", userController.CreateAccountCompany)
	r.PUT("/updateuser", userController.Updateuser)
	r.POST("/getupdateuser", userController.GetUpdateuser)
	r.POST("/getupdatefreelance", userController.GetUpdatefreelance)
	r.POST("/getcompany",userController.GetUpdatecompany)
	r.POST("/getallwork", userController.GetAllWork)
	r.POST("/addworkFreelance", userController.AddWorkFreelance)
	r.POST("/addworkcompany", userController.AddWorkCompany)
	r.PUT("/updatefreelance",userController.UpdateFreelance)
	r.PUT("/updatecompany",userController.Updatepostcompany)
	r.PUT("/freelanceupdatepost", userController.Updatepostfreelance) 
	return r
}
