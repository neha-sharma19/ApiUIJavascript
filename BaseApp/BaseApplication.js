'use strict';
const webdriver = require('selenium-webdriver');
module.exports = class BaseApplication  {
	constructor() {
		this.driver = new webdriver.Builder()
		.forBrowser("chrome")
		.build();
		this.driver.manage().window().maximize();
	}

	openUrl(url) {
		this.driver.get(url);
	}

	delay(mls) {
       this.driver.sleep(mls);
   }

	refreshPage() {
       this.driver.navigate().refresh();
  }

    navigateBack() {
       this.driver.navigate().back();
}

    getCurrentUrl() {
    return this.driver.getCurrentUrl();
}

    closeBrowser(){
	      this.driver.quit();
}
}