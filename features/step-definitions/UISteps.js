const {When, Then, Given, AfterAll} = require('@cucumber/cucumber')
const {expect} = require('chai')
const constant = require("../../constants.json");
const ProductsPage = require('../../pages/ProductsPage');
const PlanPage = require('../../pages/PlanPage');
const PaymentPage = require('../../pages/PaymentPage');
const LoginPage = require('../../pages/LoginPage');
const UIHelper = require('../../Helpers/UIHelper');
const expectedMonthly='';
const expectedYearly='';
const uiHelper = new UIHelper;


Given('I navigate to the Nord Products selection Page', async ()=> {
     //this.uiHelper = new UIHelper
     uiHelper.openUrl({ url: constant.web_base_url });
 });

   
When('I select the NordVPN product', async () => {
    // this.productsPage = new ProductsPage;
     uiHelper.pages.ProductsPage.selectNordVpnProduct();
 
 });


Then('I navigate to the Login Page', async () => {
     //this.planPage = new PlanPage;
     uiHelper.pages.PlanPage.clickLoginButton();
});


Then('I navigate back to the Plan Selection Page', async () => {
    // this.loginPage = new LoginPage;
     uiHelper.pages.LoginPage.verifyUrl();
     //this.uiHelper = new UIHelper;
     uiHelper.navigateBack();
     
});


Then('I select the 1-year Plan', async () => {
    // this.planPage = new PlanPage;
     expectedMonthly= uiHelper.pages.PaymentPage.getExpectedMonthlyPlan();
     expectedYearly= uiHelper.pages.PlanPage.getExpectedYearlyPlan();
});


Then('I navigate to the Continue to Payment Page', async () => {
     //this.planPage = new PlanPage;
     uiHelper.pages.PlanPage.clickContinueToPaymentButton();
});


Then('I should see the expected Plan amount is visible on Payment Page', async () => {
    // this.paymentPage = new PaymentPage;
     const actualMonthly= uiHelper.pages.PaymentPage.getActualMonthlyPlan();
     const actualYearly= uiHelper.pages.PaymentPage.getActualYearlyPlan();
     
     expect(expectedMonthly).to.equal(actualMonthly, "Payment Page doesn't show correct Monthly Plan Payment");
     expect(expectedYearly).to.equal(actualYearly, "Payment Page doesn't show correct Yearly Plan Payment");

 });