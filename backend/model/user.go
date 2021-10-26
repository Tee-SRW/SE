package model

import(

)

type UserModel struct{}

func (u UserModel) CreateUser(id string ,
	firstname string ,
	lastname string ,
	email string ,
	password string ,
	phone string) (bool,error)  {

	check := true;
	return check,nil;
}