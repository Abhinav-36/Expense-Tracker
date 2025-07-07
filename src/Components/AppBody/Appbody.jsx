import React from 'react';
//styles
import styles from "./Appbody.module.css";
import Transactions from '../Transactions/Transactions';
import TopExpenses from '../Topexpenses/Topexpenses';
//components

const AppBody = () => {
    return (
        <div className={styles['AppBody']}>
            <Transactions />
            <TopExpenses />
        </div>
    );
};

export default AppBody;