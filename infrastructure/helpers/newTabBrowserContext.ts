import { Page, BrowserContext, Locator, test } from '@playwright/test';
import { Utils } from '../utils';

const clickAndWaitForNewTab = async (context: BrowserContext, locator : Locator, urlParams:string): Promise<Page> =>{
    let newTab: Page;
    return await test.step('Open link in new tab', async () => {
    [newTab] = await Promise.all([
    context.waitForEvent('page'),
    locator.click(),
    ]);
    
    // try{
      await newTab.waitForLoadState();
      await Utils.validateUrl(urlParams, newTab);
    //   }
    //   catch(error){
    //       throw new Error(`somting went wrong with opening a new tab: ${urlParams}, but got: ${newTab.url()}`);
    //   }      
      return newTab;
    });
}

export { clickAndWaitForNewTab }