package dateset

type System struct {
	Work_Post_ID     	int    `json:"work_post_id"`
	User_ID				int 	`json:"user_id"`
	Type_Work_Number	int 	`json:"type_work_number"`
	Price_Post_Work		int	`json:"price_post_work"`
	Name_Work			string	`json:"name_work"`
	Detail_Work			string 	`json:"detail_work"`
	Type_Work_ID	int 	`json:"type_work_id"`
	Type_Work_Name	string 	`json:"type_work_name"`
	FirstName	string 	`json:"firstName"`
	LastName	string 	`json:"lastName"`
}

type Getwork struct {
	Price_Post_Work		int	`json:"price_post_work"`
	Name_Work			string	`json:"name_work"`
	Detail_Work			string 	`json:"detail_work"`
	Type_Work_Name	string 	`json:"type_work_name"`
	FirstName	string 	`json:"firstName"`
	LastName	string 	`json:"lastName"`
}

type Getworkpagehome struct {
	Type_Work_Name	string 	`json:"type_work_name"`
	Price_Post_Work		int	`json:"price_post_work"`
	Name_Work			string	`json:"name_work"`
	FirstName	string 	`json:"firstName"`
	LastName	string 	`json:"lastName"`
}

type Typeworkid struct {
	Type_Work_ID	int 	`json:"type_work_id"`
}