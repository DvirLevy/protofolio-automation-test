import { test, expect } from '@playwright/test';
import HeroComponent from '../components/HeroComponent';
import { Utils } from '../infrastructure/utils';
import testData from '../infrastructure/testData';


test.describe('Hero Component Tests', () => {
  test('Sample Test - Placeholder', async ({ page }) => {
    console.log(process.env.HOST);
    const heroComponent = new HeroComponent(page);
    await page.goto('/',{waitUntil:'load'});
    Utils.validateUrl(`${process.env.HOST}`,page)
    await expect(heroComponent._greetingText).toHaveText(testData.heroPageText.greetingText)
    await expect(heroComponent._name).toHaveText(testData.heroPageText.titleText)
    await expect(heroComponent._title).toHaveText(testData.heroPageText.professionalTitle)
    await expect(heroComponent._description).toContainText(testData.heroPageText.descriptionText)
    await heroComponent.clickLinkedinLink();
  });
})
