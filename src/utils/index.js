export const numberCommas = (number) => {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

export const sortbyText = (a, b, customField) => {
  
};