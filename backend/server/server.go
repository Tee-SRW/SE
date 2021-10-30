package server

import (

)

func IninServer() {

	r := InitRouter()
	r.Run("localhost:8080")

}
