sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"flo/launchpad/util/formatter"
], function (Controller, JSONModel, Formatter) {
	"use strict";

	return Controller.extend("flo.launchpad.controller.Images", {
		Formatter: Formatter,

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Images").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			var oModel = new JSONModel(this._createImageJSONData());
			this.getView().setModel(oModel, "images");
		},
		_createImageJSONData: function(){
			var oData = {
				ImagesCollection:[
					{
						"src": "images/photos/patagonia.jpg",
						"text": "Patagonia"
					},
					{
						"src": "images/photos/patagonia2.jpg",
						"text": "Cerro Torre"
					},
					{
						"src": "images/photos/sunrise.jpg",
						"text": "Fitz Roy"
					},
					{
						"src": "images/photos/thunderstorm.jpg",
						"text": "Tre Cime"
					},
					{
						"src": "images/photos/tracks.jpg",
						"text": "Snow"
					}
				]
			};
			return oData;
		}
	});
});