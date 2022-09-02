function set_weft_gradient(position, cell_size, site_alpha, curr_rate) {
	var alpha = site_alpha + curr_rate;
	var warp_high = new Color(alpha);
<<<<<<< HEAD
	var warp_low = new Color(0);
	var warp_low = new Color(alpha * 0.79);
=======
	//var warp_low = new Color(0);
	var warp_low = new Color(alpha * 0.79);
	//var warp_low = new Color(alpha * 0.4);
>>>>>>> origin/master
	
	var origin = new Point(position.x + cell_size.width / 2, position.y);
	var destination = new Point(position.x + cell_size.width / 2, position.y + cell_size.height);

	var fill = {
		gradient: {
			stops: [[warp_low, 0], [warp_high, 0.4], [warp_high, 0.6], [warp_low, 1]],
		},
		origin: origin,
		destination: destination
		};
	return fill;
}

function set_warp_gradient(position, cell_size, site_alpha, curr_rate) {
	var alpha = site_alpha + curr_rate;
	var weft_high = new Color(alpha * 0.9);
	var weft_low = new Color(alpha * 0.79);
<<<<<<< HEAD
=======
	//var weft_low = new Color(alpha * 0.4);
>>>>>>> origin/master
	
	
	var origin = new Point(position.x, position.y + cell_size.height / 2);
	var destination = new Point(position.x + cell_size.width, position.y + cell_size.height / 2);

	var fill = {
		gradient: {
			stops: [[weft_low, 0], [weft_high, 0.4], [weft_high, 0.6], [weft_low, 1]],
		},
		origin: origin,
		destination: destination
		};
	return fill;

}




	