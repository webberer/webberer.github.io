function date() {
	var date = new date();
	var month = date.getmonth() + 1;
	var day = date.getDate();
	var year = date.getFullYear();
	
	document.getElementById('dateBox').innerHTML = day + '/' + month + '/' + year;
	
}