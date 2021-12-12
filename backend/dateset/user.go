package dateset

type User struct {
	ID        int    `json:"id"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	Phone     string `json:"phone"`
}
type UpdateUser struct {
	ID			int		`json:"id"`
	FirstName	string	`json:"firstname"`
	LastName	string	`json:"lastname"`
	Email		string	`json:"email"`
	Password	string	`json:"password"`
	Phone		string	`json:"phone"`
	Profile_user string	`json:"profile_user"`
}
type LoginUser struct {
	Status string `json:"status"`
	ID     int    `json:"id"`
}
type GetUser struct {
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	Email     string `json:"email"`
	Phone     string `json:"phone"`
}
type AddWorkFeelance struct {
	WorkPostID     string `json:"workpostid"`
	TypeWorkNumber string `json:"typeWorknumber"`
	DetailWork     string `json:"detailwork"`
	UserID         string `json:"userid"`
	PricePostWork  string `json:"pricepostwork"`
	NameWork       string `json:"namework"`
}
