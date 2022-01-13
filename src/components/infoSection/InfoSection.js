import s from './InfoSection.module.css';

const InfoSection = ({ budget, expenses }) => {
  const balanse = budget - expenses;

  const balanseStyle = () => {
    if (balanse < 0) {
      return 'expensesItem';
    }
    return 'budgetItem';
  };

  //   let balanseStyle = balanse => {
  //     if (balanse < 0) {
  //       return 'red';
  //     }
  //     return 'green';
  //   };

  return (
    <ul className={s.list}>
      <li className={s.budgetItem}>
        <p>Budget</p>
        <p>{budget} $</p>
      </li>
      <li className={s.expensesItem}>
        <p>Expenses</p>
        <p>{expenses} $</p>
      </li>
      <li className={s[balanseStyle()]}>
        {/* <li style={{ color: `${balanseStyle()}` }}> */}
        <p>Balanse</p>
        <p>{balanse} $</p>
      </li>
    </ul>
  );
};

export default InfoSection;
