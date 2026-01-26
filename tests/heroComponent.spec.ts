import { test, expect } from '@playwright/test';
import HeroComponent from '../components/HeroComponent';
import { Utils } from '../infrastructure/utils';
import testData from '../infrastructure/testData';


test('Hero Component Tests', async ({ page }) => {
  console.log(process.env.HOST);
  const heroComponent = new HeroComponent(page);
  test.step("Opening Portfolio Page",async()=>{
    console.log(process.env.HOST)
    await page.goto('/',{waitUntil:'load'});
    Utils.validateUrl(`${process.env.HOST}`,page)
  })
  test.step("verify greeting text present",async ()=>{
    await expect(heroComponent._greetingText).toHaveText(testData.heroPageText.greetingText)
  })
  test.step("verify my name is presented",async ()=>{
    await expect(heroComponent._name).toHaveText(testData.heroPageText.titleText)
  })
  test.step("verify title with my professional presented",async ()=>{
    await expect(heroComponent._title).toHaveText(testData.heroPageText.professionalTitle)
  })
  test.step("verify greeting description text is presented",async ()=>{
    await expect(heroComponent._description).toContainText(testData.heroPageText.descriptionText)
  })
  await heroComponent.clickLinkedinLink();
});

