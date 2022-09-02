function init_twill(frame_top_left, frame_size, resolution, alpha){
	var curr_rate = 0;
	var warp_generations = Math.round(1 / (1-resolution[0]));
	//var warp_generations = 1;
	var weft_generations = Math.round(1 / (1-resolution[1]));
	var cell_size = new Size(Math.round(frame_size.width / warp_generations), Math.round(frame_size.height / weft_generations));

	var master_twill_punch = [0,0,1];
	var col = [];
	var data = [];
	var traffic = false;

	for(c = 0; c < warp_generations; c++){
		col = [];
		//fade_values = [fade_values[0] + 0.005, fade_values[1] + 0.005];
		for(h = 0; h < weft_generations; h++){
			var twill_punch = master_twill_punch;
			var top_left = new Point(frame_top_left.x + (c * cell_size.width), frame_top_left.y + (h * cell_size.height));
			var rect = new Rectangle(top_left, cell_size);
				//console.log(rect);
			var path = new Path.Rectangle(rect);
			path.strokeWidth = 0
			var type;
			
			if(twill_punch[h % 3]){
				path.fillColor = set_weft_gradient(top_left, cell_size, alpha, curr_rate);
				var type = "weft";
			} else {
				path.fillColor = set_warp_gradient(top_left, cell_size, alpha, curr_rate);
				var type = "warp";
			}
			var color = 'white';
			var cell = new Cell(top_left, type, path, cell_size, traffic, color);
			col.push(cell);
			twill_punch.push(twill_punch.shift());
		}
		data.push(col);
		master_twill_punch.push(master_twill_punch.shift());
	}

	this.data = data;
	return this;
}
