import { test as base, Page } from '@playwright/test';
import { Logger } from './logger';

type fixtures = {
    OpenProtfolio: Page;
    Logger: Logger
}

export const test = base.extend<fixtures>({
    OpenProtfolio: async ({ page }, use) => {
        await page.goto('/', { waitUntil: 'load' });
        await use(page);
    },

    Logger: async ({ }, use) => {
        const logger = new Logger()
        await use(logger)

    }

})
export { expect } from '@playwright/test';