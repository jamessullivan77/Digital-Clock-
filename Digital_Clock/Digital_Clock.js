document.addEventListener("DOMContentLoaded",function(){

// (new Date).getSeconds ()


	var currentDate = new Date
// 	if ( hours > 12 ) {
// 			hours = 01;
// } else {
// 	document.getElementById("hours").innerText = hours;
// }
	var hours = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	var seconds = currentDate.getSeconds();



	document.getElementById("hours").innerText = hours;
	document.getElementById("minutes").innerText = minutes;
	document.getElementById("seconds").innerText = seconds;
	





	setInterval(updateSeconds,1000);

	function updateSeconds() {
		var seconds = parseInt(document.getElementById("seconds").innerText)+1;
		if( seconds > 59 ) {
			document.getElementById("seconds").innerText = "00";
			updateMinutes()
			
		} else {
			document.getElementById("seconds").innerText = seconds;
		}
	}
	
	function updateMinutes(){
		var minutes = parseInt(document.getElementById("minutes").innerText)+1;
		if ( minutes > 59 ) {
			document.getElementById("minutes").innerText = "00";
			updateHours()
		} else {
			document.getElementById("minutes").innerText = minutes;
		}
	}

	function updateHours(){
		var hours = parseInt(document.getElementById("hours").innerText)+1;
		if ( hours > 12 ) {
			hours = parseInt(document.getElementById("hours").innerText)-12;
		}
		document.getElementById("hours").innerText = hours;
	};

	function changeBackground() {
		var sunrise = document.getElementById("sunrise".innerHTML)
		if(hours == 6, minutes == 30) {
			document.write("sunrise")
			
			

		}
	}



});