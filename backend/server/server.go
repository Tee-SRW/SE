package server

import (

)

func IninServer() {

	r := InitRouter()
	r.Run(":8080")

}
