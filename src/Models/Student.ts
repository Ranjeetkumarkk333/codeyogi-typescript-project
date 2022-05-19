import { ImgHTMLAttributes } from "react"

export type Student = {
	name:{
		first:string,
		last:string,
	},
	picture:{
		large:string
	},
	location:{
		city:string,
		country:string,
	}
	
}