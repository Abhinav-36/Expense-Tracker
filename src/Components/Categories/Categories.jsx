import styles from "./Categories.module.css"

export default function Categories({section}){
    return(
        <div className={styles['sections']}>
            <div className={section === 'Food' ? styles['food'] : (section === 'Entertainment' ? styles['entertainment'] : styles['travel'])}></div>
            <span className={styles['category']}>{section}</span>
        </div>
        
    );
}