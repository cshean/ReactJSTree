
function start () {
	//takes the path, callback function with code where it says "code "
	//d3.json("./js/data.json", function (data) {  

		var canvas = d3.select("body").append("svg")
			.attr("width", 500)
			.attr("height", 500);
			.attr("transform", "translate(50,50)")
;
		var diagonal = d3.svg.diagonal()
			.source({x: 10, y: 10})
			.target({x: 300, y: 300})

		canvas.append("path")
		.attr("fill", "none")
		.attr("stroke", "black")
		.attr("d", diagonal)

		var tree = d3.layout.tree()
		.size([400,400])

		d3.json("data.json", function (data)) {
			var nodes = tree.nodes(data)
			var links = tree.links {nodes};
		}

	//})








	/*//sets the canvas variable equal to an svg image that is part of the body
	var canvas = d3.select("body")
	.append("svg")
	.attr("width", 700)
	.attr("height", 700);

	//appends the circle to the canvas with the given properties
	var circle = canvas.append("circle")
		.attr("cx", 50) //x position
		.attr("cy", 50) //y position
		.attr("r", 50) //radius
		.attr("fill", "blue"); //color

	var line = canvas.append("line")
		.attr("x1", 0) //where line starts on x
		.attr("x2", 200) //where line ends on x
		.attr("y1", 100)
		.attr("y2", 300)
		.attr("stroke", "grey")
		.attr("stroke-width", 3);
*/
}