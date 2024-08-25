import React from "react"


interface buttonProps {
    type:"submit"|"button"
    children : React.ReactNode;
    className?:string
}


export const Button = ({type,children,className}:buttonProps) => {
    return <button className={className} type={type}>{children}</button>
}