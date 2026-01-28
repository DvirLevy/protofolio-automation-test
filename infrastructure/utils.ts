import {expect, test, Page } from '@playwright/test';

export class Utils {
    static  async validateUrl(expectedUrl:string | RegExp, page:Page, isNewTab=false):Promise<void>{
        const acutalUrl = page.url();
        console.log(`Actual URL: ${acutalUrl}`);
        if(isNewTab){
            await test.step(`Validate URL is ${expectedUrl}`, async () => {
                await expect(acutalUrl).toContain(expectedUrl);
             })
        }
        else{
            await test.step(`Validate URL is ${expectedUrl}`, async () => {
               await expect(page).toHaveURL(expectedUrl);
            })
        } 
        // }  
        // catch(error){
            // throw new Error(`URL validation failed. Expected: ${expectedUrl}, but got: ${acutalUrl}`);
        // }
    }
}