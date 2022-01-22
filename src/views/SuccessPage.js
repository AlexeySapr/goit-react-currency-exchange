import { useSelector } from 'react-redux';
import { selectors } from 'reduxData';
import { Container } from 'react-bootstrap';
import Section from 'components/section/Section';
import BackBtn from 'components/backBtn/BackBtn';

const SuccessPage = () => {
  const changingValue = useSelector(selectors.getСhangingValue);
  const getingValue = useSelector(selectors.getGetingValue);
  const changingCurrency = useSelector(selectors.getСhangingCurrency);
  const getingCurrency = useSelector(selectors.getGetingCurrency);

  const succsessText = `Hooray! You have successfully exchanged ${changingValue} ${changingCurrency} at ${getingValue} ${getingCurrency}`;

  const needExchangeText = `Oops! Go back to do some exchange`;

  return (
    <Container>
      <Section>
        <h3 style={{ textAlign: 'center' }}>
          {getingValue > 0 ? succsessText : needExchangeText}
        </h3>
      </Section>
      <BackBtn />
    </Container>
  );
};

export default SuccessPage;
