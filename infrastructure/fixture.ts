import { test as base, Page } from '@playwright/test';
import { Logger } from './logger';
import { AiAssistantComponent } from '../components/aiAssistant.component';

type fixtures = {
    OpenProtfolio: Page;
    AiAssistant: AiAssistantComponent;
    Logger: Logger
}

export const test = base.extend<fixtures>({

    OpenProtfolio: async ({ page, AiAssistant }, use) => {
        await page.goto('/', { waitUntil: 'load' });
        await AiAssistant.verifyWidgetLoaded();
        await AiAssistant.closeAiAssistant();
        await use(page);
    },

    AiAssistant: async ({ page }, use) => {
        const aiAssistantComponent = new AiAssistantComponent(page)
        await use(aiAssistantComponent)
    },

    Logger: async ({ }, use) => {
        const logger = new Logger()
        await use(logger)

    }

})
export { expect } from '@playwright/test';