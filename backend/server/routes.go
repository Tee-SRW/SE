package server

import (
	// "../controller/home"
	
)

func InitRoutes(){
	app.Get("/", func(c *fiber.Ctx) error {
        return c.SendString("Hello, World !")
    })
}