import { useContext, useEffect, useState } from "react";
import { TransactionsData } from "../../Contexts/context";


export const useChartData = (data) => {

    const [chartdata,setChartData] = useState(data);
    const [transactionData,setTransactionData] = useContext(TransactionsData);

    
    useEffect(() => {
            setChartData([
            { name: 'Entertainment', value: 0 },
            { name: 'Food', value: 0 },
            { name: 'Travel', value: 0 },
        ]);
        calculateCategories();
        }, [transactionData]
    )

    const calculateCategories = () => {
        // console.log(chartdata);

        let foodTotal = 0, entertainmentTotal = 0, travelTotal = 0;
        transactionData.forEach(item => {
            if(item.category === "food"){
                foodTotal += Number(item.price);
                setChartData(pre=>[pre[0], {name: "Food", value: foodTotal},pre[2]])
            }
            if(item.category === "entertainment"){
                entertainmentTotal += Number(item.price);
                setChartData(pre=>[{name: "Entertainment", value: entertainmentTotal}, pre[1], pre[2]])
            }
            if(item.category === "travel") {
                travelTotal += Number(item.price);
                setChartData(pre=>[pre[0], pre[1], {name: "Travel", value: travelTotal}])
            }
        });
    }
    // console.log(chartdata);
    
    return chartdata;
}