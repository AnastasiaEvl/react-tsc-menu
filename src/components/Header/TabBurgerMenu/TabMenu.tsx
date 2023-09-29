import tabBtn from './tabBurgerMenu.module.css'
import React from "react";

interface IList {
    label: string
}

const list: IList[] = [
    {label: 'Главная'},
    {label: 'О нас'},
    {label: 'Услуги'},
    {label: 'Контакты'}
]

interface ITabMenu {
    opened : boolean
    onClickIt: (event: React.MouseEvent<HTMLButtonElement>) => void
}
export const TabBurgerMenu = ({opened, onClickIt}: ITabMenu) => {
    return (
        <div className={opened ? `${tabBtn.burger_nav_active}` : `${tabBtn.burger_nav_inactive}`}>
            <nav>
                <span className={tabBtn.nav_close_btn} onClick={onClickIt}/>
                <ul className={tabBtn.nav_list}>
                    {list.map((i, index) =>
                        (<li key={index} className={tabBtn.nav_list_item}>
                            <a href="#" className={tabBtn.nav_link}>{i.label}</a></li>))}
                </ul>
            </nav>
        </div>
    )
}
