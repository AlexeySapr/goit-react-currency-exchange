import { Form } from 'react-bootstrap';
import FormCard from '../formCard/FormCard';
import s from './ExpenseCard.module.css';

const ExpenseCard = ({ select, currency, handleCurrency, handleValue }) => {
  return (
    <FormCard>
      <div className={s.formBox}>
        <Form.Select
          size="lg"
          className={s.formSelect}
          onChange={event => handleCurrency(event.currentTarget.value)}
          value={select}
        >
          <option value="UAH">UAH</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="RUB">RUB</option>
        </Form.Select>
        <Form.Control
          type="number"
          size="lg"
          name="name"
          value={currency}
          onChange={event => handleValue(event.currentTarget.value)}
        />
      </div>
    </FormCard>
  );
};

export default ExpenseCard;
