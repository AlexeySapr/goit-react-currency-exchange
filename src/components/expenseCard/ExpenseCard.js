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

  let currencies = [];
  for (const currency in currencyRate) {
    currencies.push(currency);
  }

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
          value={currencyValue}
          onChange={event => handleValue(event.target.value)}
        />
      </div>
    </FormCard>
  );
};

export default ExpenseCard;
