package dateset

type Company struct {
	ID           int    `json:"id"`
	CompanyName  string `json:"companyname"`
	CompanyEmail string `json:"compynyemail"`
	CompanyPhone string `json:"companyphone"`
	Address      string `json:"address"`
	Subdistrict  string `json:"subdistrict"`
	District     string `json:"district"`
	Province     string `json:"province"`
	Postcode     string `json:"postcode"`
	Password 	 string `json:"password"`
}
