var state = false;
function MakeCircleWider() {
	// assign the div a class it didn't have before
	if(state) {
		document.getElementsByTagName('div')[0].className="";
		state = false;
	} else {
		document.getElementsByTagName('div')[0].className = "final_state";
		state = true;
	}
}
document.getElementsByTagName('div')[0].onclick = function() {
			MakeCircleWider();
}