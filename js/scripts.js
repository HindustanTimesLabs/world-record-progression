$(document).ready(function() {
	
	// check for Browsers, to fix the dropdown appearance
	var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	if (isSafari||isFirefox){
		$('.filter-dropdown').css('margin-left','0em');
	}

	//check for url history
	var url = window.location.href, startGender, startEvent;

	if (url.includes('?')) {
		startGender = ((url.split('?')[1]).split('=')[1]).split('&')[0], startEvent = decodeURIComponent((url.split('?')[1]).split('=')[2]);
	} else {
		startGender = 'Men', startEvent = '400 m';
	}

	function setNotes(gender, event) {

		var note;
		if (notes[gender][event] == undefined) {
			note = '';
			$('.notes').hide();
		} else {
			note = 'NOTE ON ' + gender.toUpperCase() + '\'S ' + event.toUpperCase() + ': ' + notes[gender][event];
			$('.notes').show();
		}
		$('.notes').html(note);
	}

	var notes = {
		'Men' : {
			'100 m' : 'The first record to be ratified by the IAAF was Donald Lippincott\'s 10.6 on 6 July, 1912. It was slower than the previous un-ratified world record. Both have been included. The first world record set with an automatic timer was Jim Hines\' 9.95 on 14 October, 1968.',
			'110 m hurdles' : 'All times until 1908 were recorded over 120 yards, or 109.73 meters. The first world record set with an automatic timer was Renaldo Nehemiah\'s 12.93, recorded on 19 August, 1981.',
			'20 km walk' : 'IAAF began recognized "World Best Performances" in road races on 1 January, 2003. The following year, IAAF began recognizing world records. Records from before 2003 are listed by the IAAF, but have not been officially accepted. Hermann Muller\'s record of 1:37:06 was recorded at some point in June, 1922. For this graphic, the date has been set as 1 June, 1922.',
			'200 m' : 'The IAAF first distinguished between records made on a curve and those made on a straight track in 1951. Today, the 200-meter dash is raced around a curve. The first world record set with an automatic timer was Tommie Smith\'s 19:83 on 16 October, 1968.',
			'400 m' : 'All times until 1912 were recorded over 440 yards, or 402.335 meters. The first world record set with an automatic timer was Lee Evans\'s 43:86 on 18 October, 1968. Wayde van Niekerk\'s world record is pending ratification by the IAAF as of 23 August, 2016.',
			'400 m hurdles' : 'All times until 1903 were recorded over 440 yards, or 402.336 meters. The first world record set with an automatic timer was John Akii-Bua\'s 47.82, recorded on 2 September, 1972.',
			'4 x 100 m relay' : 'A German team recorded a time of 47:20 at some point in 1902. Another German team recorded a time of 44:00 at some point in August, 1908. For this graphic, those dates have been recorded as 1 January, 1902, and 1 August, 1908, respectively. The first automatically timed record was set at 38.19 by an American team on 10 September, 1972.',
			'4 x 400 m relay' : 'The American team of Matthews, Freeman II, James, and Evans set the first automatically timed record at 2:55.15 on 20 October, 1968.',
			'50 km walk' : 'IAAF began recognized "World Best Performances" in road races on 1 January, 2003. The following year, IAAF began recognizing world records. Records from before 2003 are listed by the IAAF, but have not been officially accepted.',
			'800 m' : 'All times until 1912 were recorded over 880 yards, or 804.672 meters.',
			'3000 m steeplechase' : 'The steeplechase did not become standardized until 1954. Before that, steeplechases were run with and without water jumps, and the size and number of hurdles varied.',
			'10000 m' : 'William Jackson\'s 32:35.00, set in 1847, was recorded at the six-mile, 580-yard (10,186-meter) mark during a 10-mile race. Jack White\'s 31:00.00 is an estimated time from a seven-mile race; White was clocked at 29:50 at six miles and finished the race in 34:45.',
			'Decathlon' : 'The decathlon has been scored according to six different points tables since 1912. These records have all been normalized to the current points table, created in 1984. Modern-day decathlons last for two days, but historically have lasted for as many as three and as few as one day. All decathlons have been dated from their final day.',
			'Javelin throw' : 'After Uwe Hohn threw 104.80 meters on 20 July, 1984, a new javelin, with a forward-shifted center of gravity and a smaller surface area, was introduced. The distance of throws subsequently dropped by dozens of meters. In January 1987, the IAAF began accepting records with the new javelin, beginning with the best throw up until December 31, 1986.',
			'Marathon' : 'IAAF began recognized "World Best Performances" in road races on 1 January, 2003. The following year, IAAF began recognizing world records. Records from before 2003 are listed by the IAAF, but have not been officially accepted.',
			'Pole vault' : 'Some of the early pole vault record holders used the so-called "climbing" technique, which was banned in the USA in 1889 and in Great Britain in 1922. The material used for the pole has changed over time, beginning with common tree woods until the early 20th century, when vaulters adopted bamboo. Vaulters experimented with aluminum and steel in the 1950s before finally switching to fibreglass by 1961.'
		},
		'Women' : {
			'100 m' : 'Hulda Idman\'s 14.10 occurred at some point in 1905. Eufrosyne Simola\'s 13.50 occurred at some point in September, 1911. For this graphic, the dates for those performances have been set at 1 January, 1905, and 1 September, 1911, respectively. The first record from an automatic timer is Wyomia Tyus\'s 11.08 from 15 October, 1968.',
			'200 m' : 'Several early record performances were run over 220 yards, or 201.17 meters. The IAAF began distinguishing between races on a straight track and a curved track in 1951, and straight-track records were eliminated after 1976. The first record timed automatically is Renate Stecher\'s 22.38, achieved on 21 July, 1973.',
			'400 m' : 'An athlete identified only as "A. Ahtinen" recorded two world records in 1911, one on an unknown date and another at some point in September. Those records have been pegged to 1 January, 1911, and 1 September, 1911, respectively. Helen Servia is listed as having run 1:02.00 on 1921, before IAAF ratification. Her time is faster than the first IAAF-ratified time, the 1:04.40 of Mary Lines. Both records have been included. Several early records were achieved over 440 yards, or 402.34 metres. The first automatically timed record is from Christina Brehmer, who ran 49.77 on 9 May, 1976.',
			'800 m' : 'Several of the early records were achieved over a distance of 880 yards, or 804.642 meters. The first IAAF-ratified world record was 2:45.00, run by Nelly Hicks in 1922. However, the IAAF lists two superior un-ratified performances that occurred prior to 1922. All three times are included in this graphic.',
			'1500 m' : 'Lempi Aaltonen\'s 5:44.00 was achieved on an unknown day in June, 1913. For this graphic, the date has been pegged to 1 June, 1913.',
			'10000 m' : 'Almaz Ayana\'s world record is pending ratification as of 23 August, 2016.',
			'Marathon' : 'IAAF began recognized "World Best Performances" in road races on 1 January, 2003. The following year, IAAF began recognizing world records. Records from before 2003 are listed by the IAAF, but only Paula Radcliffe\'s current world record is officially accepted.',
			'20 km walk' : 'IAAF began recognized "World Best Performances" in road races on 1 January, 2003. The following year, IAAF began recognizing world records. Records from before 2003 are listed by the IAAF, but only those since Wang Yan\'s 1:26:22 on 19 November, 2001, are officially accepted.',
			'4 x 100 m relay' : 'The first IAAF ratified time of 53.20, run by a Czechoslovakian team on 21 May, 1922, was slower than four previous records that have not been ratified. All five times are included in this graphic. The first automatically timed world record on this chart is that of a team from East Germany, which ran 42.51 on 8 September, 1974.',
			'4 x 400 m relay' : 'The first two world records were achieved on a distance of 440 yards, or 402.336 meters.',
			'Pole vault' : 'IAAF introduced the women\'s pole vault to its world record list in 1994. However, female athletes have competed in pole vault competitions since at least 1910. Mildred Carl\'s 2.21 occurred at an unknown date in 1919. For this graphic, her performance has been pegged to 1 January, 1919.',
			'Long jump' : 'The first IAAF ratified mark of 5.16 meters, set by Marie Mejzlikova II on 6 August, 1922, was lower than two previous records that have not been ratified. All three marks are included in this graphic.',
			'Triple jump' : 'Women\'s triple jump was not official recognized by the IAAF until 1991. Still, it was a regular competition, particularly in the United States, the Soviet Union, and China, throughout the 20th century. Kinue Hitomi\'s mark of 11.62 meters occurred at an unknown date in December 1926. Frances Keddie\'s superior mark of 11.83 also occurred in 1926, though the date is entirely unknown. Both have been included in this graphic; the former is pegged to 1 December, 1926, and the latter is pegged to 2 December, 1926. Keddie\'s record would remain unbroken in competition for nearly 75 years.',
			'Hammer throw' : 'The IAAF began to recognize world records in the women\'s hammer throw in 1994, but it lists un-ratified records going back to 1931. Anita Wlodarczyk\'s world record is pending ratification by the IAAF as of 23 August, 2016.',
			'Heptathlon' : 'The IAAF lists heptathlon records from 1973, but only scores beginning with Ramona Neubert\'s 6,716 from 28 June, 1981 have been ratified. In 1985, the heptathlon began using a slightly different scoring table. All scores since Liesl Albert\'s 5,654 on 8 October, 1978, have been normalized to the 1985 table; previous scores have not been normalized. Heptathlons typically take place over the course of two days; the dates of these scores have been pegged to the final day, when the record was broken.',
			'100 m hurdles' : 'The first automatically timed world record is that of Annelie Ehrhardt, who ran 12.59 on 8 September, 1972.'
		}
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
			} else if (num >= 60 && num < 3600) {
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
		} else if (time >= 60 && time < 3600) {
			var minutes = Math.floor(time / 60);
			var seconds = dubDig(time - minutes * 60)
			time = minutes + ':' + seconds;
		} else if (time >= 3600) {
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
		var y = {};

		if (time < 60) {
			var sec = secs;
			var csec = hundredths(csecs);
			y.noUnits = sec + '.' + csec;
			y.units = y.noUnits;
		} else if (time >= 60 && time < 3600) {
			var min = mins;
			var sec = dubDig(secs);
			var csec = hundredths(csecs);
			y.noUnits = min + ':' + sec + '.' + csec;
			y.units = y.noUnits;
		} else if (time >= 3600) {
			var hrs = hrs;
			var min = dubDig(mins);
			var sec = dubDig(secs);
			y.noUnits = hrs + ':' + min + ':' + sec;
			y.units = y.noUnits;
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
			obj.nextDateString = moment(obj.nextDate).format('MMMM D, YYYY');
			obj.duration = obj.nextDate - obj.currDate;

			// key value pairs dependent upon type, with some calculated
			// obj.time is the time in seconds
			if (obj.type == 'speed') {
				obj.hours = curr.hours;
				obj.minutes = curr.min;
				obj.seconds = curr.sec;
				obj.centiseconds = curr.shundreds;
				obj.time = (obj.hours * 3600) + (obj.minutes * 60) + (obj.seconds) + (obj.centiseconds / 100);
				obj.timeString = timeString(obj.time, obj.hours, obj.minutes, obj.seconds, obj.centiseconds).noUnits;
				obj.timeStringUnits = timeString(obj.time, obj.hours, obj.minutes, obj.seconds, obj.centiseconds).units;
			} else if (obj.type == 'points') {
				obj.points = curr.points;
				obj.pointsString = numberWithCommas(obj.points);
				obj.pointsStringUnits = obj.pointsString + ' points';
			} else if (obj.type == 'distance') {
				obj.distance = curr.meters + curr.centimeters / 100;
				obj.distanceString = distanceString(curr.meters, curr.centimeters);
				obj.distanceStringUnits = obj.distanceString + ' meters';
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

		console.log(data);

		// determine offset of infobox
		if (data[0].type == 'speed') {
			$('.infobox-column').addClass('col-md-offset-7').removeClass('col-md-offset-2');

			// conditional for a couple of women's events
			if (data[0].gender == 'Women') {
				if (data[0].event == '100 m hurdles' || data[0].event == '10000 m' || data[0].event == '3000 m steeplechase' || data[0].event == '4 x 400 m relay' || data[0].event == '400 m hurdles' || data[0].event == '5000 m' || data[0].event == 'Marathon') {
					$('.infobox-column').addClass('col-md-offset-2').removeClass('col-md-offset-7');
				}
			}

		} else {
			$('.infobox-column').addClass('col-md-offset-2').removeClass('col-md-offset-7');
		}

		// get best time
		var resultsArray = [];
		var timeArray = [];
		var lengthArray = [];
		for (var i = 0; i < data.length; i++) {
			timeArray.push(data[i].currDate);
			lengthArray.push(data[i].duration);
			resultsArray.push(data[i]);
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
			units = 'timeStringUnits';
		} else if (data[0].type == 'distance') {
			score = 'distance';
			string = 'distanceString';
			units = 'distanceStringUnits';
		} else if (data[0].type == 'points') {
			score = 'points';
			string = 'pointsString';
			units = 'pointsStringUnits';
		}

		var recordResult = data[data.length - 1];
		var longestResult = _.max(data, 'duration');
		var yearsBetween = new Date(longestResult.nextDateString).getFullYear() - new Date(longestResult.date).getFullYear();

		var newRecord;
		var narrative;
		var newOrCurrent;

		if (recordResult.name == 'Wayde van Niekerk' || recordResult.name == 'Almaz Ayana' || recordResult.name == 'Anita Wlodarczyk') {
			newOrCurrent = 'new';
		} else {
			newOrCurrent = 'current';
		}

		var name;
		if (recordResult.event == '4 x 100 m relay' || recordResult.event == '4 x 400 m relay') {
			name = recordResult.nationality;
			oldName = longestResult.nationality;
		} else {
			name = recordResult.name;
			oldName = oldName = longestResult.name;
		}

		if (recordResult.date != longestResult.date) {
			newRecord = moment(recordResult.date).add(longestResult.duration, 'ms').format('MMMM D, YYYY');
			narrative = 'For <b>' + name + '&rsquo;s</b> ' + newOrCurrent + ' world record of <b>' + recordResult[units] + '</b> to become the longest standing world record, it will have to go unbroken until <b>' + newRecord + '</b>. Then it will have lasted longer than <b>' + oldName + '&rsquo;s</b> record of <b>' + longestResult[units] + '</b>, which stood for <b>' + yearsBetween + ' years</b>, from <b>' + longestResult.date + '</b>, until <b>' + longestResult.nextDateString + '</b>.';
		} else {
			newRecord = moment().add(longestResult.duration, 'ms').format('MMMM D, YYYY');
			narrative = '<b>' + name + '&rsquo;s</b> ' + newOrCurrent + ' world record of <b>' + recordResult[units] + '</b>, set on <b>' + recordResult.date + '</b>, is also the longest standing record. Even if someone broke it today, their new record would have to go unbroken for <b>' + yearsBetween + ' years</b>, until <b>' + newRecord + '</b>, to become the longest held record.';
		}

		$('.narrative').html(narrative);
		$('.event').html(recordResult.gender + '&rsquo;s ' + recordResult.event.toLowerCase());

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
		function startYear(gender) {
			if (gender == 'Men') {
				return new Date('1840');
			} else {
				return new Date('1890');
			}
		}


		xScale.domain([startYear(recordResult.gender), new Date()]);

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
			return "translate(" + xScale(d.currDate) + "," + (yScale(d[score]) - 2) + ")";
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
		var yAxis = d3.axisLeft().scale(yScale).ticks(10).tickSizeInner(-width + 1).tickSizeOuter(0).tickPadding(8);

		var yAxisGroup = chart.append('g').attr('class', 'axis y-axis').call(yAxis);

		function xTickCount(x) {
			if (x > 992) {
				return 10;
			} else {
				return 5;
			}
		}

		var xAxis = d3.axisBottom().scale(xScale).ticks(xTickCount($(window).width())).tickSizeInner(-height + 90).tickSizeOuter(0).tickPadding(8);

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
			if (window < 992) {
				return chart - 60;
			} else {
				return chart;
			}
		}


		xAxisGroup.append('text').attr('text-anchor', 'end').attr('class', 'axis-label').attr("transform", "translate(" + xLabel($(window).width(), width) + "," + -5 + ")").text('Date');

		// now define the bars' text
		bar.append("text").attr('class', 'bar-text').attr("x", function(d, i) {

			if (d.gender == 'Women') {
				if (i == 0) {
					if ($(window).width() <= 992) {
						if (d.event == '3000 m steeplechase') {
							return -113;
						}
					}
				}
				if (d.duration == longest) {
					if ($(window).width() > 992) {
						if (d.event == '1500 m') {
							return -38;
						} else if (d.event == '10000 m') {
							return -37;
						}
					} else {
						if (d.event == '100 m hurdles') {
							return -104;
						} else if (d.event == '10000 m') {
							return -135;
						} else if (d.event == '1500 m') {
							return -130;
						} else if (d.event == '4 x 100 m relay') {
							return -106;
						} else if (d.event == '5000 m') {
							return -170;
						}

					}
				}
				if (i == data.length - 1) {
					if ($(window).width() > 992) {
						if (d.event == 'Triple jump') {
							return 61;
						} else if (d.event == 'Shot put') {
							return 29;
						} else if (d.event == 'Pole vault') {
							return -57;
						} else if (d.event == 'Marathon') {
							return -124;
						} else if (d.event == 'Long jump') {
							return 27;
						} else if (d.event == 'Javelin throw') {
							return 18;
						} else if (d.event == 'High jump') {
							return 34;
						} else if (d.event == 'Heptathlon') {
							return 18;
						} else if (d.event == 'Hammer throw') {
							return -126;
						} else if (d.event == 'Discus throw') {
							return 20;
						} else if (d.event == '4 x 400 m relay') {
							return 6;
						} else if (d.event == '4 x 100 m relay') {
							return -90;
						} else if (d.event == '400 m hurdles') {
							return -116;
						} else if (d.event == '3000 m steeplechase') {
							return -171;
						} else if (d.event == '20 km walk') {
							return -128;
						} else if (d.event == '100 m hurdles') {
							return -127;
						} else if (d.event == '10000 m') {
							return -145;
						} else if (d.event == '5000 m') {
							return -71;
						} else if (d.event == '1500 m') {
							return -127;
						} else if (d.event == '800 m') {
							return 54;
						} else if (d.event == '400 m') {
							return 150;
						} else if (d.event == '100 m') {
							return 20;
						} else if (d.event == '200 m') {
							return 18;
						} else {
							return -90;
						}
					} else {
						if (d.event == 'Triple jump') {
							return -72;
						} else if (d.event == 'Shot put') {
							return -156;
						} else if (d.event == 'Pole vault') {
							return -100;
						} else if (d.event == 'Marathon') {
							return -209;
						} else if (d.event == 'Long jump') {
							return -152;
						} else if (d.event == 'Javelin throw') {
							return -160;
						} else if (d.event == 'High jump') {
							return -149;
						} else if (d.event == 'Heptathlon') {
							return -160;
						} else if (d.event == 'Hammer throw') {
							return -125;
						} else if (d.event == 'Discus throw') {
							return -159;
						} else if (d.event == '800 m') {
							return -157;
						} else if (d.event == '5000 m') {
							return -124;
						} else if (d.event == '400 m hurdles') {
							return -199;
						} else if (d.event == '4 x 400 m relay') {
							return -170;
						} else if (d.event == '4 x 100 m relay') {
							return -117;
						} else if (d.event == '3000 m steeplechase') {
							return -223;
						} else if (d.event == '200 m') {
							return -160;
						} else if (d.event == '20 km walk') {
							return -135;
						} else if (d.event == '1500 m') {
							return -135;
						} else if (d.event == '10000 m') {
							return -145;
						} else if (d.event == '100 m hurdles') {
							return -127;
						} else if (d.event == '100 m') {
							return -159;
						} else if (d.event == '400 m') {
							return -46;
						} else {
							return -90;
						}
					}
				}
			} else if (d.gender == 'Men') {

				if (d.duration == longest) {
					if ($(window).width() > 992) {
						if (d.event == 'Pole vault') {
							return -72;
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
							return -77;
						} else if (d.event == 'Triple jump') {
							return -98;
						} else if (d.event == 'Pole vault') {
							return -106;
						} else if (d.event == 'Marathon') {
							return -125;
						} else if (d.event == 'Long jump') {
							return 41;
						} else if (d.event == 'Javelin throw') {
							return -102;
						} else if (d.event == 'Hammer throw') {
							return -40;
						} else if (d.event == 'Discus throw') {
							return -39;
						} else if (d.event == 'Decathlon') {
							return -100;
						} else if (d.event == '50 km walk') {
							return -125;
						} else if (d.event == '400 m hurdles') {
							return -79;
						} else if (d.event == '4 x 400 m relay') {
							return 11;
						} else if (d.event == '4 x 100 m relay') {
							return -102;
						} else if (d.event == '3000 m steeplechase') {
							return -167;
						} else if (d.event == '1500 m') {
							return -127;
						} else if (d.event == '110 m hurdles') {
							return -102;
						} else if (d.event == '5000 m') {
							return -66;
						} else if (d.event == '10000 m') {
							return -74;
						} else if (d.event == '400 m') {
							return -125;
						} else if (d.event == '20 km walk') {
							return -128;
						} else if (d.event == '800 m') {
							return -111;
						} else if (d.event == '100 m') {
							return -74;
						} else if (d.event == '20 km walk') {
							return -100;
						} else if (d.event == 'Shot put') {
							return -64;
						} else if (d.event == '200 m') {
							return -82;
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
					return 16;
				} else {
					return -10;
				}

			} else if (d.type == 'points' || d.type == 'distance') {
				if (d.currDate == recent) {
					return -10
				} else {
					return 16
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

		//move the y axis path on top of the grid lines
		$('.y-axis').append($('.y-axis path'));

	}

	// function to set the chart width
	function chartWidth(x) {

		if (x < 992) {
			return x - 10;
		} else if (x>=992&&x<1200){
			return x * .78;
		}else {
			return x * .79;
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

	function chartHeight(x) {
		if (x > 992) {
			return 600;
		} else {
			return 350;
		}
	}

	// set some d3 values
	var width = chartWidth($(window).width()), height = chartHeight($(window).width()), barHeight = 8, padding = 30;

	// set the scale
	var xScale = d3.scaleTime().range([0, xScaleMax($(window).width(), width)]);
	var yScale = d3.scaleLinear().range([0, height - padding * 3]);

	//create your chart selector
	var chart = d3.select('.chart').attr('width', width).attr('height', height);

	// call the data with d3.csv
	// anything that does not depend on the data can be initialized before this
	d3.csv('data/data.csv', dataTypes, function(error, data) {

		// make initial chart
		var genderSelect = startGender;
		var genderFilter = _.where(data, {
			gender : genderSelect
		});
		genderFilter = _.sortBy(genderFilter, 'event');

		var eventPivot = _(genderFilter).chain().flatten().pluck('event').unique().value();
		for (var i = 0; i < eventPivot.length; i++) {
			var option = '<option value="' + eventPivot[i] + '">' + eventPivot[i] + '</option>';
			$('.filter-dropdown').append(option);
		}

		var eventFilter = _.where(genderFilter, {
			event : startEvent
		});
		$('.filter-dropdown').val(startEvent);
		drawViz(parseData(eventFilter), width);
		setNotes(genderSelect, startEvent);

		//set history
		History.pushState(null, null, "?gender=" + genderSelect + "&event=" + startEvent);

		// set dropdown values based on gender selection
		$('.filter-toggle').click(function() {
			var currVal = $('.filter-dropdown').val();

			//logic for decathlon, heptathlon, 100 m hurdles, 110 m hurdles, and 50 km walk
			if (currVal == 'Decathlon') {
				currVal = 'Heptathlon';
			} else if (currVal == 'Heptathlon') {
				currVal = 'Decathlon';
			} else if (currVal == '50 km walk') {
				currVal = '20 km walk';
			} else if (currVal == '110 m hurdles') {
				currVal = '100 m hurdles';
			} else if (currVal == '100 m hurdles') {
				currVal = '110 m hurdles';
			}

			genderSelect = $(this).attr('data-which');
			genderFilter = _.where(data, {
				gender : genderSelect
			});
			genderFilter = _.sortBy(genderFilter, 'event');
			eventPivot = _(genderFilter).chain().flatten().pluck('event').unique().value();
			$('.filter-dropdown').empty();
			for (var i = 0; i < eventPivot.length; i++) {
				var option = '<option value="' + eventPivot[i] + '">' + eventPivot[i] + '</option>';
				$('.filter-dropdown').append(option);
			}
			// set initial event filter
			var eventFilter = _.where(genderFilter, {
				event : currVal
			});
			$('.filter-dropdown').val(currVal);
			drawViz(parseData(eventFilter), width);
			setNotes(genderSelect, currVal);

			//set history
			History.pushState(null, null, "?gender=" + genderSelect + "&event=" + currVal);
		});

		// select an event
		$('.filter-dropdown').on('change', function() {
			genderSelect = $('.filter-toggle.active').attr('data-which');
			genderFilter = _.where(data, {
				gender : genderSelect
			});
			genderFilter = _.sortBy(genderFilter, 'event');
			var eventSelect = this.value;
			var eventFilter = _.where(genderFilter, {
				event : eventSelect
			});
			drawViz(parseData(eventFilter), width);
			setNotes(genderSelect, eventSelect);
			//set history
			History.pushState(null, null, "?gender=" + genderSelect + "&event=" + eventSelect);
		});

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
