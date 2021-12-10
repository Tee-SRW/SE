package dateset

type User struct {
	ID        int    `json:"id"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	Phone     string `json:"phone"`
}
type LoginUser struct{
    Status string `json:"status"`
    UserName string `json:"username"`
}

