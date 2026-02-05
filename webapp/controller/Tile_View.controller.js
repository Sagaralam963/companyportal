sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("companyportal.controller.Tile_View", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf companyportal.view.Tile_View
		 */
		onInit: function () {
debugger;
		},

		onPressTile: function (oEvent) {
			var icon = oEvent.getSource().getTileContent()[0].getContent().mAggregations.items[0].getSrc()

			if (icon == "sap-icon://retail-store") {
				sap.ui.core.UIComponent.getRouterFor(this).navTo("Table_view");
			}
		}

	});

});