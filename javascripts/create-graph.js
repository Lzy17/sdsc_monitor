/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("./sdsc_monitor/data/2.csv", {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
	
}

function createGraph(data) {
	var times = [];
	var price_1 = ["price_1"];
	var price_2 = ["price_2"];
	var price_3 = ["price_3"];
	

	for (var i = 1; i < data.length; i++) {
		times.push(data[i][0]);
		price_1.push(data[i][1]);
		price_2.push(data[i][2]);
		price_3.push(data[i][3]);
	}
	console.log(times);
	console.log(price_1);
	console.log(price_2);
	console.log(price_3);

	var chart = c3.generate({
		bindto: '#chart',
	    data: {
	        columns: [
	        	price_1,
			price_2,
			price_3
			
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: times,
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
	        }
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
	        position: 'right'
	    }
	});
}

parseData(createGraph);
