var video = document.querySelector("video");
var newVol = 1;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
 	video.play();
	video.volume = newVol;
	document.querySelector("#volume").textContent = (newVol * 100) + '%';
	//update volume information 
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.1;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log(video.currentTime);
});

//for volume
document.querySelector("#slider").addEventListener("input", function() {
	newVol = document.querySelector("#slider").value / 100;
	video.volume = newVol;
	document.querySelector("#volume").textContent = (newVol * 100) + '%';
	console.log(newVol);
});



document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute"
	}
	else {
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute"
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});