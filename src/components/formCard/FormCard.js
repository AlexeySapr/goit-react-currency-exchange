import s from './FormCard.module.css';

// const FormCard = ({ children }) => {
//   return <div className={s.card}>{children}</div>;
// };

const FormCard = ({ num }) => {
  return <div className={s.card}>{num}</div>;
};

export default FormCard;
