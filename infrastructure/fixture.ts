import { test as base, Page } from '@playwright/test';

type fixtures = {
    OpenProtfolio: Page;
}

export const test = base.extend<fixtures>({
    OpenProtfolio: async( { page }, use) => {
        await page.goto('/', { waitUntil: 'load' });
        await use(page);
    }

})
export {expect} from '@playwright/test';