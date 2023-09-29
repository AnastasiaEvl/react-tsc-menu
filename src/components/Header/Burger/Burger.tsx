import burgerBtn from './burger.module.css'
import React from "react";

interface ButtonBurger {
    onClickBtn: (event: React.MouseEvent<HTMLButtonElement>) => void
    opened: boolean
}

export const Burger = ({onClickBtn, opened}: ButtonBurger) => {
    return (
        <span onClick={onClickBtn} className={burgerBtn.burger_btn} tabIndex={0}>
            <span className={opened ? `${burgerBtn.burger_btn_inactive}` : `${burgerBtn.burger_btn_active}`}/>
        </span>
    )
}
