import React from 'react';
//styles
import styles from "./Transactions.module.css";
//components
import TransactionBody from './TransactionBody';

const Transactions = () => {
    return (
        <div className={styles['Transactions']}>
            <h2 className={styles['heading']}>Transactions</h2>
            <TransactionBody />
        </div>
    );
};

export default Transactions;