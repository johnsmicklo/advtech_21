function MakeCircle(e) {
	e = (e || event); // for older browsers
	console.log(e);
	// make an html element, not on the page yer
	var c = document.createElement('div');
	c.style.width = '20px';
	c.style.height= '20px';
	// x and y coordinates on the page are its
	// css left and top properties
	c.style.position = 'absolute';
	c.style.left = e.clientX + 'px';
	c.style.top = e.clientY + 'px';
	// add the element to the page
	document.body.appendChild(c);

}
document.onmousemove = function(e) {
			MakeCircle(e);
}