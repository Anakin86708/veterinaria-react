const addZeros = function (rawDay, rawMonth) {
    const day = rawDay.toString().length < 2 ? '0' + rawDay.toString() : rawDay;
    const month = rawMonth.toString().length < 2 ? '0' + rawMonth.toString() : rawMonth;
    return [day, month];
}

/**
 * Used to convert dates from the service output format 'dd/MM/yyyy' to the format 'yyyy-MM-dd'.
 */
const dateConverter = function (inputDate) {
    const [rawDay, rawMonth, year] = inputDate.split('/');
    const [day, month] = addZeros(rawDay, rawMonth);
    return year + '-' + month + '-' + day;
}

/**
 * Used to convert dates from the input field format yyyy-MM-dd to the expected on the service as dd/MM/yyyy.
 */
const dateConverterToService = function (inputDate) {
    const [year, rawMonth, rawDay] = inputDate.split('-');
    const [day, month] = addZeros(rawDay, rawMonth);

    return day + '/' + month + '/' + year;
}

export {
    dateConverter,
    dateConverterToService
};