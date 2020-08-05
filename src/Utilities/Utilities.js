//This uses the .numberFormat to convert the int into currency
const formatter = new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'GBP',
  })

  export default formatter;