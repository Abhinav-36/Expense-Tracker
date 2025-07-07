import React, { useContext, useEffect, useState } from 'react';
//components
import FormButtons from '../FormButtons/FormsButtons';
//contexts
import { TransactionsData, Balance } from '../../Contexts/context';


const ModalForm = props => {
    //props
    const { toggleModal, formType, existingData } = props;
    //contexts
    const [money, setMoney] = useContext(Balance);
    const [transactionData, setTransactionData] = useContext(TransactionsData);
    //check for existing data to update transaction
    useEffect(()=> {
        if(existingData) updateFormDataWithExistingData();
    }, [])
    //states
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        date: "", //gives date in yyyy-mm-dd format
        category: "",
    })


    const [balanceFormData, setBalanceFormData] = useState({income: ""});
    //functions
    const updateFormDataWithExistingData = () => {
        console.log(existingData)
        const {name, date, amount, category} = existingData;
        setFormData({
            name: name,
            price: amount,
            date: date,
            category: category
        })
    }
    const handleChange = (event) => {
        const key = (event).target.name, value = (event).target.value;
        setFormData({...formData, [key]: value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Edit Expense
        if(formType === "Add Balance"){
            setMoney({
                ...money,
                balance: money.balance + balanceFormData.income
            });
        }
        if(formType === "Add Expense"){
            let newExpense = money.expenses + Number(formData.price);
            let newBalance = money.balance - Number(formData.price);

            if(newBalance < 0){
                return alert("Out of balance");
            }else{
                let newId = new Date() / 1;
                let newTransaction = {...formData, id: newId};
                setMoney({balance: newBalance, expenses: newExpense});
                setTransactionData([...transactionData, newTransaction]);
                
            }
        }
        if(formType === "Edit Expense"){
            let newExpense = money.expenses + Number(formData.price) - Number(existingData.amount);
            let newBalance = money.balance - Number(formData.price) + Number(existingData.amount);

            if(newBalance < 0) return alert("Out of balance");
            
            //get index of transaction
            const indexOfTransaction = transactionData.findIndex(transaction => existingData.id === transaction.id);
            //store transaction data in new variable
            const updatedTransaction = {...formData, id: existingData.id};
            //add that new tranaction at that index with same id
            transactionData[indexOfTransaction] = updatedTransaction;

            setMoney({balance: newBalance, expenses: newExpense});
            setTransactionData([...transactionData]);
        }

        toggleModal();
    }

    const expenseAndEditInput = () => {
        return (
            <div className='formInputsDiv'>
                <input
                required
                value={formData.name}
                className="formInput" 
                onChange={handleChange} 
                placeholder='Title' 
                type='text' 
                name="title"
                autoComplete='title'
                autoFocus
                />
                <input 
                required
                value={formData.price}
                className="formInput" 
                onChange={handleChange} 
                placeholder='Price' 
                type='number' 
                name='price'
                />
                <select
                value={formData.category} 
                className="formInput" 
                onChange={handleChange} 
                name="category"
                aria-label="Category">
                    <option value={null} >Select Category</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="travel">Travel</option>
                </select>
                <input 
                required
                value={formData.date}
                className="formInput" 
                onChange={handleChange} 
                placeholder='dd/mm/yyyy' 
                type='date' 
                name='date'
                />
            </div>
        )
    } 
    const incomeInputs = () => {
        return (
            <div className='balanceFormInputDiv'>
                <input 
                className="formInput" 
                onChange={e=> setBalanceFormData({income: +e.target.value})} 
                placeholder='Income Amount' 
                type='number' 
                name='income' 
                value={balanceFormData.income}
                autoFocus
                required
                />
            </div>
        )
    }
    return (
        <form className='modalForm expensesForm' onSubmit={handleSubmit}>
            {formType === "Add Balance" ? incomeInputs() : expenseAndEditInput()}
            <FormButtons text={formType} toggleModal={toggleModal}/>
        </form>
    )
}

export default ModalForm;