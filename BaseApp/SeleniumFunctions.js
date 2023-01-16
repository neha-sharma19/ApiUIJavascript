const {By, Key, Builder, until, Actions, Options} = require("selenium-webdriver");
module.exports = class SeleniumFunctions {
  constructor(driver) {
    this.driver = driver;
  }

	clickElement({ selector }) {
		const element = this.driver.findElement(selector);

		try {
      element.click();
    } catch (error) {
      console.log("Error After Clicking"+error);
    }
	}

	setValue({
    selector,
    value,
    shouldClearBefore = true
  }) {
    try {
			const elem = this.driver.findElement(selector)

      if (shouldClearBefore === true) {
        elem.clear();
      }

      elem.sendKeys(value);
    } catch (err) {
      if (err.name === 'StaleElementReferenceError') {
        if (shouldClearBefore === true) {
          elem.clear();
        }

        this.driver.findElement(selector).sendKeys(value)
      } else {
        throw Error(err)
      }
    }
  }

	isElementPresent({ selector }) {
    this.driver.manage().setTimeouts({
      implicit: 1000
    });

    const elements = this.driver.findElements(selector);

    return elements.length > 0
  }

  isElementLocated({ selector }) {
    this.driver.wait(until.elementLocated(selector), 5000);
  }

	getText({ selector }) {
    const element = this.driver.findElement(selector);
    const text = element.getText();

    return text;
  }

	getAllElements({ selector }) {
    const elements = this.driver.findElements(selector);

    return elements;
  }

  actionClick({ selector }){
    this.driver.actions(Options).click(selector).perform();
  }

  actionDoubleClick({ selector }){
    this.driver.actions(Options).doubleClick(selector).perform();
  }

}