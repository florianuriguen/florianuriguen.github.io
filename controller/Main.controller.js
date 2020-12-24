sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("flo.launchpad.controller.Main", {
		onInit: function () {

		},
		onTilePress: function (oEvent) {
			var sTargetApp = oEvent.getSource().data("targetApp");
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo(sTargetApp);
			//sap.m.URLHelper.redirect("../" + sTargetApp + "/webapp/index.html");
			//sap.m.URLHelper.redirect("http://localhost:3002/");
			//geklaut von https://blogs.sap.com/2017/06/23/cross-app-navigation-in-sap-fiori-launchpad/
		}
	});
});