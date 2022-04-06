/**
 * Used to convert dates from the service output format 'dd/MM/yyyy' to the format 'yyyy-MM-dd'.
 */
const dateConverter = function (inputDate, locale = []) {
    const [day, month, year] = inputDate.split('/')
    return year + '-' + month + '-' + day;
}

export default dateConverter;