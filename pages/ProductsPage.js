const webdriver = require('selenium-webdriver')
const by = webdriver.By
const uiHelper = require('../Helpers/UIHelper');
const SeleniumFunctions = require('../BaseApp/SeleniumFunctions');

const selectors = {
	nordVpnProductSelector: by.xpath("//span[text()='NordVPN']//ancestor :: a[contains(@href,'/?product_group=nordvpn')]"),
}

module.exports = class ProductsPage {
	constructor(driver) {
		this.seleniumFunctions = new SeleniumFunctions(driver);
	}

	selectNordVpnProduct() {
		 this.seleniumFunctions.isElementLocated({ selector: selectors.nordVpnProductSelector });
		 this.seleniumFunctions.clickElement({ selector: selectors.nordVpnProductSelector });
	}
}