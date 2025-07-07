import React from 'react';
//styles
import "./Transactions.module.css";
//components
import TransactionBody from './TransactionBody';

const Transactions = () => {
    return (
        <div className='Transactions'>
            <h2>Recent Transactions</h2>
            <TransactionBody />
        </div>
    );
};

export default Transactions;