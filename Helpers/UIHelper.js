const BaseApplication = require('../BaseApp/BaseApplication');
const Pages = require('../Pages');

module.exports = class UIHelper extends BaseApplication {
  constructor() {
		super();
		this.pages = {}

		for (const [idx, row] of Pages.entries()) {
			this.pages[row.name] = new Pages[idx](this.driver);
		}
	}
}