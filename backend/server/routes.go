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
	r.PUT("/user/:id", userController.Updateuser)
	r.POST("/getuser/:id", userController.GetUpdateuser)
	return r
}
