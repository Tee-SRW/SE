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

type Getworkpagehomefreelance struct {
	Type_Work_Name	string 	`json:"type_work_name"`
	Price_Post_Work		int	`json:"price_post_work"`
	Name_Work			string	`json:"name_work"`
	FirstName	string 	`json:"firstName"`
	LastName	string 	`json:"lastName"`
	Image_Work_Post_Freelance string `json:"image_work_post_freelance"`
}

type Getworkpagehomecompany struct {
	Type_Work_Name	string 	`json:"type_work_name"`
	Price_Work_Min		string	`json:"price_work_min"`
	Name_Work			string	`json:"name_work"`
	Image_Work_Post_Company	string 	`json:"image_work_post_company"`
	CompanyName	string 	`json:"companyname"`
}

type Typeworkid struct {
	Type_Work_ID	int 	`json:"type_work_id"`
	Select_ID int `json:"select_id"`
}

type Workpostid struct {
	Work_Post_Id	int 	`json:"work_post_id"`
}

type Getworkfreelance struct {
	Price_Post_Work		int	`json:"price_post_work"`
	Name_Work			string	`json:"name_work"`
	Detail_Work			string 	`json:"detail_work"`
	Type_Work_Name	string 	`json:"type_work_name"`
	FirstName	string 	`json:"firstName"`
	LastName	string 	`json:"lastName"`
	Line	string 	`json:"line"`
	Facebook	string 	`json:"facebook"`
	Instagram	string 	`json:"instagram"`
	Image_Work_Post_Freelance	string 	`json:"image_work_post_freelance"`
	Email	string 	`json:"email"`
	Phone	string 	`json:"phone"`
}


