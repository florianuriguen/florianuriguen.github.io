sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"flo/launchpad/util/formatter",
	"sap/gantt/shape/Rectangle",
	"sap/gantt/shape/ext/Diamond",
	"sap/gantt/config/TimeHorizon",
	"sap/gantt/axistime/FullScreenStrategy"
], function (Controller, JSONModel, Formatter, 	Rectangle,	Diamond, TimeHorizon, ProportionZoomStrategy) {
	"use strict";

	return Controller.extend("flo.launchpad.controller.Timeline", {
		Formatter: Formatter,
		_oPopover: undefined,

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Timeline").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			var today = new Date();
			var endOfHorizon = new Date();
			endOfHorizon.setDate(today.getDate() + 100);

			var oHorizon = {
				"startTime": new Date("2006", "08", "01"),
				"endTime": endOfHorizon,
				"visibleStartTime": new Date("2012", "01", "01"),
				"visibleEndTime": endOfHorizon
			};
			var oHorizonModel = new JSONModel(oHorizon);
			this.getView().setModel(oHorizonModel, "Horizon");			
			
			this.getView().byId("ganttChart").setAxisTimeStrategy(this._createZoomStrategy());

			this.createDefaultModel();
		},
		_createZoomStrategy: function () {
			return new ProportionZoomStrategy({
				totalHorizon: new TimeHorizon({
					startTime: this.getView().getModel("Horizon").getProperty("/startTime"),
					endTime: this.getView().getModel("Horizon").getProperty("/endTime")
				}),
				visibleHorizon: new TimeHorizon({
					startTime: this.getView().getModel("Horizon").getProperty("/startTime"),
					endTime: this.getView().getModel("Horizon").getProperty("/visibleEndTime")
				})
			});
		},
		createDefaultModel: function(){
			var oData = {
				"root": {
					"id": "root",
					"level": "root",
					"children": [
						{
							"id": "01",
							"text": "AT Solution Partner GmbH",
							"level": "01",
							"task": [{
								"startTime": "20180201090000",
								"endTime": new Date(),
								"fill" : "#2F6497",
								"level": "1",
								"text": "AT Solution Partner GmbH"
							}],
							"children":[
								{
									"id" : "0101",
									"text" : "WDE360 - Developing UIs with UI5",
									"level" : "02",
									"training" : [{
										"id": "0101",
										"startTime": "20180226090000",
										"endTime": "20180302090000",
										"level": "1",
										"fill" : "#5899DA",
										"tooltip": "WDE360"
									}],
								},
								{
									"id" : "0102",
									"text" : "GW100 - Building OData Services",
									"level" : "02",
									"training" : [{
										"id": "0102",
										"startTime": "20180305090000",
										"endTime": "20180309090000",
										"level": "1",
										"fill" : "#5899DA",
										"tooltip": "GW100"
									}],
								},
								{
									"id" : "0103",
									"text" : "WDE390 - Building Fiori Apps",
									"level" : "02",
									"training" : [{
										"id": "0103",
										"startTime": "20180416090000",
										"endTime": "20180420090000",
										"level": "1",
										"fill" : "#5899DA",
										"tooltip": "WDE390"
									}]
								},
								{
									"id" : "0103",
									"text" : "UX403 - Fiori Elements Development",
									"level" : "02",
									"training" : [{
										"id": "0103",
										"startTime": "20190415090000",
										"endTime": "20190417090000",
										"level": "1",
										"fill" : "#5899DA",
										"tooltip": "UX403 - SAP Fiori Elements"
									}]
								},
								{
									"id" : "0104",
									"text" : "FIOPS1 - Understanding Fiori Launchpad",
									"level" : "02",
									"training" : [{
										"id": "0104",
										"startTime": "20180214090000",
										"endTime": "20180315090000",
										"level": "1",
										"fill" : "#5899DA",
										"tooltip": "Understanding SAP Fiori Launchpad"
									}]
								},
								{
									"id" : "0105",
									"text" : "GIT1 - SCP Version Control with Git",
									"level" : "02",
									"training" : [{
										"id": "0105",
										"startTime": "20180410090000",
										"endTime": "20180516090000",
										"level": "1",
										"fill" : "#5899DA",
										"tooltip": "SAP Cloud Platform Version Control with Git"
									}]
								},
								{
									"id" : "0105",
									"text" : "WTC1 - Writing Testable Code",
									"level" : "02",
									"training" : [{
										"id": "0105",
										"startTime": "20180313090000",
										"endTime": "201800502090000",
										"level": "1",
										"fill" : "#5899DA",
										"tooltip": "Writing Testable Code for ABAP"
									}]
								}
							],
						},
						{
							"id": "02",
							"text": "D. Swarovski KG",
							"level": "01",
							"task": [{
								"startTime": "20120201090000",
								"endTime": "20180131090000",
								"fill" : "#d5dadc",
								"level": "1",
								"text": "D. Swarovski KG"
							}],
							"children": [
								{
									"id" : "0201",
									"text" : "BC401 - ABAP OO",
									"level" : "02",
									"training" : [{
										"id": "0201",
										"startTime": "20130215090000",
										"endTime": "20130215090000",
										"level": "1",
										"fill" : "#5899DA",
										"tooltip": "BC401 - ABAP OO"
									}]
								},
								{
									"id" : "0202",
									"text" : "BC402 - Advanced ABAP",
									"level" : "02",
									"training" : [{
										"id": "0202",
										"startTime": "20140215090000",
										"endTime": "20140215090000",
										"level": "1",
										"fill" : "#5899DA",
										"tooltip": "BC402 - Advanced ABAP"
									}]
								},
								{
									"id" : "0203",
									"text" : "BC414 - Database Changes",
									"level" : "02",
									"training" : [{
										"id": "0203",
										"startTime": "20160215090000",
										"endTime": "20160215090000",
										"level": "1",
										"fill" : "#5899DA",
										"tooltip": "BC414 - Database Changes"
									}]
								}
							]
						},
						{
							"id": "04",
							"text": "Zivildienst",
							"level": "01",
							"task": [{
								"startTime": "20110501090000",
								"endTime": "20120131090000",
								"fill" : "#358a4d",
								"level": "1",
								"text": "Zivildienst"
								}]
						},
						{
							"id": "05",
							"text": "HTL Anichstraße",
							"level": "01",
							"task": [{
								"startTime": "20060901090000",
								"endTime": "20110501090000",
								"fill" : "#358a4d",
								"level": "1",
								"text": "HTL Anichstraße"
							}]
						},
						{
							"id": "06",
							"text": "Interspar",
							"level": "01",
							"task": [{
								"startTime": "20070901090000",
								"endTime": "20101231090000",
								"fill" : "#dc0d0e",
								"level": "1",
								"text": "Wochenendjob bei Interspar"
							}]
						}
					]
				}
			};

			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},
		onContact: function(oEvent){
				alert("Contact fragment coming soon!");
		},
		onShapeDoubleClick: function(oEvent){
			// var oShape = oEvent.getParameter("shape");

			// if (oShape) {
			// 	this._getDetailPopover().getModel("Details").setData({
			// 		RequirementID       : oShape.getShapeId(),
			// 		SourceLocation      : "Beijing",
			// 		DestinationLocation : "Shanghai",
			// 		DepartureDate       : oShape.getTime(),
			// 		ArrivalDate         : oShape.getEndTime()
			// 	});
				
			// 	// Popup.prototype._duringOpen in Popup-dbg.js hüpft nach oben
			// 	this._getDetailPopover().setOffsetX(oEvent.getParameter("popoverOffsetX")).openBy(oShape);
			// }
		},
		_getDetailPopover: function() {
			if (!this._oPopover) {
				this._oPopover = sap.ui.xmlfragment("flo.launchpad.fragments.Details", this);
				this._oPopover.setModel(new JSONModel(), "Details");
				this.getView().addDependent(this._oPopover);
			}

			return this._oPopover;
		},

		onAfterRendering: function () {
			setTimeout(function () {
				var oGanttChartWithTable = this.getView().byId("ganttChart");
				oGanttChartWithTable.jumpToPosition(new Date());
			}.bind(this), 1000);
		}	
	});
});