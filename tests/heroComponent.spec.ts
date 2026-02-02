import { test, expect } from '@playwright/test';
import HeroComponent from '../components/HeroComponent';
import { Utils } from '../infrastructure/utils';
import testData from '../infrastructure/testData';


test('Hero Component Tests', async ({ page }) => {
  console.log(process.env.HOSTa);
  const heroComponent = new HeroComponent(page);
  await test.step("Opening Portfolio Page",async()=>{
    await page.goto('/',{waitUntil:'load'});
    Utils.validateUrl(`${process.env.HOST}`,page)
  })
  await test.step("verify greeting text present",async ()=>{
    await expect(heroComponent._greetingText).toHaveText(testData.heroPageText.greetingText)
  })
  await test.step("verify my name is presented",async ()=>{
    await expect(heroComponent._name).toHaveText(testData.heroPageText.titleText)
  })
  await test.step("verify title with my professional presented",async ()=>{
    await expect(heroComponent._title).toHaveText(testData.heroPageText.professionalTitle)
  })
  await test.step("verify greeting description text is presented",async ()=>{
    await expect(heroComponent._description).toContainText(testData.heroPageText.descriptionText)
  })
  await heroComponent.clickLinkedinLink();
});

