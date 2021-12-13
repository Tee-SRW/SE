package controller

import (
	//"fmt"

	"se/dateset"
	"se/model"

	// "strconv"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

type UserController struct{}

func (u UserController) CreateUser(c *gin.Context) {
	var userModel model.UserModel
	var user dateset.User
	//var puser dateset.User

	e := c.ShouldBind(&user)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}

	status, err := userModel.CreateUser(
		user.FirstName,
		user.LastName,
		user.Email,
		user.Password,
		user.Phone)

	if err != nil {
		panic(err)
	}
	c.JSON(200, status)
}

func (u UserController) LoginUser(c *gin.Context) {
	var userModel model.UserModel
	var user dateset.User
	var uservalue dateset.LoginUser
	e := c.ShouldBind(&user)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}
	//
	statuslogin, id, err := userModel.LoginUser(
		user.Email, user.Password, user.ID)

	// aa := [2]string{statuslogin, user.Email}
	uservalue.ID = id
	uservalue.Status = statuslogin
	if err != nil {
		panic(err)
	}
	c.JSON(200, uservalue)
	// gin.H{"message": "hey", "status": http.StatusOK}
}

func (u UserController) Updateuser(c *gin.Context) {
	var userModel model.UserModel
	var user dateset.UpdateUser
	// id := c.Param("id")
	// idint, err := strconv.Atoi(id)
	e := c.ShouldBind(&user)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}
	//
	statusUpdateuser, err := userModel.Updateuser(
		user.ID,
		user.FirstName,
		user.LastName,
		user.Email,
		user.Phone,
		user.Profile_user)

	if err != nil {
		panic(err)
	}
	c.JSON(200, statusUpdateuser)
}
func (u UserController) GetUpdateuser(c *gin.Context) {
	var userModel model.UserModel
	var uservalue dateset.GetUser
	var id dateset.ID
	//var user dateset.User
	e := c.ShouldBind(&id)

	if e != nil {
		// fmt.Println(e)
		panic(e)
	}

	FirstName, LastName, Email, Phone, Profile_user  := userModel.GetUpdateuser(
		id.ID)
	uservalue.FirstName = FirstName
	uservalue.LastName = LastName
	uservalue.Email = Email
	uservalue.Phone = Phone
	uservalue.Profile_user = Profile_user
	

	c.JSON(200, uservalue)

}
func (u UserController) AddWorkFreelance(c *gin.Context) {
	var userModel model.UserModel
	var user dateset.AddWorkFreelance
	//var puser dateset.User

	e := c.ShouldBind(&user)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}
	//fmt.Println("before =", user.ImageWorkPostFreelance)
	// newWorkPostID, err := strconv.Atoi(user.WorkPostID)
	//fmt.Println("after =", newWorkPostID, "pri =", user.PricePostWork)
	// newTypeWorkNumber, err := strconv.Atoi(user.TypeWorkNumber)
	// newUserID, err := strconv.Atoi(user.UserID)
	status, err := userModel.AddWorkFreelance(
		user.WorkPostID,
		user.TypeWorkNumber,
		user.UserID,
		user.DetailWork,
		user.PricePostWork,
		user.NameWork,
		user.ImageWorkPostFreelance)

	if err != nil {
		panic(err)
	}
	c.JSON(200, status)
}

func (u UserController) UpdateFreelance(c *gin.Context) {
	var userModel model.UserModel
	var user dateset.UpdateFreelance

	e := c.ShouldBind(&user)
	if e != nil {
		panic(e)
	}
		
		statusUpdateFreelance, err := userModel.UpdateFreelance(
		user.ID,
		user.FirstName,
		user.LastName,
		user.Email,
		user.Password,
		user.Phone,
		user.Profile_User,
		user.Line,
		user.Facebook,
		user.Instagram)

		if err != nil {
			panic(err)
		}
		c.JSON(200, statusUpdateFreelance)
}
func (u UserController) Updatepostfreelance(c *gin.Context) {
	var userModel model.UserModel
	var user1 dateset.AddWorkFreelance
	// id := c.Param("id")
	// idint, err := strconv.Atoi(id)
	e := c.ShouldBind(&user1)
	if e != nil {
		// fmt.Println(e)
		panic(e)
	}
	//
	statusUpdateuser, err := userModel.Updatepostfreelance(
		user1.WorkPostID,
		user1.TypeWorkNumber,
		user1.DetailWork,
		user1.UserID,
		user1.PricePostWork,
		user1.NameWork,
		user1.ImageWorkPostFreelance,
	)

	if err != nil {
		panic(err)
	}
	c.JSON(200, statusUpdateuser)
}