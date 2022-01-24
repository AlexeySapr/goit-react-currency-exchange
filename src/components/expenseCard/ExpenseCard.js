import { Form } from 'react-bootstrap';
// import { useGetCurrencyRateQuery } from 'services/currencyRateAPI';
// import nowDate from 'services/getNowDate';

import FormCard from '../formCard/FormCard';
import s from './ExpenseCard.module.css';

const ExpenseCard = ({
  selectCurrency,
  currencyValue,
  handleCurrency,
  handleValue,
}) => {
  // const { data } = useGetCurrencyRateQuery(nowDate);
  // console.log('data: ', data);

  return (
    <FormCard>
      <div className={s.formBox}>
        <Form.Select
          size="lg"
          className={s.formSelect}
          onChange={event => handleCurrency(event.target.value)}
          value={selectCurrency}
        >
          {/* {data.map(cur => (
            <option key={cur.cc} value={cur.cc}>
              {cur.cc}
            </option>
          ))} */}
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
