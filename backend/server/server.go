package server 

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

)
func IninServer(){
	app := fiber.New()
	app.Use(cors.New())
	
 	InitRoutes()

    app.Listen(":3000")
}
