function init_twill(frame_top_left, frame_size, resolution, alpha){
	var curr_rate = 0;
	var warp_generations = Math.round(1 / (1-resolution[0]));
	//var warp_generations = 1;
	var weft_generations = Math.round(1 / (1-resolution[1]));
	var cell_size = new Size(Math.round(frame_size.width / warp_generations), Math.round(frame_size.height / weft_generations));

	var main_twill_punch = [0,1,1];
	var row = [];
	var data = [];
	var traffic = false;

	for(h = 0; h < weft_generations; h++){
		row = [];
		
		for(c = 0; c < warp_generations; c++){
			var twill_punch = main_twill_punch;
			var top_left = new Point(frame_top_left.x + (c * cell_size.width), frame_top_left.y + (h * cell_size.height));
			var rect = new Rectangle(top_left, cell_size);
				//console.log(rect);
			var path = new Path.Rectangle(rect);
			var type;
			
			if(twill_punch[c % 3]){
				path.fillColor = set_weft_gradient(top_left, cell_size, alpha, curr_rate);
                //path.fillColor = "black"
				var type = "weft";
			} else {
			    path.fillColor = set_warp_gradient(top_left, cell_size, alpha, curr_rate);
                //path.fillColor = "black"
				var type = "warp";
			}
			var color = 'white';
			var cell = new Cell(top_left, type, path, cell_size, traffic, color);
			row.push(cell);
			twill_punch.push(twill_punch.shift());
		}
		data.push(row);
		main_twill_punch.push(main_twill_punch.shift());
	}

	this.data = data;
	return this;
}
