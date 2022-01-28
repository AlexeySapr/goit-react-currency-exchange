import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';

import { selectors } from 'reduxData';
import { reserve } from 'services';

import Section from 'components/section/Section';
import FormCard from 'components/formCard/FormCard';
import CurrentRate from 'components/currentRate/CurrentRate';
import Title from 'components/title/Title';
import MainSection from 'components/mainSection/MainSection';
import LinkBtn from 'components/linkBtn/LinkBtn';
import LoadSpiner from 'components/loadSpiner/LoadSpiner';

const HomePage = () => {
  const getingValue = useSelector(selectors.getGetingValue);
  const getingCurrency = useSelector(selectors.getGetingCurrency);
  const changingCurrency = useSelector(selectors.getСhangingCurrency);
  const isFetching = useSelector(selectors.getIsLoading);
  const error = useSelector(selectors.getError);

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

  const loader = isFetching && <LoadSpiner />;
  const errorData = error && <div>{error}</div>;

  return (
    <>
      {loader || errorData || (
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
                <LinkBtn
                  btnText={exchangeBtnTitle}
                  isDisabled={
                    getingValue === 0 ||
                    getingValue > reserve[getingCurrency] ||
                    changingCurrency === getingCurrency
                  }
                />
              </FormCard>
            </Section>
          </Row>
        </Container>
      )}
    </>
  );
};

export default HomePage;
