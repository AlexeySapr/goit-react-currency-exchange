import './App.css';

import { useSelector } from 'react-redux';
import * as selectors from './redux/selectors';
import { reserve } from './services/reserve';

import { Container, Row, Button } from 'react-bootstrap';

import Section from './components/section/Section';
import AppHeader from './components/appHeader/AppHeader';

import FormCard from './components/formCard/FormCard';
import CurrentRate from './components/currentRate/CurrentRate';
import Title from './components/title/Title';
import MainSection from './components/mainSection/MainSection';

const App = () => {
  const getingValue = useSelector(selectors.getGetingValue);
  const getingCurrency = useSelector(selectors.getGetingCurrency);

  const getBtnTitle = value => {
    if (value === 0) {
      return 'Enter the amount';
    }
    if (value > reserve[getingCurrency]) {
      return 'Not enough reserve';
    } else {
      return 'Exchange';
    }
  };

  const exchangeBtnTitle = getBtnTitle(getingValue);

  return (
    <>
      <AppHeader title={'Currency exchange'} />
      <Container>
        <Row>
          <Section>
            <CurrentRate />
          </Section>
        </Row>

        <Row>
          <Section>
            <Title text={'Exchange values'} />
          </Section>
        </Row>

        {/* *********************** */}
        <Row>
          <MainSection />
        </Row>
        {/* *********************** */}

        <Row>
          <Section>
            <FormCard>
              <Button
                variant="primary"
                disabled={
                  getingValue === 0 || getingValue > reserve[getingCurrency]
                }
              >
                {exchangeBtnTitle}
              </Button>
            </FormCard>
          </Section>
        </Row>
      </Container>
    </>
  );
};

export default App;
