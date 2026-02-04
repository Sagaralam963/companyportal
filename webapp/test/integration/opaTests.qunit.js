/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["companyportal/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
