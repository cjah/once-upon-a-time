const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const stringifyDates = (inputDate) => {
	const date = new Date(inputDate);
	return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}

export default stringifyDates;