import './App.css';

import { Container, Row, Button } from 'react-bootstrap';

import Section from './components/section/Section';
import AppHeader from './components/appHeader/AppHeader';

import FormCard from './components/formCard/FormCard';
import CurrentRate from './components/currentRate/CurrentRate';
import Title from './components/title/Title';
import MainSection from './components/mainSection/MainSection';

const App = () => {
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
              <Button variant="primary">Exchange</Button>
            </FormCard>
          </Section>
        </Row>
      </Container>
    </>
  );
};

export default App;
