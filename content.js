replaceInAllCases()
function replaceInAllCases(){
	$(document).ready(replaceImages())
	$( window ).scroll(function() { replaceImages()	});
	$( "div" ).hover(function() { replaceImages()	});
}

function replaceImages(){
	var winnersUrl = chrome.extension.getURL("winners.jpg")
	//replace images with the image of Dave, mark as done with new class
	$('img:not(.winners)').attr("src", winnersUrl).addClass("winners");
	//replace classes .img and .Image, mostly added this because Instagram doesn't use actual img objects
	$('.Image:not(.winners), .img:not(.winners)').css("background-image", "url(" + winnersUrl + ")").attr("src", winnersUrl).addClass("winners");
}
