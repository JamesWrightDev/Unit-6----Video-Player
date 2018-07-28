$(document).ready(function(){$('video, audio').mediaelementplayer();});
window.onload = function() {
	//Select the video
	const player = document.querySelector('video');
	//Select all the spans in p (ignoring the ones in video)
	const span = document.querySelector('p').querySelectorAll('span');
	//Event listener for ther4 time of the video. 



	//Add event listener for video time update
	player.addEventListener('timeupdate', function() {
		let i;

		//Get the current video time to 3 decimal places
		const time = parseFloat(player.currentTime.toFixed(3));

		//Loops through all the spans when the video time updates
		for (i = 0; i < span.length; i++) {

					
			//Get the current spans data start time
			const dataStart = parseFloat(span[i].getAttribute("data-start"));
			//Get the current spans data end time
			const dataEnd = parseFloat(span[i].getAttribute("data-end"));

			//If a span is clicked the video time will update to the
			// data start value of span
			span[i].addEventListener('click', function(){
				player.currentTime = dataStart;
			});
			

			//If the current videos time is greater than or equal to the spans data start AND less than or equal to the data end
			if (time >= dataStart && time <= dataEnd) {

				//If true add the class highlight
				span[i].classList.add("highlight");
			} else {

				//If not true remove the highlight class
				span[i].classList.remove("highlight");
			}
		}
	});
}


