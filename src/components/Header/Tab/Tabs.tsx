import tabs from './tabs.module.css'
import React, {useState} from "react";
import {TabMainContent} from "../TabMainContent";


interface IList {
    label: string
    content: string
}

const navList: IList[] = [
    {label: 'Раздел1', content: 'Раздел 1-раздел 1 вкладка 1 '},
    {label: 'Раздел2', content: 'Раздел 2-раздел 2 вкладка 2 '},
    {label: 'Раздел3', content: 'Раздел 3-раздел 3 вкладка 3 '}
]

export const Tabs = () => {K
    const [tabIndex, setTabIndex] = useState(0);
    const [clickTab, setClickTab] = useState(false)
    const openTab = (e: any): void => {
        setClickTab(true)
        setTabIndex(e.target.dataset.index)
    }
    return (
        <nav className={tabs.nav_menu}>
            <ul className={tabs.nav_list}>
                {navList.map((i, index) =>
                    (<li key={index} onClick={openTab}>
                        <a href="#" className={tabs.nav_link} data-index={index}>{i.label}</a>
                    </li>))}
            </ul>
            {clickTab && <TabMainContent title={navList[tabIndex].label} content={navList[tabIndex].content}/>}
        </nav>
    )
}
