import Piechart from "../Piechart/Piechart";
import styles from "./AppHead.module.css"
import Categories from "../Categories/Categories";
import Card from "../Card/Card";

function AppHead({balance, expenses}) {
  return (
        <div className={styles['appHead']}> 
          <Card text={"Wallet"} value={balance} />
          <Card text={"Expenses"} value={expenses} />
          <div className={styles['categories']}>
            <Piechart />
            <div className={styles['category']}>
              <Categories section="Food" />
              <Categories section="Entertainment" />
              <Categories section="Travel" />
            </div>
          </div>
        </div>
  );
}

export default AppHead;