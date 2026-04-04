import { expect, Locator, Page } from "@playwright/test";
import locatores from "../infrastructure/locators";


export class FooterComponent {
    readonly _page: Page;
    private readonly _footer: Locator;
    private readonly _aboutMe: Locator;
    private readonly _aboutMeText: Locator;
    private readonly _aboutMeName: Locator;
    private readonly _quickLinksFooter: Locator;
    private readonly _quickLinksTitle: Locator;
    private readonly _quickLinkAbout: Locator;
    private readonly _quickLinkProjects: Locator;
    private readonly _quickLinkContact: Locator;
    private readonly _quickLinkSkills: Locator;


    constructor(page: Page) {
        this._page = page;
        this._footer = page.locator(locatores.footer.footer);
        this._aboutMe = page.locator(locatores.footer.aboutMe);
        this._aboutMeName = page.locator(locatores.footer.aboutMeName)
        this._aboutMeText = page.locator(locatores.footer.aboutMeText)
        this._quickLinksFooter = page.locator(locatores.footer.quickLink);
        this._quickLinksTitle = page.locator(locatores.footer.quickLinkTitle);
        this._quickLinkAbout = page.locator(locatores.footer.quickLinkAbout);
        this._quickLinkProjects = page.locator(locatores.footer.quickLinkProjects);
        this._quickLinkContact = page.locator(locatores.footer.quickLinkContact);
        this._quickLinkSkills = page.locator(locatores.footer.quickLinkSkills);
    }

    async verifyFooterIsVisible(): Promise<boolean> {
        return await this._footer.isVisible();
    }

    async verifyNameAndProfessionDisplay(name: string, text: string): Promise<void> {
        if (await this._aboutMe.isVisible()) {
            await expect(this._aboutMeName).toContainText(name);
            await expect(this._aboutMeText).toContainText(text);
        }
        else {
            throw new Error('About me section is not visible');
        }
    }

    async vertifyQuickLinksDisplay(): Promise<void> {
        if (await this._quickLinksFooter.isVisible()) {
            await expect(this._quickLinksTitle).toHaveText('Quick Links');
            await expect(this._quickLinkAbout).toHaveText('About');
            await expect(this._quickLinkProjects).toHaveText('Projects');
            await expect(this._quickLinkContact).toHaveText('Contact');
            await expect(this._quickLinkSkills).toHaveText('Skills');
        }
        else {
            throw new Error('Quick links in the Footer are not visible');
        }
    }


}