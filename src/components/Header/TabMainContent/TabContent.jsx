import tabContent from './tabsContent.module.css'

export const TabMainContent = ({ title, content }) => (
    <div className = {tabContent.tab_content}>
        <h2 className={tabContent.title}>{title}</h2>
        <p>{content}</p>
    </div>
);
