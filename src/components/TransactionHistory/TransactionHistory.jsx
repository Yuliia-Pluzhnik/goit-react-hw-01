import TransactionItem from '../TransactionItem/TransactionItem';
import css from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.title}>
          <th className={css.name}>Type</th>
          <th className={css.name}>Amount</th>
          <th className={css.name}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

