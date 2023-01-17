const {When, Then, Given} = require('@cucumber/cucumber')
const {expect} = require('chai')
const constant = require("../../constants.json");
const UIHelper = require('../../Helpers/UIHelper');
const expectedMonthly='';
const expectedYearly='';
this.uiHelper = new UIHelper;



Given('I navigate to the Nord Products selection Page', async () => {
    this.uiHelper.openUrl(constant.web_base_url);
 });

   
When('I select the NordVPN product', async () => {
    this.uiHelper.pages.ProductsPage.selectNordVpnProduct();
 });


Then('I navigate to the Login Page', async () => {
    this.uiHelper.pages.PlanPage.clickLoginButton();
});


Then('I navigate back to the Plan Selection Page', async () => {
    this.uiHelper.pages.LoginPage.verifyUrl();
    this.uiHelper.navigateBack();
});


Then('I select the 1-year Plan', async () => {
     expectedMonthly= uiHelper.pages.PlanPage.getExpectedMonthlyPlan();
     expectedYearly= uiHelper.pages.PlanPage.getExpectedYearlyPlan();
     this.uiHelper.pages.PlanPage.selectOneYearPlan();
});


Then('I navigate to the Continue to Payment Page', async () => {
    this.uiHelper.pages.PlanPage.clickContinueToPaymentButton();
});


Then('I should see the expected Plan amount is visible on Payment Page', async () => {
    const actualMonthly= this.uiHelper.pages.PaymentPage.getActualMonthlyPlan();
    const actualYearly= this.uiHelper.pages.PaymentPage.getActualYearlyPlan();   
    expect(expectedMonthly).to.equal(actualMonthly, "Payment Page doesn't show correct Monthly Plan Payment");
    expect(expectedYearly).to.equal(actualYearly, "Payment Page doesn't show correct Yearly Plan Payment");
 });