import css from "./TransactionItem.module.css"

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.item}>
      <td className={css.info}>{type}</td>
      <td className={css.info}>{amount}</td>
      <td className={css.info}>{currency}</td>
    </tr>
  );
};

export default TransactionItem;
