const webdriver = require('selenium-webdriver');
const by = webdriver.By
const uiHelper = require('../Helpers/UIHelper');
const SeleniumFunctions = require('../BaseApp/SeleniumFunctions');
const BaseApplication = require('../BaseApp/BaseApplication');

const selectors = {
	continueButtonSelector: by.xpath("//button[@type='submit']"),
}

module.exports = class LoginPage {
	constructor(driver) {
		this.seleniumFunctions = new SeleniumFunctions(driver);
		this.baseApplication = new BaseApplication(driver);
	}
	

	verifyUrl() {
		this.seleniumFunctions.isElementLocated({ selector: selectors.continueButtonSelector });
		this.baseApplication.refreshPage();
		const currentUrl= this.baseApplication.getCurrentUrl();
		if(currentUrl.match("login")) {
			console.log("Passed");
		}
		else{
			console.log("Failed");
		}

	}
}