package server

import (
	"se/controller"
	"net/http"

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

	return r
}

