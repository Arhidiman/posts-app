import React from "react";
import {MouseEventHandler, ReactNode} from "react"
import "./Button.scss"

interface IButtonInterface {
    className?: string;
    onClick?: MouseEventHandler,
    children: ReactNode
}

const defaultClassName = "button-default"

export const Button: React.FC<IButtonInterface> = (
    {
        className = defaultClassName,
        onClick,
        children
    }: IButtonInterface) => {

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
}