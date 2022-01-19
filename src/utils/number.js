export const numberWithoutComma = (number) => {
  return Number(number.toString().replace(/,/g, ""));
};

export function numberWithComma(number) {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
