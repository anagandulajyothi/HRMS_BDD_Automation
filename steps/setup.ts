  import { After, Before, setDefaultTimeout } from '@cucumber/cucumber' ;
import { Browser,chromium, Page } from 'playwright';
let page: Page;
let browser: Browser;

setDefaultTimeout (60000) ;

Before(async() => { 
try{
browser = await chromium. launch({ headless: false });
const context = await browser. newContext();
page = await context. newPage();
 await page. goto("https://hrmsdev1.azurewebsites.net/");
 console. log( `captured site title as ${await page. title()}` );
}
catch (error) {
console. log(`chrome navigation to demo site failed due to ${error}`)
throw new Error(`chrome navigation to demo site failed due to ${error}` );
}
return page;
});

After(async () => {

await browser.close();
})

export { page,browser }; 
 

/*  const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber')

// To launch the browser before all the scenarios
BeforeAll(async () => {
  console.log('Launch Browser')
  // Giving browser- Chromium and headed mode
  global.browser = await playwright['chromium'].launch({ headless: false })
})

// To close the browser after all the scenarios
AfterAll(async () => {
  console.log('Close Browser')
  await global.browser.close()
})

// Before every scenario, Create new context and page
Before(async () => {
  console.log('Create new context and page')
  global.context = await global.browser.newContext()
  global.page = await global.context.newPage()
}) */

// After every scenario, Close context and page
/* After(async () => {
  console.log('Close context and page')
  await global.page.close()
  await global.context.close()
})  */
