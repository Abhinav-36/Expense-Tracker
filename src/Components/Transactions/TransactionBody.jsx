import React, { useContext, useEffect, useState } from 'react';
//styles
import "./TransactionBody.css"
//components
import TransactionBar from './Transactionbar';
import PageNavigateBar from './PageNavigateBar';
//contexts
import { TransactionsData } from '../../Contexts/context';

const TransactionsBody = () => {
    //contexts
    const [transactionData, setTransactionData] = useContext(TransactionsData);
    //states
    const [pages, setPages] = useState({ currentPage: 1, totalPages: 1 })
    //everytime transactionData updates
    useEffect(()=> {
        onLoad();
    }, [transactionData])
    //functions
    const displayTransactions = () => {
        let key = 0;
        if(transactionData && transactionData.length){
            let arr =[];
            let startIndex = 5 * (pages.currentPage - 1)
            let endIndex = (5 * pages.currentPage) - 1

            for(let i = startIndex; i <= endIndex; i++){
                if(i >= transactionData.length) break;
                const { name, date, price, category, id } = transactionData[i];
                arr.push(
                    <TransactionBar key={`${key++}`} name={name} date={date} amount={price} category={category} id={id}/>
                )
            }

            return arr;
        }
    }
    const onLoad = () =>{
        setPages({ currentPage: 1, totalPages: Math.ceil(transactionData.length / 5) })
    }
    
    const updatePage = direction => {
        let {currentPage, totalPages} = pages;
        if(direction === "right" && currentPage < totalPages){
            setPages({...pages, currentPage: currentPage+1})
        }
        if(direction === "left" && currentPage > 1){
            setPages({...pages, currentPage: currentPage-1})
        }
    }
    return (
                transactionData.length !== 0 ? (
                    <>
                        <div className='TransactionBody'>
                        <div className='transactionBodyUpper'>
                            <div className='transactionPage'>{displayTransactions()}</div>
                        </div>
                        <div className='transactionBodylower'>
                            <PageNavigateBar key={"pageNavigate"} pages={pages} updatePage={updatePage} />
                        </div>
                        </div>
                    </>
                ) : (
                    <div className='notrans'>
                        No Transactions!
                    </div>
                )
        
    );
};

export default TransactionsBody;