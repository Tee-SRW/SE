package model

type ComparyModel struct{}

func (u ComparyModel) CreateAccountCompary(id string,
companyname string ,
companyemail string ,
companyphone string ,
address string ,
subdistrict string ,
district string  ,
province string ,
postcode string ,) (bool,error)  {

	check := true;
	return check,nil;
}