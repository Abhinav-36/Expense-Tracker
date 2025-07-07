import React from 'react';
//styles
//styles
import styles from "./Topexpenses.module.css";
import TopExpenseBody from './TopexpenseBody';
const TopExpenses = () => {
    return (
        <div className={styles['Expenses']}>
            <h2>Top Expenses</h2>
            <TopExpenseBody />
        </div>
    );
};

export default TopExpenses;