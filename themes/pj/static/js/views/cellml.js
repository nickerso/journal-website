define([
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/dom-class",
    "dijit/layout/ContentPane"
], function(declare, dc, domClass, ContentPane){
    return declare("ArchiveViewer.cellml", null, {
    	// define our properties
    	domNode: null,
    	description: "Description should always be set",
    	cellml: null,
    	
    	// and methods
    	
    	// The constructor
        constructor: function(args){
            declare.safeMixin(this, args);
            this.domNode = dc.create("div")
            var node = dc.create("p");
            node.innerHTML = this.description;
            this.domNode.appendChild(node);
            var actions = dc.create("div");
            this.domNode.appendChild(actions);
            if ("mathsURL" in this.cellml) {
            	var span = dc.create("a", {
            		href: this.cellml.mathsURL,
            		target: "_blank",
            		title: "View the mathematics for this CellML model",
            		innerHTML: "Maths",
            		class: "action-button cellml-action-button"
            	});
            	actions.appendChild(span);
            }
            if ("codeURL" in this.cellml) {
            	var span = dc.create("a", {
            		href: this.cellml.codeURL,
            		target: "_blank",
            		title: "View the generated procedural code for this CellML model",
            		innerHTML: "Code",
            		class: "action-button cellml-action-button"
            	});
            	actions.appendChild(span);
            }
            if ("simulateInOpenCOR" in this.cellml) {
            	var span = dc.create("a", {
            		href: this.cellml.simulateInIoenCOR,
            		title: "Simulate this model in OpenCOR",
            		innerHTML: "Simulate in OpenCOR",
            		class: "action-button cellml-action-button"
            	});
            	actions.appendChild(span);
            }
        }
    });
});