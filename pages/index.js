'use strict'

const path = require('path')
const pagesToExport = [
  'LoginPage',
  'PaymentPage',
  'PlanPage',
  'ProductsPage',
]
module.exports = pagesToExport.map((page) => require(path.resolve('pages', page)))
