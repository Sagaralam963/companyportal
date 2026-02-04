sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel"
], function (Controller, Fragment, MessageBox, JSONModel) {
	"use strict";

	return Controller.extend("companyportal.controller.Table_view", {

		onInit: function () {

			var dataModel = this.getOwnerComponent().getModel("ProductModel");
			this.getView().setModel(dataModel, "ProductModel");

			var Combo_Array = [{
				"Company": "Dell"
			}, {
				"Company": "HP"
			}, {
				"Company": "Asus"
			}];

			var comModel = new JSONModel({
				Combo_Array: Combo_Array
			});
			this.getView().setModel(comModel, "ComboModel");

			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.getRoute("Table_view").attachPatternMatched(this._onObjectMatched, this);
		},

		OnClick: function () {
			var that = this;
			var oView = that.getView();
			if (!that.byId("Act")) {
				Fragment.load({
					id: oView.getId(),
					name: "companyportal.Fragment.TableCreate",
					controller: that
				}).then(function (oDialog) {
					oView.addDependent(oDialog);
					oDialog.open();

				});

			}

			if (!that.byId("Act") == false) {
				if (that.byId("Act")) {
					Fragment.load({
						id: oView.getId(),
						name: "companyportal.Fragment.TableCreate",
						controller: that
					}).then(function (oDialog) {
						oView.addDependent(oDialog);
						oDialog.open();

					});
				}
			}
		},

		OnSave: function () {
			
			var Product = this.byId("ProductId").getValue();

			var Company = this.byId("CompanyId").getValue();

			var Delivery = this.byId("DeliveryId").getDateValue();

			var Rating = this.byId("RatingId").getValue();

			var Price = this.byId("PriceId").getValue();

			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
				pattern: "dd-MM-yyyy"
			});
			var len = this.byId("idTable").getItems().length;

			if (Company === "HP") {
				var obj = {
					Id: len + 1,
					Product: Product,
					Company: Company,
					Delivery: oDateFormat.format(Delivery),
					Rating: Rating,
					Icon: "./Image/HP.png",
					Price: Price,
					Review: "Add Review"

				};
			} else if (Company === "Dell") {
				var obj = {
					Id: len + 1,
					Product: Product,
					Company: Company,
					Delivery: oDateFormat.format(Delivery),
					Rating: Rating,
					Icon: "./Image/Dell.png",
					Price: Price,
					Review: "Add Review"

				};
			} else if (Company === "Asus") {
				var obj = {
					Id: len + 1,
					Product: Product,
					Company: Company,
					Delivery: oDateFormat.format(Delivery),
					Rating: Rating,
					Icon: "./Image/asus.png",
					Price: Price,
					Review: "Add Review"

				};
			} else if (Company === "Lenovo") {
				var obj = {
					Id: len + 1,
					Product: Product,
					Company: Company,
					Delivery: oDateFormat.format(Delivery),
					Rating: Rating,
					Icon: "./Image/Lenovo.png",
					Price: Price,
					Review: "Add Review"

				};
			} else if (Company === "Acer") {
				var obj = {
					Id: len + 1,
					Product: Product,
					Company: Company,
					Delivery: oDateFormat.format(Delivery),
					Rating: Rating,
					Icon: "./Image/AcerLogo.png",
					Price: Price,
					Review: "Add Review"

				};

			} else if (Company === "Nokia") {
				var obj = {
					Id: len + 1,
					Product: Product,
					Company: Company,
					Delivery: oDateFormat.format(Delivery),
					Rating: Rating,
					Icon: "./Image/NokiaLogo.png",
					Price: Price,
					Review: "Add Review"

				};
			} else if (Company === "Samsung") {
				var obj = {
					Id: len + 1,
					Product: Product,
					Company: Company,
					Delivery: oDateFormat.format(Delivery),
					Rating: Rating,
					Icon: "./Image/Samsung.png",
					Price: Price,
					Review: "Add Review"

				};
			} else if (Company === "One Plus") {
				var obj = {
					Id: len + 1,
					Product: Product,
					Company: Company,
					Delivery: oDateFormat.format(Delivery),
					Rating: Rating,
					Icon: "./Image/OnePlusLogo.png",
					Price: Price,
					Review: "Add Review"

				};
			} else if (Company === "Vivo") {
				var obj = {
					Id: len + 1,
					Product: Product,
					Company: Company,
					Delivery: oDateFormat.format(Delivery),
					Rating: Rating,
					Icon: "./Image/VivoLogo.png",
					Price: Price,
					Review: "Add Review"

				};
			} else if (Company === "Oppo") {
				var obj = {
					Id: len + 1,
					Product: Product,
					Company: Company,
					Delivery: oDateFormat.format(Delivery),
					Rating: Rating,
					Icon: "./Image/OppoLogo.png",
					Price: Price,
					Review: "Add Review"

				};
			} else if (Company === "RedMi") {
				var obj = {
					Id: len + 1,
					Product: Product,
					Company: Company,
					Delivery: oDateFormat.format(Delivery),
					Rating: Rating,
					Icon: "./Image/Redmi.png",
					Price: Price,
					Review: "Add Review"

				};
			}

			var Data = this.getView().getModel("ProductModel").getData().Item;
			Data.push(obj);

			var oModel1 = new sap.ui.model.json.JSONModel({
				Item: Data
			});
			this.getView().setModel(oModel1, "ProductModel");

			this.byId("Act").getContent()[1].setValue("");
			this.byId("Act").getContent()[1].setValueState(sap.ui.core.ValueState.None);
			this.byId("Act").getContent()[4].setValue("");
			this.byId("Act").getContent()[4].setValueState(sap.ui.core.ValueState.None);
			this.byId("Act").getContent()[6].setValue("");
			this.byId("Act").getContent()[6].setValueState(sap.ui.core.ValueState.None);
			this.byId("Act").getContent()[8].setValue("");
			this.byId("Act").getContent()[8].setValueState(sap.ui.core.ValueState.None);
			this.byId("Act").getContent()[10].setValue("");
			this.byId("Act").getContent()[10].setValueState(sap.ui.core.ValueState.None);

			this.byId("Act").destroy();

			//this._onObjectMatched();

		},

		onReviewpress: function (oEvent) {
			
			this.obj = oEvent.getSource().getBindingContext("ProductModel").getObject();
			if (this.obj.Review == "Review") {
				
				var that = this;
				that._openDialoge(oEvent);
				return;
			}
			var that = this;
			var oView = that.getView();
			if (!that.byId("reviewId")) {
				Fragment.load({
					id: oView.getId(),
					name: "companyportal.Fragment.Review",
					controller: that
				}).then(function (oDialoge) {
					oView.addDependent(oDialoge);
					oDialoge.open();

				});

			}
		},

		_openDialoge: function (oEvent) {
			
			sap.ui.getCore().setText = this.getView().getModel("ProductModel").getData().Item[this.obj.Id - 1].TextArea;

			//  ============================================================================================
			// MessageBox.show(setText, {
			// 	icon: MessageBox.Icon.Information,
			// 	title: "Review",
			// 	actions: [MessageBox.Action.OK],
			// 	emphasizedAction: MessageBox.Action.OK,
			// 	onClose: function (sAction) {

			// 	}
			// });
			//  ============================================================================================
			var that = this;
			var oView = that.getView();
			if (!that.byId("TextArea1")) {
				Fragment.load({
					id: oView.getId(),
					name: "companyportal.Fragment.TextArea",
					controller: that
				}).then(function (oDialoge2) {
					oView.addDependent(oDialoge2);
					oDialoge2.getContent()[0].setValue(sap.ui.getCore().setText);
					oDialoge2.getContent()[0].setEditable(false);
					oDialoge2.open();

				});

			}
			return;
		},

		OnSearched: function (oEvent) {
			var oList = this.getView().byId("idTable");
			var oBinding = oList.getBinding("items");
			var search = oEvent.getSource().getValue();

			// var oName = new sap.ui.model.Filter("ID", sap.ui.model.FilterOperator.Contains, sValue);
			var oDesc = [
				new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.Contains, search),
				new sap.ui.model.Filter("Product", sap.ui.model.FilterOperator.Contains, search),
				new sap.ui.model.Filter("Delivery", sap.ui.model.FilterOperator.Contains, search)

			];
			var oFilter = new sap.ui.model.Filter(oDesc, false);

			oBinding.filter(oFilter);
		},

		OnChangeProduct: function (oEvent) {
			
			var ProductText = oEvent.getSource().getValue();

			if (ProductText === "Laptop" || ProductText === "laptop") {

				var Combo_Array = [{
					"Company": "Dell"
				}, {
					"Company": "HP"
				}, {
					"Company": "Asus"
				}, {
					"Company": "Lenovo"
				}, {
					"Company": "Acer"
				}];

				// var comModel = new JSONModel({
				// 	Combo_Array: Combo_Array
				// });
				// this.getView().setModel(comModel, "ComboModel");

				/////////////////////////////////////////////////////////////

				//var modl = this.getOwnerComponent().getModel("tableData").getData().Sales;
				var jsondata = {
					items: Combo_Array
				};
				var jsonModel = new sap.ui.model.json.JSONModel();
				jsonModel.setData(jsondata);
				var oComboBox = this.getView().byId("CompanyId").setModel(jsonModel);
				oComboBox.setModel(jsonModel);
				oComboBox.bindAggregation("items", "/items", new sap.ui.core.ListItem({
					key: "{Company}",
					text: "{Company}"
				}));
			} else if (ProductText === "Mobile" || ProductText === "mobile") {

				var Combo_Array = [{
					"Mobile": "Nokia"
				}, {
					"Mobile": "Samsung"
				}, {
					"Mobile": "One Plus"
				}, {
					"Mobile": "Vivo"
				}, {
					"Mobile": "Oppo"
				}, {
					"Mobile": "RedMi"
				}];

				// var comModel = new JSONModel({
				// 	Combo_Array: Combo_Array
				// });
				// this.getView().setModel(comModel, "ComboModel");

				/////////////////////////////////////////////////////////////

				//var modl = this.getOwnerComponent().getModel("tableData").getData().Sales;
				var jsondata = {
					items: Combo_Array
				};
				var jsonModel = new sap.ui.model.json.JSONModel();
				jsonModel.setData(jsondata);
				var oComboBox = this.getView().byId("CompanyId").setModel(jsonModel);
				oComboBox.setModel(jsonModel);
				oComboBox.bindAggregation("items", "/items", new sap.ui.core.ListItem({
					key: "{Mobile}",
					text: "{Mobile}"
				}));
			}
		},

		OnClose: function () {
			var that = this;
			this.byId("Act").getContent()[1].setValue("");
			this.byId("Act").getContent()[1].setValueState(sap.ui.core.ValueState.None);
			this.byId("Act").getContent()[2].setValue("");
			this.byId("Act").getContent()[2].setValueState(sap.ui.core.ValueState.None);
			this.byId("Act").getContent()[4].setValue("");
			this.byId("Act").getContent()[4].setValueState(sap.ui.core.ValueState.None);
			that.byId("Act").destroy();
			//	this.byId("Act").refresh();

		},

		onSaveReview: function () {
			
			this._setSee();

		},

		OnSaveTextArea: function () {
			
			this._updateReview();

		},

		_setSee: function () {
			

			this.getView().getModel("ProductModel").getData().Item[this.obj.Id - 1].Review = "Review";
			var ReviewValue = this.getView().byId("TextAreaId").getValue();
			this.getView().getModel("ProductModel").getData().Item[this.obj.Id - 1].TextArea = ReviewValue;

			var Data = this.getView().getModel("ProductModel").getData().Item;
			var oModel1 = new sap.ui.model.json.JSONModel({
				Item: Data
			});
			this.getView().setModel(oModel1, "ProductModel");
			var that = this;
			that.byId("reviewId").destroy();
		},

		_updateReview: function () {
			

			this.getView().getModel("ProductModel").getData().Item[this.obj.Id - 1].Review = "Review";
			var ReviewValue = this.getView().byId("TextAreaId").getValue();
			this.getView().getModel("ProductModel").getData().Item[this.obj.Id - 1].TextArea = ReviewValue;

			var Data = this.getView().getModel("ProductModel").getData().Item;
			var oModel1 = new sap.ui.model.json.JSONModel({
				Item: Data
			});
			this.getView().setModel(oModel1, "ProductModel");
			var that = this;
			that.byId("TextArea1").destroy();
		},

		OnEditTextArea: function (oEvent) {
			this.byId("TextAreaId").setEditable(true);
			oEvent.getSource().getParent().getContent()[1].setVisible(false);
			oEvent.getSource().getParent().getContent()[2].setVisible(true);
		},

		OnCloseReview: function () {
			var that = this;
			that.byId("reviewId").destroy();
		},

		OnCloseTextArea: function () {
			var that = this;
			that.byId("TextArea1").destroy();
		},

		onBack: function () {
			history.go(-1);
		}

	});

});