import { Button } from 'react-bootstrap';
import s from './ExpenseInfoSection.module.css';

const ExpenseInfoSection = ({ expenses, delItems }) => {
  return (
    <table className={s.infoTable}>
      <thead>
        <tr>
          <th>Expense name</th>
          <th>Expense amount</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {expenses.map(({ id, name, amount }) => {
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{amount}</td>
              <td>
                <Button variant="primary" onClick={() => delItems(id)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ExpenseInfoSection;
