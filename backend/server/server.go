package server

import (

)

func IninServer() {

	r := InitRouter()
	r.Run("0.0.0.0:8080")
	// r.Run(":8080")

}
