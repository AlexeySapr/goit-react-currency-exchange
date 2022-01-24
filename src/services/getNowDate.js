const getNowDate = () => {
  const now = new Date();

  const day = now.getDate();
  const formatDay = day < 10 ? '0' + day : day;
  const month = now.getMonth() + 1;
  const formatMonth = month < 10 ? '0' + month : month;
  const year = now.getFullYear();

  const formatedDate = '' + year + formatMonth + formatDay;
  return formatedDate;
};

const nowDate = getNowDate();

export default nowDate;
