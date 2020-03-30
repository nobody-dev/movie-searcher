import moment from 'moment';

export const money = function(value) {
  let arr = value.toString().split('').reverse().map((item, i) => {
    if(i % 3 === 0) {
      return item + ' ';
    } else {
      return item;
    }
  }).reverse().join('');
  return arr + '$';
};

export const defaultDate = function(value) {
  return moment(value).format('DD.MM.YYYY');
};
