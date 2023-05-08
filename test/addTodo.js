const{ Builder ,By ,key}= require('selenium-webdriver');
//different asserts
const assert =require('assert');
const should = require('chai').should();
const expect =require('chai').expect;


//mocha
describe('add a todo to lambdatest sample app', () =>
{it ('successfully adds a todo ', async()=>{
    //start the webdriver and goto page
let driver  = await new Builder().forBrowser('firefox').build();
await driver.get('https://lambdatest.github.io/sample-todo-app/');

await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium');
//await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium' ,key.ENTER);

await driver.findElement(By.css('#addbutton')).click();

//find what we just put into the list
let todoText=await driver.findElement(By.css('li:last-child')).getText();

//Get the thiiird item of the liist
let items =await driver.findElements(By.css('li'));
let thirditemtext = await items[2].getText();
//console.log(thirditemtext);
thirditemtext.should.equal('Third Item');



//Asserts
assert.equal(todoText, 'Learn Selenium');//built in node
expect(todoText).to.equal('Learn Selenium'); //chai expect

todoText.should.equal('Learn Selenium');// chai should
//close browser and exit selenium

await driver.quit();

});
it('this test shoould be pending');

});