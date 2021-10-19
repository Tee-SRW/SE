package server 

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)
var app *fiber.App
func IninServer(){
	app := fiber.New()
	InitRoutes();
	
	app.use(cors.New())

    app.Get("/", func(c *fiber.Ctx) error {
        return c.SendString("Hello, World 👋!")
    })

    app.Listen(":3000")
}
