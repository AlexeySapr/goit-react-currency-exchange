import { useSelector } from 'react-redux';
import * as selectors from '../redux/selectors';
import { Container } from 'react-bootstrap';
import Section from '../components/section/Section';
import BackBtn from '../components/backBtn/BackBtn';

const SuccessPage = () => {
  const changingValue = useSelector(selectors.getСhangingValue);
  const getingValue = useSelector(selectors.getGetingValue);
  const changingCurrency = useSelector(selectors.getСhangingCurrency);
  const getingCurrency = useSelector(selectors.getGetingCurrency);

  return (
    <Container>
      <Section>
        <h3 style={{ textAlign: 'center' }}>
          {`Hooray! You have successfully exchanged ${changingValue} ${changingCurrency} at ${getingValue} ${getingCurrency}`}
        </h3>
      </Section>
      <BackBtn />
    </Container>
  );
};

export default SuccessPage;
