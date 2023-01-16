const {When, Then, BeforeAll} = require('@cucumber/cucumber')
const constant = require("../../constants.json");
const expect = require('chai').expect;
var chai = require('chai');
chai.use(require('chai-json-schema'));
const ApiHelper = require('../../Helpers/ApiHelper');
let response = '';
let completeResponse = '';
const apiHelper = new ApiHelper;


When('I hit the endpoint to get the client locazation data', async () => {
     completeResponse = await apiHelper.getRequest({ url: constant.api_base_url });
     response= completeResponse.data;
     console.log(response);
});


Then('I should receive the status code {int}', async (code) => {
    expect(completeResponse.status).to.equal(code, "Get Request Status Code Is Not 200");
});


Then('I validate the response json schema is correct', function () {
     var schema = {
          "$schema": "http://json-schema.org/draft-06/schema#",
          "$ref": "#/definitions/Welcome4",
          "definitions": {
               "Welcome4": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                         "ip": {
                              "type": "string"
                         },
                         "country": {
                              "type": "string"
                         },
                         "country_code": {
                              "type": "string"
                         },
                         "city": {
                              "type": "string"
                         },
                         "isp": {
                              "type": "string"
                         },
                         "isp_asn": {
                              "type": "integer"
                         },
                         "protected": {
                              "type": "boolean"
                         },
                         "longitude": {
                              "type": "number"
                         },
                         "latitude": {
                              "type": "number"
                         },
                         "state_code": {
                              "type": "string"
                         },
                         "zip_code": {
                              "type": "string",
                              "format": "integer"
                         }
                    },
                    "required": [
                         "city",
                         "country",
                         "country_code",
                         "ip",
                         "isp",
                         "isp_asn",
                         "latitude",
                         "longitude",
                         "protected",
                         "state_code",
                         "zip_code"
                    ],
                    "title": "Welcome4"
               }
          }
     };
       
       expect(response).to.be.jsonSchema(schema);
});


Then('I validate the ip is {string}', function (ip) {
     expect(response.hasOwnProperty('ip')).to.be.true;
     expect(response.ip).to.equal(ip, "ip is not correct");
});


Then('I validate the country is {string}', function (country) {
     expect(response.hasOwnProperty('country')).to.be.true;
     expect(response.country).to.equal(country, "ountry is not correct");
});


Then('I validate the country_code is {string}', function (country_code) {
     expect(response.hasOwnProperty('country_code')).to.be.true;
     expect(response.country_code).to.equal(country_code, "country_code is not correct");
});


Then('I validate the city is {string}', function (city) {
     expect(response.hasOwnProperty('city')).to.be.true;
     expect(response.city).to.equal(city, "city is not correct");
 });


Then('I validate the isp is {string}', function (isp) {
     expect(response.hasOwnProperty('isp')).to.be.true;
     expect(response.isp).to.equal(isp, "isp is not correct");
});


Then('I validate the isp_asn is {int}', function (isp_asn) {
     expect(response.hasOwnProperty('isp_asn')).to.be.true;
     expect(response.isp_asn).to.equal(isp_asn, "isp_asn is not correct");
});


Then('I validate the protected is false', function () {
     expect(response.hasOwnProperty('protected')).to.be.true;
     expect(response.protected).to.equal(false, "protected is not correct");
});


Then('I validate the longitude is {float}', function (longitude) {
     expect(response.hasOwnProperty('longitude')).to.be.true;
     expect(response.longitude).to.equal(longitude, "longitude is not correct");
});


Then('I validate the latitude is {float}', function (latitude) {
     expect(response.hasOwnProperty('latitude')).to.be.true;
     expect(response.latitude).to.equal(latitude, "latitude is not correct");
});


Then('I validate the state_code is {string}', function (state_code) {
     expect(response.hasOwnProperty('state_code')).to.be.true;
     expect(response.state_code).to.equal(state_code, "state_code is not correct");
});


Then('I validate the zip_code is {string}', function (zip_code) {
     expect(response.hasOwnProperty('zip_code')).to.be.true;
     expect(response.zip_code).to.equal(zip_code, "zip_code is not correct");
  });
