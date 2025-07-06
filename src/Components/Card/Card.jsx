import styles from "./Card.module.css"
import Button from "../Buttons/Buttons";
import { useState } from "react";
import Modal from "../Modal/Modal"

export default function Card({text,value}){

    const [modalOn, setModalOn] = useState(false);
    //functions
    const toggleModal = () => setModalOn(!modalOn);

    return(
        <div className={styles['card']}>
            <h2 className={styles['heading']}>{text==="Expenses" ? "Expenses" : "Wallet Balance"}: 
                <span className={text === "Expenses" ? styles['expenses-amount'] : styles['balance-amount']}> ₹{value}</span>
            </h2>
            <Button 
                text={text === "Expenses" ? "+ Add Expense" : "+ Add Income"}
                background={text === "Expenses" ? "gradientRed" : "gradientGreen"}
                buttonSize = "largeButton"
                clickFunction={toggleModal}
            />
            {modalOn ? 
                <Modal 
                toggleModal={toggleModal} 
                text={text === "Expenses" ? "Add Expense" : "Add Balance"} /> 
            :null
            }
        </div>
    );
}