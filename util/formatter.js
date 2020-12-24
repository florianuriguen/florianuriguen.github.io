sap.ui.define([
	"sap/gantt/misc/Format"
], function (Format) {
	"use strict";
	return {
		TimeConverter: function (sTimestamp) {
			return Format.abapTimestampToDate(sTimestamp);
		}
	};
});