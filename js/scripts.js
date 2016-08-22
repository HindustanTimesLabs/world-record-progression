$(document).ready(function() {

	var startEvent = '100 m';

	function setNotes(event) {
		var note;
		if (notes[event] == undefined) {
			note = '';
		} else {
			note = 'NOTE: ' + notes[event];
		}
		$('.notes').html(note);
	}

	var notes = {
		'100 m' : 'The first record to be ratified by the IAAF was Donald Lippincott\'s 10.6 on 6 July, 1912. It was slower than the previous un-ratified world record. Both have been included. The first world record set with an automatic timer was Jim Hines\' 9.95 on 14 October, 1968.',
		'110 m hurdles' : 'All times until 1908 were recorded over 120 yards, or 109.73 meters. The first world record set with an automatic timer was Renaldo Nehemiah\'s 12.93, recorded on 19 August, 1981.',
		'20 km walk' : 'IAAF began recognized "World Best Performances" in road races on 1 January, 2003. The following year, IAAF began recognizing world records. Records listed before 2003 are listed by the IAAF, but have not been officially accepted. Hermann Muller\'s record of 1:37:06 was recorded at some point in June, 1922. For this graphic, the date has been set as 1 June, 1922.',
		'200 m' : 'The IAAF first distinguished between records made on a curve and those made on a straight track in 1951. Today, the 200-meter dash is raced around a curve. The first world record set with an automatic timer was Tommie Smith\'s 19:83 on 16 October, 1968.',
		'400 m' : 'All times until 1912 were recorded over 440 yards, or 402.335 meters. The first world record set with an automatic timer was Lee Evans\'s 43:86 on 18 October, 1968.',
		'400 m hurdles' : 'All times until 1903 were recorded over 440 yards, or 402.336 meters. The first world record set with an automatic timer was John Akii-Bua\'s 47.82, recorded on 2 September, 1972.',
		'4 x 100 m relay' : 'A German team recorded a time of 47:20 at some point in 1902. Another German team recorded a time of 44:00 at some point in August, 1908. For this graphic, those dates have been recorded as 1 January, 1902, and 1 August, 1908, respectively. The first automatically timed record was set at 38.19 by an American team on 10 September, 1972.',
		'4 x 400 m relay' : 'The American team of Matthews, Freeman II, James, and Evans set the first automatically timed record at 2:55.15 on 20 October, 1968.',
		'50 km walk' : 'IAAF began recognized "World Best Performances" in road races on 1 January, 2003. The following year, IAAF began recognizing world records. Records listed before 2003 are listed by the IAAF, but have not been officially accepted.',
		'800 m' : 'All times until 1912 were recorded over 880 yards, or 804.672 meters.',
		'3000 m steeplechase' : 'The steeplechase did not become standardized until 1954. Before that, steeplechases were run with and without water jumps, and the size and number of hurdles varied.',
		'10000 m' : 'William Jackson\'s 32:35.00, set in 1847, was recorded at the six-mile, 580-yard (10,186-meter) mark during a 10-mile race. Jack White\'s 31:00.00 is an estimated time from a seven-mile race; White was clocked at 29:50 at six miles and finished the race in 34:45.',
		'Decathlon' : 'The decathlon has been scored according to six different points tables since 1912. These records have all been normalized to the current points table, created in 1984. Modern-day decathlons last for two days, but historically have lasted for as many as three and as few as one day. All decathlons have been dated from their final day.',
		'Javelin throw' : 'After Uwe Hohn threw 104.80 meters on 20 July, 1984, a new javelin, with a forward-shifted center of gravity and a smaller surface area, was introduced. The distance of throws subsequently dropped by dozens of meters. In January 1987, the IAAF began accepting records with the new javelin, beginning with the best throw up until December 31, 1986.',
		'Marathon' : 'IAAF began recognized "World Best Performances" in road races on 1 January, 2003. The following year, IAAF began recognizing world records. Records listed before 2003 are listed by the IAAF, but have not been officially accepted.',
		'Pole vault' : 'Some of the early pole vault record holders used the so-called "climbing" technique, which was banned in the USA in 1889 and in Great Britain in 1992. The material used for the pole has changed over time, beginning with common tree woods until the early 20th century, when vaulters adopted bamboo. Vaulters experimented with aluminum and steel in the 1950s before finally switching to fibreglass by 1961.'
	}

	// function to make a single-digit number string into a double-digit
	// string with a 0 at the beginning
	function dubDig(x) {
		var y;

		if (x === undefined) {
			y = '00';
		} else if (x.toString().length == 1) {
			y = '0' + x;
		} else {
			y = x;
		}
		return y;
	}

	// function to turn a single digit centisec into a double digit centisec
	function hundredths(x, score) {
		var y;

		if (x === undefined) {
			y = '00';
		} else if (x.toString().length == 1) {
			y = x + '0';
		} else {
			y = x;
		}
		return y;
	}

	// function to determine axis labels
	function axisLabels(x, num) {
		var y;

		if (x == 'speed') {
			if (num < 60) {
				y = 'Time (seconds)';
			} else if (num > 60 && num < 3600) {
				y = 'Time (minutes)'
			} else if (num > 3600) {
				y = 'Time (hours)'
			}
		} else if (x == 'distance') {
			y = 'Distance (meters)'
		} else if (x == 'points') {
			y = 'Points'
		}

		return y;
	}

	// function to create y-axis labels.
	// unfortunately, i'm duplicating the timeString function below
	function timeAxis(time) {
		time = time.toString();
		time = Number(time.replace(/,/g, ''))

		if (time < 60) {
			var array = time.toString().split('.');
			var seconds = array[0];
			var cseconds = hundredths(array[1]);
			time = seconds + '.' + cseconds;
		} else if (time > 60 && time < 3600) {
			var minutes = Math.floor(time / 60);
			var seconds = dubDig(time - minutes * 60)
			time = minutes + ':' + seconds;
		} else if (time > 3600) {
			var hours = Math.floor(time / 3600);
			time = time - hours * 3600;
			var minutes = dubDig(Math.floor(time / 60));
			var seconds = dubDig(time - minutes * 60);
			time = hours + ':' + minutes + ':' + seconds;
		}

		return time;
	}

	// function to create time strings based on time numbers
	function timeString(time, hrs, mins, secs, csecs) {
		var y;

		if (time < 60) {
			var sec = secs;
			var csec = hundredths(csecs);
			y = sec + '.' + csec;
		} else if (time > 60 && time < 3600) {
			var min = mins;
			var sec = dubDig(secs);
			var csec = hundredths(csecs);
			y = min + ':' + sec + '.' + csec;
		} else if (time > 3600) {
			var hrs = hrs;
			var min = dubDig(mins);
			var sec = dubDig(secs);
			y = hrs + ':' + min + ':' + sec;
		}

		return y;
	}

	// function to create a distance string
	function distanceString(m, cm) {
		var y;

		y = m.toString() + '.' + dubDig(cm);

		return y;

	}

	// function to add commas in a number
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	// function to parse data
	function parseData(data) {

		var array = [];
		for (var i = 0; i < data.length; i++) {
			var curr = data[i];
			var next = {};
			if (i == data.length - 1) {
				next.date = new Date();
			} else {
				next.date = data[i + 1].date;
			}
			var obj = {};

			// key value pairs not dependent upon type
			obj.iaaf = curr.iaaf;
			obj.type = curr.type;
			obj.event = curr.event;
			obj.gender = curr.gender;
			obj.name = curr.name;
			obj.nationality = curr.nationality;
			obj.notes = curr.notes;
			obj.type = curr.type;
			obj.date = curr.date;
			obj.currDate = new Date(obj.date);
			obj.nextDate = new Date(next.date);
			obj.duration = obj.nextDate - obj.currDate;

			// key value pairs dependent upon type, with some calculated
			// obj.time is the time in seconds
			if (obj.type == 'speed') {
				obj.hours = curr.hours;
				obj.minutes = curr.min;
				obj.seconds = curr.sec;
				obj.centiseconds = curr.shundreds;
				obj.time = (obj.hours * 3600) + (obj.minutes * 60) + (obj.seconds) + (obj.centiseconds / 100);
				obj.timeString = timeString(obj.time, obj.hours, obj.minutes, obj.seconds, obj.centiseconds);
			} else if (obj.type == 'points') {
				obj.points = curr.points;
				obj.pointsString = numberWithCommas(obj.points);
			} else if (obj.type == 'distance') {
				obj.distance = curr.meters + curr.centimeters / 100;
				obj.distanceString = distanceString(curr.meters, curr.centimeters);
			}

			array.push(obj);

		}

		return array;
	}

	//filter toggling
	$(document).on('click', '.filter-toggle.inactive', function() {
		$('.filter-toggle.active').removeClass('active').addClass('inactive');
		$(this).removeClass('inactive').addClass('active');
	});

	/*
	*
	*
	*
	* LOTS OF SPACE!
	*
	*
	*/

	// write a d3 function to deal with this data
	function drawViz(data, width) {

		// get best time
		var timeArray = [];
		var lengthArray = [];
		for (var i = 0; i < data.length; i++) {
			timeArray.push(data[i].currDate);
			lengthArray.push(data[i].duration);
		}
		var first = timeArray[0];
		var recent = timeArray[timeArray.length - 1];
		var longest = _.max(lengthArray);

		//empty out the chart
		$('.chart').empty();

		// conditionals for type of scorings
		var score, string;
		if (data[0].type == 'speed') {
			score = 'time';
			string = 'timeString';
		} else if (data[0].type == 'distance') {
			score = 'distance';
			string = 'distanceString';
		} else if (data[0].type == 'points') {
			score = 'points';
			string = 'pointsString';
		}

		// SET THE SCALE DOMAINS

		// need a function to parse our date
		function parseDate(date) {
			return new Date(date);
		}

		//xScale.domain([0, durationSum]);
		var minTime = d3.min(data, function(d) {
			return parseDate(d.date);
		});

		// set the x-scale's domain
		xScale.domain([new Date('1840'), new Date()]);

		// min and max of score
		var min = d3.min(data, function(d) {
			return d[score];
		}), max = d3.max(data, function(d) {
			return d[score];
		}), diff = (max - min) * .2;

		// set the y-scale's domain
		yScale.domain([max + diff, min - diff]);

		// create your bars, link the data to them, and define their height
		var bar = chart.selectAll("g").data(data).enter().append("g").attr("transform", function(d, i) {
			console.log(yScale(d[score])-2)
			return "translate(" + xScale(d.currDate) + "," + (yScale(d[score])-2) + ")";
		});

		// now define your bars' rects' widths and height. for the height, leave a pixel of space below
		bar.append('rect').attr("width", function(d) {
			return xScale(d.nextDate) - xScale(d.currDate);
		}).attr("height", barHeight - 1).attr('class', function(d) {
			if (d.iaaf == 'pre') {
				return 'pre'
			} else {
				return 'post'
			}
		});

		// set the axes
		var yAxis = d3.axisLeft().scale(yScale).ticks(10).tickSizeInner(-width +1).tickSizeOuter(0).tickPadding(8);

		var yAxisGroup = chart.append('g').attr('class', 'axis y-axis').call(yAxis);

		var xAxis = d3.axisBottom().scale(xScale).ticks(10).tickSizeInner(-height + 90).tickSizeOuter(0).tickPadding(8);

		var xAxisGroup = chart.append("g").attr('class', 'axis x-axis').attr("transform", "translate(0," + (height - padding * 3) + ")").call(xAxis);

		// set the y-axis tick string
		$('.y-axis g text').each(function() {
			if (data[0].type == 'speed') {
				$(this).html(timeAxis($(this).html()));
			}
		});

		// axis labels
		yAxisGroup.append('text').attr("text-anchor", 'top').attr('class', 'axis-label').attr("transform", "translate(" + 20 + "," + height / 3.5 + ")rotate(-90)").text(axisLabels(data[0].type, data[0][score]));

		function xLabel(window, chart) {
			console.log(chart);

			if (window < 992) {
				return chart - 60;
			} else {
				return chart;
			}
		}


		xAxisGroup.append('text').attr('text-anchor', 'end').attr('class', 'axis-label').attr("transform", "translate(" + xLabel($(window).width(), width) + "," + -5 + ")").text('Date');

		// now define the bars' text
		bar.append("text").attr('class', 'bar-text').attr("x", function(d, i) {

			if (d.gender == 'Men') {

				if (d.duration == longest) {
					if ($(window).width() > 992) {
						if (d.event == 'Pole vault') {
							return -65;
						}
					} else {
						if (d.event == 'Pole vault') {
							return -125;
						} else if (d.event == '4 x 100 m relay') {
							return -65;
						} else if (d.event == '4 x 400 m relay') {
							return -105;
						} else if (d.event == 'Long jump') {
							return -65;
						} else if (d.event == 'Marathon') {
							return -105;
						} else if (d.event == '50 km walk') {
							return -65;
						}
					}
				}

				if (i == data.length - 1) {
					if ($(window).width() > 992) {
						if (d.event == 'High jump') {
							return -107;
						} else if (d.event == 'Triple jump') {
							return -120;
						} else if (d.event == 'Pole vault') {
							return -100;
						} else if (d.event == 'Marathon') {
							return -125;
						} else if (d.event == 'Long jump') {
							return 10;
						} else if (d.event == 'Javelin throw') {
							return -125;
						} else if (d.event == 'Hammer throw') {
							return -78;
						} else if (d.event == 'Discus throw') {
							return -75;
						} else if (d.event == 'Decathlon') {
							return -100;
						} else if (d.event == '50 km walk') {
							return -125;
						} else if (d.event == '400 m hurdles') {
							return -105;
						} else if (d.event == '4 x 400 m relay') {
							return -15;
						} else if (d.event == '4 x 100 m relay') {
							return -105;
						} else if (d.event == '3000 m steeplechase') {
							return -180;
						} else if (d.event == '1500 m') {
							return -150;
						} else if (d.event == '110 m hurdles') {
							return -105;
						} else if (d.event == '5000 m') {
							return -80;
						} else if (d.event == '10000 m') {
							return -87;
						} else if (d.event == '400 m') {
							return -125;
						} else if (d.event == '20 km walk') {
							return -128;
						} else if (d.event == '800 m') {
							return -115;
						} else if (d.event == '100 m') {
							return -85;
						} else if (d.event == '20 km walk') {
							return -100
						} else {
							return -90;
						}
					} else {
						if (d.event == 'Shot put') {
							return -183;
						} else if (d.event == 'High jump') {
							return -183;
						} else if (d.event == 'Triple jump') {
							return -193;
						} else if (d.event == 'Pole vault') {
							return -113;
						} else if (d.event == 'Marathon') {
							return -132;
						} else if (d.event == 'Long jump') {
							return -73;
						} else if (d.event == 'Javelin throw') {
							return -195;
						} else if (d.event == 'Hammer throw') {
							return -177;
						} else if (d.event == 'Discus throw') {
							return -176;
						} else if (d.event == 'Decathlon') {
							return -118;
						} else if (d.event == '50 km walk') {
							return -133;
						} else if (d.event == '400 m hurdles') {
							return -188;
						} else if (d.event == '4 x 400 m relay') {
							return -95;
						} else if (d.event == '4 x 100 m relay') {
							return -120;
						} else if (d.event == '3000 m steeplechase') {
							return -220;
						} else if (d.event == '1500 m') {
							return -210;
						} else if (d.event == '110 m hurdles') {
							return -120;
						} else if (d.event == '5000 m') {
							return -123;
						} else if (d.event == '10000 m') {
							return -124;
						} else if (d.event == '400 m') {
							return -126;
						} else if (d.event == '20 km walk') {
							return -135;
						} else if (d.event == '800 m') {
							return -130;
						} else if (d.event == '100 m') {
							return -107;
						} else if (d.event == '20 km walk') {
							return -123
						} else {
							return -113;
						}
					}
				}
			}

		}).attr("y", function(d) {

			if (d.type == 'speed') {
				if (d.currDate == recent) {
					return 12;
				} else {
					return -10;
				}

			} else if (d.type == 'points' || d.type == 'distance') {
				if (d.currDate == recent) {
					return -10
				} else {
					return 12
				}
			}
		}).attr("dy", ".35em").text(function(d) {
			if (d.duration == longest && d.currDate == recent) {
				return 'Longest standing & current record (' + d[string] + ')';
			} else if (d.duration == longest && d.currDate == first) {
				return 'First & longest standing record (' + d[string] + ')';
			} else if (d.duration == longest) {
				return 'Longest standing record (' + d[string] + ')';
			} else if (d.currDate == recent) {
				return 'Current record (' + d[string] + ')';
			} else if (d.currDate == first) {
				return 'First record (' + d[string] + ')';
			}
		});
		$('.bar-text').hide();

		setTimeout(function() {
			$('.bar-text').fadeIn();
		}, 500);

		// draw the axes lines after everything else
		$('.chart').prepend($('.x-axis')).prepend($('.y-axis'));

		//move the y axis grid lines to the right
		$('.y-axis .tick line').attr('x', 1);

	}

	// function to set the chart width
	function chartWidth(x) {

		if (x < 992) {
			return x - 10;
		} else {
			return x * .61;
		}
	}

	// function to set the xScale max
	function xScaleMax(window, chart) {
		if (window < 992) {
			return chart - 60;
		} else {
			return chart
		}
	}

	// set some d3 values
	var width = chartWidth($(window).width()), height = 450, barHeight = 5, padding = 30;

	console.log(width);

	// set the scale
	var xScale = d3.scaleTime().range([0, xScaleMax($(window).width(), width)]);
	var yScale = d3.scaleLinear().range([0, height - padding * 3]);

	//create your chart selector
	var chart = d3.select('.chart').attr('width', width).attr('height', height);

	// call the data with d3.csv
	// anything that does not depend on the data can be initialized before this
	d3.csv('data/data.csv', dataTypes, function(error, data) {

		// set dropdown values based on gender selection
		$('.filter-toggle').click(function() {

			var value = $(this).attr('data-which');

			var genderFilter = _.where(data, {
				gender : value
			});
			var eventPivot = _(genderFilter).chain().flatten().pluck('event').unique().value();

			$('.filter-dropdown').empty();
			$('.filter-dropdown').append('<optgroup></optgroup>');

			for (var i = 0; i < eventPivot.length; i++) {
				var option = '<option value="' + eventPivot[i] + '">' + eventPivot[i] + '</option>';
				$('.filter-dropdown optgroup').append(option);
			}

			// set initial event filter
			var eventFilter = _.where(genderFilter, {
				event : startEvent
			});
			drawViz(parseData(eventFilter), width);
			setNotes(startEvent);
			// select an event
			$('.filter-dropdown').on('change', function() {
				var optionSelected = $("option:selected", this);
				var valueSelected = this.value;
				eventFilter = _.where(genderFilter, {
					event : valueSelected
				});
				drawViz(parseData(eventFilter), width);
				setNotes(valueSelected);
			});

		});

		// set initial dropdown values
		$('.filter-toggle.active').click();

	});
	//end of d3.csv function

	// function to parse the data and set the datatyeps
	function dataTypes(d) {

		// function to change a string that should be either null or a number
		function nullOrNo(x) {
			var y;

			if (x == 'null') {
				y = null;
			} else {
				y = +x;
			}

			return y;
		}

		// key value pairs. using moment.js to parse the date.
		d.date = moment(d.year + dubDig(d.month) + dubDig(d.day), "YYYYMMDD").format('MMMM D, YYYY');
		d.day = +d.day;
		d.month = +d.month;
		d.year = +d.year;
		d.centimeters = nullOrNo(d.centimeters);
		d.hours = nullOrNo(d.hours);
		d.meters = nullOrNo(d.meters);
		d.min = nullOrNo(d.min);
		d.points = nullOrNo(d.points);
		d.sec = nullOrNo(d.sec);
		d.shundreds = nullOrNo(d.shundreds);
		d.thousandths = nullOrNo(d.thousandths);

		return d;
	}// end of dataType function

});
