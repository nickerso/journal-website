define([
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/dom-class",
    "dijit/layout/ContentPane",
	// CSV data store
	"dojox/data/CsvStore",
	// and the charting data series
	"dojox/charting/DataSeries",
	// Require the basic 2d chart resource
	"dojox/charting/Chart",
	// Require the theme of our choosing
	"dojox/charting/themes/Claro",
	// Charting plugins:
	// Require the types of Plot that we'll be using
	"dojox/charting/plot2d/Lines",
	"dojox/charting/plot2d/Markers",
	"dojox/charting/plot2d/MarkersOnly",	
	// we want to use tool tips to highlight data points
	"dojox/charting/action2d/Tooltip",
	// We'll use default x/y axes
	"dojox/charting/axis2d/Default"
], function(declare, dc, domClass, ContentPane, CSV, DataSeries, Chart, theme, LinePlot, MarkersPlot, MarkersOnlyPlot, Tooltip){
    return declare("ArchiveViewer.sedml", null, {
    	// define our properties
    	domNode: null,
    	description: "Description should always be set",
    	sedml: null,
    	simulationData: null,
    	
    	// and methods
    	createPlot: function(plot, node) {
    		// Create the chart within it's "holding" node
    		var chart = new Chart(node, { 
    			title: plot.title,
    			titlePos: "bottom",
    			titleGap: 25,
    			//titleFont: "normal normal normal 15pt Arial",
    			titleFontColor: "orange"
    		});
    		// Set the theme
    		chart.setTheme(theme);

    		// the data series for the plot
			chart.addPlot("simulationData", {
				type: LinePlot
			});
    		var series = plot.series;
    		var nSeries = series.length;
    		for (var i = 0; i < nSeries; i++) {
				var s = series[i];
				var data = new DataSeries(this.simulationData, {}, {
					x: s.x,
					y: s.y
				});
				// Add a line plot for the simulation data
				var plotId = "plotSeries-" + i;
				console.log("plot ID: " + plotId);
				// Add the simulation data
				chart.addSeries(plotId, data, {
					plot: "simulationData"
				});
    		}
    		// define our axes
    		chart.addAxis("x");
    		chart.addAxis("y", {
    			vertical: true
    		});
    		// Render the chart!
    		chart.render();
    	},
    	
    	// The constructor
        constructor: function(args){
            declare.safeMixin(this, args);
            this.domNode = dc.create("div")
            var node = dc.create("p");
            node.innerHTML = this.description;
            this.domNode.appendChild(node);
            var actions = dc.create("div");
            this.domNode.appendChild(actions);
            var plotsContainer = dc.create("div");
            this.domNode.appendChild(plotsContainer);
            
            if ("simulateInOpenCOR" in this.sedml) {
            	var span = dc.create("a", {
            		href: this.sedml.simulateInOpenCOR,
            		title: "Load this simulation in OpenCOR",
            		innerHTML: "Simulate in OpenCOR",
            		class: "action-button cellml-action-button"
            	});
            	actions.appendChild(span);
            }
            // if the sedml has a data file, create the CSV data store
            if ("dataFile" in this.sedml) {
            	// set up the simulation data source
            	this.simulationData = new CSV({
            		url: this.sedml.dataFile
            	});
            	// no point doing plots without a data file...
            	var plots = this.sedml.plots;
    	    	var nPlots = plots.length;
    	    	for (var i = 0; i < nPlots; i++) {
    				var plot = plots[i];
    				//console.log(plot);
    				var plotNode = dc.create("div");
    				plotsContainer.appendChild(plotNode);
    				this.createPlot(plot, plotNode);
    	    	}
            }

        }
    });
});