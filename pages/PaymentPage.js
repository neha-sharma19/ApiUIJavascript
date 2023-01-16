const webdriver = require('selenium-webdriver')
const by = webdriver.By
const uiHelper = require('../Helpers/UIHelper');
const SeleniumFunctions = require('../BaseApp/SeleniumFunctions');

const selectors = {	
	monthlyPlanSelector: by.xpath("//span[@data-testid='SelectedCartSummaryCard-atomic-price']"),
	yearlyCurrencySelector: by.xpath("//div[@data-testid='SelectedCartSummaryCard-total-price']/span[1]"),
	yearlyAmount1Selector: by.xpath("//div[@data-testid='SelectedCartSummaryCard-total-price']/span[2]"),
	yearlyDecimalSelector: by.xpath("//div[@data-testid='SelectedCartSummaryCard-total-price']/span[3]"),
	yearlyAmount2Selector: by.xpath("//div[@data-testid='SelectedCartSummaryCard-total-price']/span[4]"),
}

module.exports = class PaymentPage {
	constructor(driver) {
		this.seleniumFunctions = new SeleniumFunctions(driver);
	}

	getActualMonthlyPlan() {
		//const actualCurrencyMonthly = this.seleniumFunctions.getText({ selector: selectors.monthlyCurrencySelector });
		//const actualAmountMonthly = this.seleniumFunctions.getText({ selector: selectors.monthlyAmount1Selector });
		//const actualDecimalMonthly = this.seleniumFunctions.getText({ selector: selectors.monthlyDecimalSelector });
		//const actualAmount2Monthly = this.seleniumFunctions.getText({ selector: selectors.monthlyAmount2Selector });
		const actualMonthlyPlan = this.seleniumFunctions.getText({ selector: selectors.monthlyPlanSelector });
		const actualMonthlyPay = actualMonthlyPlan.replace(/["]+/g, '')
		//const actualMonthlyPay= actualCurrencyMonthly+actualAmountMonthly+actualDecimalMonthly+actualAmount2Monthly+actualMonthlyPlan;
		return actualMonthlyPay;
	}

	getActualYearlyPlan() {
		const actualCurrencyYearly = this.seleniumFunctions.getText({ selector: selectors.yearlyCurrencySelector });
		const actualAmountYearly = this.seleniumFunctions.getText({ selector: selectors.yearlyAmount1Selector });
		const actualDecimalYearly = this.seleniumFunctions.getText({ selector: selectors.yearlyDecimalSelector });
		const actualAmount2Yearly = this.seleniumFunctions.getText({ selector: selectors.yearlyAmount2Selector });
		const actualYearlyPay= actualCurrencyYearly+actualAmountYearly+actualDecimalYearly+actualAmount2Yearly;
		return actualYearlyPay;
	}
}