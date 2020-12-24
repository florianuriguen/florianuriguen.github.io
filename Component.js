sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"flo/launchpad/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("flo.launchpad.Component", {

		metadata: {
			manifest: "json"
		},
		config: {
			fullWidth: true,
			"favIcon": "sap-icon://source-code",
			"homeScreenIconPhone": "sap-icon://source-code",
			"homeScreenIconPhone@2": "sap-icon://source-code",
			"homeScreenIconTablet": "sap-icon://source-code",
			"homeScreenIconTablet@2": "sap-icon://source-code"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});