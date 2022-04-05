import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { selectors } from 'reduxData';

import FormCard from '../formCard/FormCard';
import s from './ExpenseCard.module.css';

const ExpenseCard = ({
  selectCurrency,
  currencyValue,
  handleCurrency,
  handleValue,
}) => {
  const currencyRate = useSelector(selectors.getCurrencyRate);
  const currencies = Object.keys(currencyRate);

  return (
    <FormCard>
      <div className={s.formBox}>
        <Form.Select
          size="lg"
          className={s.formSelect}
          onChange={event => handleCurrency(event.target.value)}
          value={selectCurrency}
        >
          {currencies.map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </Form.Select>

        <Form.Control
          type="number"
          min={0}
          size="lg"
          placeholder="0"
          value={currencyValue !== 0 ? currencyValue : ''}
          onChange={event => handleValue(event.target.value)}
        />
      </div>
    </FormCard>
  );
};

export default ExpenseCard;
