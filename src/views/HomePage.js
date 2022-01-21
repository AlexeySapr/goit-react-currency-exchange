import React from 'react';

import { useSelector } from 'react-redux';
import * as selectors from '../redux/selectors';
import { reserve } from '../services/reserve';

import { Container, Row, Button } from 'react-bootstrap';

import Section from '../components/section/Section';

import FormCard from '../components/formCard/FormCard';
import CurrentRate from '../components/currentRate/CurrentRate';
import Title from '../components/title/Title';
import MainSection from '../components/mainSection/MainSection';

const HomePage = () => {
  const getingValue = useSelector(selectors.getGetingValue);
  const getingCurrency = useSelector(selectors.getGetingCurrency);
  const changingCurrency = useSelector(selectors.getСhangingCurrency);

  const getBtnTitle = () => {
    if (getingValue === 0) {
      return 'Enter the amount';
    }
    if (changingCurrency === getingCurrency) {
      return 'Change currency';
    }
    if (getingValue > reserve[getingCurrency]) {
      return 'Not enough reserve';
    } else {
      return 'Exchange';
    }
  };

  const exchangeBtnTitle = getBtnTitle();
  return (
    <>
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

        <Row>
          <MainSection />
        </Row>

        <Row>
          <Section>
            <FormCard>
              <Button
                variant="primary"
                disabled={
                  getingValue === 0 ||
                  getingValue > reserve[getingCurrency] ||
                  changingCurrency === getingCurrency
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

export default HomePage;
