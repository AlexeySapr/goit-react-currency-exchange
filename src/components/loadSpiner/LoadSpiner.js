import { Spinner } from 'react-bootstrap';
import s from './LoadSpiner.module.css';

const LoadSpiner = () => {
  return <Spinner animation="border" variant="primary" className={s.spiner} />;
};

export default LoadSpiner;
