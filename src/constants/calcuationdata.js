export const convertNumberToDay = value => {
  const weekdays = ['Sat', 'Sun', 'Mon', 'Thu', 'Wed', 'Tue', 'Fri'];

  return weekdays[value];
};
export const checkCurrenDate = value => {
  const date = new Date();
  return value >= (date.getDay() + 1) % 7;
};

export const checkTodayHasAnyAppointMent = value => {
  const date = new Date();
  return value === (date.getDay() + 1) % 7;
};
export const getSelectedDate = value => {
  const date = new Date();
  const gap = !checkCurrenDate(value)
    ? 7 + (value - ((date.getDay() + 1) % 7))
    : value - ((date.getDay() + 1) % 7);
  date.setDate(date.getDate() + gap);

  return date.toISOString();
};
export const convertStringToDate = value => {
  const date = new Date(value);
  return date;
};

export const sortByDate = value => {
  const array = value;

  array.sort((a, b) => {
    return (
      convertStringToDate(a.selectedDay) > convertStringToDate(b.selectedDay)
    );
  });
  return array;
};

export const insertIntoDateArray = (array, value) => {
  const index = array.indexOf(value);
  if (index === -1) array.push(value);

  return array;
};

export const deleteFromDateArray = (array, value) => {
  const index = array.indexOf(value);
  if (index != -1) array.splice(index, 1);

  return array;
};

export const findFromDateArray = (array, value) => {
  const index = array.indexOf(value);
  return index != -1 ? true : false;
};

export const checkDateIsPrevious = date => {
  const today = new Date();
  return date.getDate() >= today.getDate();
};

export const searchMedicineData = (array, subString) =>{
  
  
} 