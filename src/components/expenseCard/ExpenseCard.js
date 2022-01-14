import s from './ExpenseCard.module.css';
import { Form } from 'react-bootstrap';
import FormCard from '../formCard/FormCard';

const ExpenseCard = () => {
  return (
    <FormCard>
      <div className={s.formBox}>
        <Form.Select size="lg" className={s.formSelect}>
          <option>UAH</option>
          <option value="1">EUR</option>
          <option value="2">USD</option>
          <option value="3">RUB</option>
        </Form.Select>
        <Form.Control type="number" size="lg" name="name" defaultValue={0} />
      </div>
    </FormCard>
  );
};

export default ExpenseCard;
