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
	ID           int    `json:"id"`
	FirstName    string `json:"firstname"`
	LastName     string `json:"lastname"`
	Email        string `json:"email"`
	Password     string `json:"password"`
	Phone        string `json:"phone"`
	Profile_user string `json:"profile_user"`
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
	Profile_user string `json:"profile_user"`
}
type AddWorkFeelance struct {
	WorkPostID            int `json:"workpostid"`
	TypeWorkNumber        int `json:"typeWorknumber"`
	DetailWork            string `json:"detailwork"`
	UserID                int `json:"userid"`
	PricePostWork         string `json:"pricepostwork"`
	NameWork              string `json:"namework"`
	ImageWorkPostFeelance string `json:"imageworkpostfreelance"`
}
type ID struct {
	ID	int 	`json:"id"`
}
