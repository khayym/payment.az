import { CARD_TYPES } from "../constants/credit";

const getCardTypeByValue = value => CARD_TYPES.filter(cardType => cardType.startPattern.test(value))[0];


export const formatCardNumber = cardNumber => {
  const cardType = getCardTypeByValue(cardNumber);
  if (cardNumber.length > 0) return { formatedNumber: cardNumber.match(/(\d{1,4})/g).join(' '), type: cardType?.type, original: cardNumber }
  else return { formatedNumber: null, type: undefined, original: cardNumber }
};

export const formatExpiry = event => {
  const eventData = event.nativeEvent && event.nativeEvent.data;
  const prevExpiry = event.split(' / ').join('/');

  if (!prevExpiry) return null;
  let expiry = prevExpiry;
  if (/^[2-9]$/.test(expiry)) {
    expiry = `0${expiry}`;
  }

  if (prevExpiry.length === 2 && +prevExpiry > 12) {
    const [head, ...tail] = prevExpiry;
    expiry = `0${head}/${tail.join('')}`;
  }

  if (/^1[/-]$/.test(expiry)) {
    return `01 / `;
  }

  expiry = expiry.match(/(\d{1,2})/g) || [];
  if (expiry.length === 1) {
    if (!eventData && prevExpiry.includes('/')) {
      return expiry[0];
    }
    if (/\d{2}/.test(expiry)) {
      return `${expiry[0]} / `;
    }
  }
  if (expiry.length > 2) {
    const [, month, year] = expiry.join('').match(/^(\d{2}).*(\d{2})$/) || [];
    return [month, year].join(' / ');
  }
  return expiry.join(' / ');
};