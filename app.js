


window.onload=function(){


//Select the video
const player = document.querySelector('video');

//Select all the spans in p (ignoring the ones in video)
const span = document.querySelector('p').querySelectorAll('span');


//Event listener for the time of the video. 
player.addEventListener('timeupdate', function getTime(){
	
var i;
	//Get the current video time to 3 decimal places
const time = player.currentTime.toFixed(3);

 for(i = 0; i < span.length; i++){

 	const dataStart = span[i].getAttribute("data-start");
	const dataEnd = span[i].getAttribute("data-end");
		console.log(span[i]);
		console.log(dataStart);
		console.log(dataEnd);
		console.log(time);

 	if (time > dataStart && time > dataEnd) {
 		// span[i].classList.add("highlight");
		


 	}
 
 }
 
});







}





