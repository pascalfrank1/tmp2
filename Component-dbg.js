jQuery.sap.declare("hcm.fab.myaddresses.my_addresses_ext.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "hcm.fab.myaddresses",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/HCMFAB_ADRS_MAN"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.hcm.fab.myaddresses.Component.extend("hcm.fab.myaddresses.my_addresses_ext.Component", {
	metadata: {
		manifest: "json"
	}
});