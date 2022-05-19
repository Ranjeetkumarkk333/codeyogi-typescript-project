import {ButtonHTMLAttributes, FC} from 'react';
// import React from "react"
type ButtonProps = {icon: JSX.Element, children: string} & ButtonHTMLAttributes <HTMLButtonElement>;
const Button: FC<ButtonProps>=(props)=> {
	return (
		<button onClick={props.onClick}  className="flex items-center p-2 ">
			<span className="mr-2">{props.icon}</span>
			<h3>{props.children}</h3>
		</button>
	);
}
export default Button;
