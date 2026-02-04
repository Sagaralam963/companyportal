sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("companyportal.controller.Page1", {
        onInit() {
            var sUrl = sap.ui.require.toUrl("companyportal/model/data.json");

            var oModel = new sap.ui.model.json.JSONModel();
            oModel.loadData(sUrl);

            this.getView().setModel(oModel, "ProductModel");


        },


        onAddPress: function (oEvent) {


            if (!this.oMPDialog) {
                this.oMPDialog = this.loadFragment({
                    name: "companyportal.fragment.Create"
                });
            }
            this.oMPDialog.then(function (oDialog) {
                this.oDialog = oDialog;
                this.oDialog.open();
               
            }.bind(this));


        },

        closeDialog:function(oEvent){
            this.oDialog.close();
        }
    });
});