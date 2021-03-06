<html lang="en">

  <meta charset="utf-8">
  <body>
    <!--Div that will hold the pie chart-->
    <div id="chart_div"> </div>
	<br> <br>
    <div id="chart_bar"> </div>
	<br> <br>
	<div id="chart_scatter" style="width: 900px; height: 500px;"></div>

    <!--Load the AJAX API-->

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Magnitude');
		data.addColumn('number', 'Count');
		{% for i in datalist: %}
			data.addRow([ '{{i}}', {{datalist[i]}} ]);
		{% endfor %}
        // Set chart options
        var options = {'title':'Earthquake and Magnitude Pie Chart',
                       'width':600,
                       'height':500};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
      // Load the Visualization API and the corechart package.

      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawbar);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawbar() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Magnitude');
		data.addColumn('number', 'Count');
		{% for i in datalist: %}
			data.addRow([ '{{i}}', {{datalist[i]}} ]);
		{% endfor %}
        // Set chart options
        var options = {'title':'Earthquake and Magnitude Bar Chart',
                       'width':600,
                       'height':500};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_bar'));
        chart.draw(data, options);
	}

      // Load the Visualization API and the corechart package.

      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawscatter);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawscatter() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Magnitude');
		data.addColumn('number', 'Count');
		{% for i in datalist: %}
			data.addRow([ '{{i}}', {{datalist[i]}} ]);
		{% endfor %}
        // Set chart options
        var options = {'title':'Earthquake and Magnitude Scatter Chart',
                       'width':600,
                       'height':500};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ScatterChart(document.getElementById('chart_scatter'));
        chart.draw(data, options);
	}

    </script>

  </body>
</html>