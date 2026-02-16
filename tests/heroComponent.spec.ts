import { test , expect } from '../infrastructure/fixture';
import HeroComponent from '../components/HeroComponent';
import { Utils } from '../infrastructure/utils';
import testData from '../infrastructure/testData';


test('Hero Component Tests',{tag:'@heroComponent'}, async ({ OpenProtfolio }) => {
  console.log(process.env.HOST);
  const heroComponent = new HeroComponent(OpenProtfolio);
  await test.step("Opening Portfolio Page",async()=>{
    Utils.validateUrl(`${process.env.HOST}`,OpenProtfolio)
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

