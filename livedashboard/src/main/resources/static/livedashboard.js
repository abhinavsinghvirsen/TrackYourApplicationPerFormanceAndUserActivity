

var stompClient = null;


$(document).ready(function(){
	
	if(stompClient!=null)
		stompClient.disconnect();

	 var socket = new SockJS('/dashbord-websocket');
	 stompClient = Stomp.over(socket);
	 
	 stompClient.connect({}, function (frame) {
	        stompClient.subscribe('/topic/userdashboard', function (dashboarddata) {
	        	
	        	var dashboardJsonData = JSON.parse(dashboarddata.body);
	        	
	        	console.log(dashboardJsonData);
	        	
	        	
	        	$("#plotConatiner").ready(function(){
	        		drawBarChart(dashboardJsonData);
	        	    });
	        });
	    });
	
	 function drawBarChart(dashboardJsonData) {
		 console.log(dashboardJsonData);
		 var mostlyClicked = Math.max.apply(Math, $.map(dashboardJsonData, function (el) { return el.lengt }));
		 var lowestClicked = Math.min.apply(Math, $.map(dashboardJsonData, function (el) { return el.length }));
		
		 var jsondata = dashboardJsonData;
		 var xData =[];
		 var totalClicked=0;
			var categories = Object.keys(jsondata);
					for(var i=0 ; i<categories.length ;i++){
						  xData.push({["service"]:categories[i] , ["counter"]:jsondata[categories[i]].length});
						  var count = jsondata[categories[i]].length;
						  totalClicked=totalClicked+count;
					}
					console.log(xData);
					
					 $("#totalclicked").html("Total clicked by user: "+totalClicked);
					 $("#mostclicked").html("mostly clicked: "+mostlyClicked);
					 $("#lowestclicked").html("lowestclicked: "+lowestClicked);
					 $("#browser").html("browser: "+jsondata[categories[0]][0].browser);
					 $("#pageview").html("pageview: "+jsondata[categories[0]][0].pageview);
					 $("#os").html("os: "+jsondata[categories[0]][0].os);
					 $("#ip").html("ip: "+jsondata[categories[0]][0].ip);
					 
		var data = xData;

		  data.forEach(function (d) {
		      d.counter = +d.counter;
		    });
		    var margin = {top: 65, bottom: 50, left: 50, right: 30}, axisPadding = 10;
		    var Width = 500, Height = 300;
		    var svgWidth = Width + margin.left + margin.right,
		        svgHeight = Height + margin.top + margin.bottom;
		    var maxcounter = d3.max(data, function(d){ return d.counter; });
		    
		    
		    // define scales and axises
		    var xScale = d3.scale.ordinal()
		        .domain(data.map(function(d){ return d.service; }))
		        .rangeBands([0, Width], 0.1);
		    var yScale = d3.scale.linear()
		        .domain([0, maxcounter])
		        .range([0, Height]);
		    var color = d3.scale.category10();
		    
		    var xAxis = d3.svg.axis()
		        .scale(xScale)
		        .tickSize(0,0)
		        .orient('bottom');
		    var yAxis = d3.svg.axis()
		        .scale(yScale.copy().domain([maxcounter, 0]))
		        .tickSize(6,0)
		        .ticks(5)
		        .orient('left');
		    
		    d3.select("svg").remove();
		    // create a svg canvas
		    var svg = d3.select('#plotConatiner')
		        .append('svg')
		        .attr({width: svgWidth, height: svgHeight})
		    
		    
		    // Drawing for axises
		    var xGroup = svg.append('g')
		        .attr('class', 'xGroup')
		        .attr('transform', 'translate(' + [margin.left, margin.top + Height + axisPadding] + ')');
		    xGroup.call(xAxis);
		    styleAxis(xGroup);
		    var yGroup = svg.append('g')
		        .attr('class', 'yGroup')
		        .attr('transform', 'translate(' + [margin.left - axisPadding, margin.top] + ')');
		    yGroup.call(yAxis);
		    styleAxis(yGroup);


		    // Label layer
		    var label = svg.append('g')
		        .attr('transform', 'translate(' + [margin.left - axisPadding, margin.top] + ')');
		 /*   label.append('text')
		        .text('counter [%]')
		        .attr('transform', 'rotate(-90)')
		        .attr({
		            'text-anchor': 'start',
		            x: -75,
		            y: 20,
		        })*/
		    label.append('text')
		        .text('LIVE DASHBOARD')
		        .attr('transform', 'translate(' + [Width / 2, - margin.top / 2] + ')')
		        .attr({
		            'text-anchor': 'middle',
		            'font-size': '1.5em',
		            fill: 'steelblue',
		        });


		    // Drawing for graph body
		    var graph = svg.append('g')
		        .attr('class', 'graph')
		        .attr('transform', 'translate(' + [margin.left, margin.top + Height] + ')');
		    var bars = graph.selectAll('g')
		        .data(data)
		        .enter()
		        .append('g')
		        .attr('transform', function(d,i){ return 'translate(' + [xScale(d.service), -1 * yScale(d.counter)] + ')'; });
		    bars.append('rect')
		        .each(function(d,i){
		            d3.select(this).attr({
		                fill: color.range()[i],
		                width: xScale.rangeBand(),
		                height: yScale(d.counter),
		            })
		        })
		        .on('mouseover', mouseover)
		        .on('mousemove', mousemove)
		        .on('mouseout', mouseout);
		    
		    bars.append('text')
		    .text(function(d){ return d.counter; })
		    .each(function(d,i){
		        d3.select(this).attr({
		            fill: color.range()[i],
		            stroke: 'none',
		            x: xScale.rangeBand() / 2,
		            y: -5,
		            'text-anchor': 'middle',
		        });
		    })
		    
		    
		    
		    // tooltips
		    var div = d3.select('#plotConatiner').append('div')
		        .attr('class', 'tooltip')
		        .style('display', 'none');
		    function mouseover(){
		        div.style('display', 'inline');
		    }
		    function mousemove(){
		        var d = d3.select(this).data()[0]
		        div
		            .html(d.service + '<hr/>' + d.counter)
		            .style('left', (d3.event.pageX - 34) + 'px')
		            .style('top', (d3.event.pageY - 12) + 'px');
		    }
		    function mouseout(){
		        div.style('display', 'none');
		    }
		

		function styleAxis(axis){
		    // style path
		    axis.select('.domain').attr({
		        fill: 'none',
		        stroke: '#888',
		        'stroke-width': 1
		    });
		    // style tick
		    axis.selectAll('.tick line').attr({
		        stroke: '#000',
		        'stroke-width': 1,
		    })
		}
	 }

	 
});