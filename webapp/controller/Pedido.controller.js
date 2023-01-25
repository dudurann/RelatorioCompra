sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.coopersap.relatorioedu.controller.Pedido", {
            onInit: function () {
                var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("Pedido").attachPatternMatched(this._Route, this);
			},
			
		_Route: function(){
			var oModel = this.getOwnerComponent().getModel();
			//Lista os dados do odata na view
			oModel.read("/ZCDS_TESTES_EDU", {
				success: function (ok) {
		            this.variavel = ok;
					var oJSONModel = new JSONModel(this.variavel);
					this.getView().setModel(oJSONModel,"lista");
				}.bind(this)
			})
		},
		onPressVoltar: function () {
			history.go(-1)
	}
        });
    });