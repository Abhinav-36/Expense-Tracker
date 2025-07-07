import { useEffect, useRef, useState } from 'react'
//styles
import styles from './App.module.css';
//components
import Navbar from "./Components/Navbar/Navbar"
import Appbody from './Components/AppBody/Appbody';
import AppHead from "./Components/AppHead/AppHead"
//contexts
import { TransactionsData, Balance } from "./Contexts/context"
//variables
// import { dummyData } from './dummyTransactions';

function App() {
  const [money, setMoney] = useState({
    balance: 5000,
    expenses: 0
  })
  const [transactionData, setTransactionData] = useState([]);
  const initialRender = useRef(true);

  useEffect(()=>{
    if(initialRender.current)  onLoad();

    return(() => {
      initialRender.current = false;
    })
  }, [])

  useEffect(()=> {
    //save data to local storage and if it is initial render skip saving
    if(!initialRender.current) localStorage.setItem("expenses", JSON.stringify({money, transactionData}));
    // console.log(transactionData);
    
  }, [money, transactionData])

  //functions
  const onLoad = () => {
    //load data from local storage if present
    const localData = localStorage.getItem("allData");
    if(localData){
      const {money, transactionData} = JSON.parse(localData);
      setMoney(money);
      setTransactionData(transactionData);
    }
  }
  

  return (
    <main className='App'>
      <Balance.Provider value={[money, setMoney]}>
      <TransactionsData.Provider value={[transactionData, setTransactionData]}>
        <Navbar />
        <AppHead balance={money.balance} expenses={money.expenses}/>
        <Appbody transactionData={transactionData}/>
      </TransactionsData.Provider> 
      </Balance.Provider>
    </main>
  )
}

export default App