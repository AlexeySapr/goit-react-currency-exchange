import { Form } from 'react-bootstrap';
import FormCard from '../formCard/FormCard';
// import resp from '../../data/response.json';
import s from './ExpenseCard.module.css';

const ExpenseCard = ({
  selectCurrency,
  currencyValue,
  handleCurrency,
  handleValue,
}) => {
  return (
    <FormCard>
      <div className={s.formBox}>
        <Form.Select
          size="lg"
          className={s.formSelect}
          onChange={event => handleCurrency(event.target.value)}
          value={selectCurrency}
        >
          <option value="UAH">UAH</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="RUB">RUB</option>
        </Form.Select>

        <Form.Control
          type="number"
          min={0}
          size="lg"
          value={currencyValue}
          onChange={event => handleValue(event.target.value)}
        />
      </div>
    </FormCard>
  );
};

export default ExpenseCard;

//  {
//    resp.map(element => {
//      return (
//        <option key={element.CurrencyCode} value={`${element.CurrencyCodeL}`}>
//          {element.CurrencyCodeL}
//        </option>
//      );
//    });
//  }
