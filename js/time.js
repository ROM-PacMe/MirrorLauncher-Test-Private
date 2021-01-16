var thehours = new Date().getHours();

//Moment.js is being used to display a live time feed

// uso el idioma en español
moment.locale('es');

function update_date() {
  $('.time').html(moment().format('LT'));
	$('.date').html(moment().format('LL'));
}
setInterval(update_date, 1000);