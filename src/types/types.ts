import React from "react";

export interface IItem {
    id: number
    title: string
    img: any
    body:string
    price: number
    count: number
}

export interface IBasketItem {
    props: IItem
}

export interface IStoreItem {
    props?: any
}

export interface IModal {
    props?: any
    children: React.ReactNode
    visible: boolean
    setVisible?: any
}

export interface imageProps extends React.ImgHTMLAttributes<any>{
    props?: any
}

export interface ICounter {
    count: number
    onChangeCounter: any
}

export interface IButtonProps
    extends React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
    disabled?: boolean
}

export interface ILogo {
    logo: string
}



