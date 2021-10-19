package controller

import (
	"net/http"
	"fmt"
)

func home(w http.ResponseWriter, r *http.Request){
	fmt.Fprint(w, "welcome to the home")
	fmt.Print("home")
}