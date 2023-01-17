const webdriver = require('selenium-webdriver')
const by = webdriver.By
const uiHelper = require('../Helpers/UIHelper');
const SeleniumFunctions = require('../BaseApp/SeleniumFunctions');

const selectors = {
	acceptButtonSelector: by.xpath("//button[text()='Accept']"),
	loginButtonSelector: by.xpath("//a[@data-testid='UserProfile-login-button']"),
	monthlyCurrencySelector: by.xpath("//div[@data-testid='MainPlanCard-period' and contains(.,'1-year plan')]/parent :: div/following-sibling :: div[@data-testid='MainPlanCard-atomic-price']/span[@data-testid='TPrice-currency']"),
	monthlyAmount1Selector: by.xpath("//div[@data-testid='MainPlanCard-period' and contains(.,'1-year plan')]/parent :: div/following-sibling :: div[@data-testid='MainPlanCard-atomic-price']/span[@data-testid='TPrice-integer']"),
	monthlyDecimalSelector: by.xpath("//div[@data-testid='MainPlanCard-period' and contains(.,'1-year plan')]/parent :: div/following-sibling :: div[@data-testid='MainPlanCard-atomic-price']/span[@data-testid='TPrice-decimal']"),
	monthlyAmount2Selector: by.xpath("//div[@data-testid='MainPlanCard-period' and contains(.,'1-year plan')]/parent :: div/following-sibling :: div[@data-testid='MainPlanCard-atomic-price']/span[@data-testid='TPrice-fraction']"),
	monthlyPlanSelector: by.xpath("//div[@data-testid='MainPlanCard-period' and contains(.,'1-year plan')]/parent :: div/following-sibling :: div[@data-testid='MainPlanCard-atomic-price']/span[5]"),
	yearlyCurrencySelector: by.xpath("//div[@data-testid='MainPlanCard-period' and contains(.,'2-year plan')]/parent :: div/following-sibling :: div[2]/descendant ::span[@data-testid='TotalBilledText-total-price']/span[1]"),
	yearlyAmount1Selector: by.xpath("//div[@data-testid='MainPlanCard-period' and contains(.,'2-year plan')]/parent :: div/following-sibling :: div[2]/descendant ::span[@data-testid='TotalBilledText-total-price']/span[2]"),
	yearlyDecimalSelector: by.xpath("//div[@data-testid='MainPlanCard-period' and contains(.,'2-year plan')]/parent :: div/following-sibling :: div[2]/descendant ::span[@data-testid='TotalBilledText-total-price']/span[3]"),
	yearlyAmount2Selector: by.xpath("//div[@data-testid='MainPlanCard-period' and contains(.,'2-year plan')]/parent :: div/following-sibling :: div[2]/descendant ::span[@data-testid='TotalBilledText-total-price']/span[4]"),
    continutToPaymentButtonSeelector: by.xpath("//a[text()='Continue to payment']"),
	oneYearPlanSelector: by.xpath("//div[@data-testid='MainPlanCard-period' and contains(.,'1-year plan')]/ancestor :: button"),
}

module.exports = class PlanPage {
	constructor(driver) {
		this.seleniumFunctions = new SeleniumFunctions(driver);
	}

	clickLoginButton() {
		this.seleniumFunctions.isElementLocated({ selector: selectors.acceptButtonSelector });
		this.seleniumFunctions.clickElement({ selector: selectors.acceptButtonSelector });
		this.seleniumFunctions.isElementLocated({ selector: selectors.loginButtonSelector });
		this.seleniumFunctions.clickElement({ selector: selectors.loginButtonSelector });
   }

	getExpectedMonthlyPlan() {
		const expectedCurrencyMonthly = this.seleniumFunctions.getText({ selector: selectors.monthlyCurrencySelector });
		const expectedAmountMonthly = this.seleniumFunctions.getText({ selector: selectors.monthlyAmount1Selector });
		const expectedDecimalMonthly = this.seleniumFunctions.getText({ selector: selectors.monthlyDecimalSelector });
		const expectedAmount2Monthly = this.seleniumFunctions.getText({ selector: selectors.monthlyAmount2Selector });
		const expectedMonthyPlan = this.seleniumFunctions.getText({ selector: selectors.monthlyPlanSelector });
		const expectedMonthlyPay= expectedCurrencyMonthly+expectedAmountMonthly+expectedDecimalMonthly+expectedAmount2Monthly+expectedMonthyPlan;
		return expectedMonthlyPay;
	}

	getExpectedYearlyPlan() {
		const expectedCurrencyYearly = this.seleniumFunctions.getText({ selector: selectors.yearlyCurrencySelector });
		const expectedAmountYearly = this.seleniumFunctions.getText({ selector: selectors.yearlyAmount1Selector });
		const expectedDecimalYearly = this.seleniumFunctions.getText({ selector: selectors.yearlyDecimalSelector });
		const expectedAmount2Yearly = this.seleniumFunctions.getText({ selector: selectors.yearlyAmount2Selector });
		const expectedYearlyPay= expectedCurrencyYearly+expectedAmountYearly+expectedDecimalYearly+expectedAmount2Yearly;
		return expectedYearlyPay;
	}

	clickContinueToPaymentButton() {
		this.seleniumFunctions.isElementLocated({ selector: selectors.continutToPaymentButtonSeelector });
		this.seleniumFunctions.actionClick({ selector: selectors.continutToPaymentButtonSeelector });	
   }

   selectOneYearPlan() {
	   this.seleniumFunctions.isElementLocated({ selector: selectors.oneYearPlanSelector });
	   this.seleniumFunctions.actionDoubleClick({ selector: selectors.oneYearPlanSelector });
}
}