import {Burger} from "./Burger";
import headerMenu from './navBar.module.css'
import {useState} from "react";
import {Tabs} from "./Tab";
import {TabBurgerMenu} from './TabBurgerMenu'

export const NavBar = () => {

    const [menuStatus, setMenuStatus] = useState(false);
    const handlerMenu = (): void => {
        setMenuStatus(!menuStatus)
    }

    return (
        <header className={headerMenu.header_menu}>
            <Tabs/>
            <Burger opened={menuStatus} onClickBtn={handlerMenu}/>
            <TabBurgerMenu opened={menuStatus} onClickIt={handlerMenu}/>
        </header>
    )
}
