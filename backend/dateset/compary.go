package dateset

type Company struct {
	Id           int    `json:"id"`
	Companyname  string `json:"companyname"`
	Companyemail string `json:"compynyemail"`
	Companyphone string `json:"companyphone"`
	Address      string `json:"address"`
	Subdistrict  string `json:"subdistrict"`
	District     string `json:"district"`
	Province     string `json:"province"`
	Postcode     string `json:"postcode"`
}
