import { test , expect } from '../infrastructure/fixture';
import { Utils } from '../infrastructure/utils';
import testData from '../infrastructure/testData';
import { FooterComponent } from '../components/FooterComponent';


test('Footer Component Tests',{tag:'@footerComponent'}, async ({ OpenProtfolio }) => {
  const footerComponent = new FooterComponent(OpenProtfolio);
  await test.step("Opening Portfolio Page",async()=>{
    Utils.validateUrl(`${process.env.HOST}`,OpenProtfolio)
  })
    await test.step("verify footer is visible",async ()=>{
        await footerComponent.verifyFooterIsVisible()
    })

    await test.step("verify name and profession display in the about me section",async ()=>{
        await footerComponent.verifyNameAndProfessionDisplay(testData.footer.aboutMeName, testData.footer.aboutMeText)
    })

    await test.step("verify quick links display in the footer",async ()=>{
       await footerComponent.vertifyQuickLinksDisplay()
     })

});

