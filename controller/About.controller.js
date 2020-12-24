sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"flo/launchpad/util/formatter"
], function (Controller, JSONModel, Formatter) {
	"use strict";

	return Controller.extend("flo.launchpad.controller.About", {
		Formatter: Formatter,

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("About").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			//nothing yet
		},
		onContactPress: function(oEvent){
			alert("Contact fragment coming soon!");
		}
	});
});