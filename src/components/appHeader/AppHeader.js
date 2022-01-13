import s from './AppHeader.module.css';

const AppHeader = ({ title }) => {
  return (
    <header className={s.header}>
      <h1 className={s.title}>{title}</h1>
    </header>
  );
};

export default AppHeader;
