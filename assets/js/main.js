// JavaScript Document
$(document).ready(function() {	
	$('#smallText').hide();
}); 
function largeText() {
	$("#bodyText").css('font-size','16px');
	$("#largeText").hide();
	$('#smallText').show();
}	
function smallText() {
	$("#bodyText").css('font-size','14px');
	$('#smallText').hide();
	$("#largeText").show();	
}	