sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.coopersap.relatorioedu.controller.App", {
            onInit: function () {
                
			},
            
		onPressNavegar: function () {
			this.getOwnerComponent().getRouter().navTo("Pedido");
		}
           
        });
    });
