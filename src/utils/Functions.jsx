const numberFormatter = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const numberFormatter2 = (num) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find((item) => num >= item.value);
  return item
    ? (num / item.value).toFixed(2).replace(rx, '$1') + item.symbol
    : '0';
};

export { numberFormatter, numberFormatter2 };
