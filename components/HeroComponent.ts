import { Page, Locator } from "@playwright/test";
import locatores from "../infrastructure/locatores"
import { clickAndWaitForNewTab } from "../infrastructure/helpers/newTabBrowserContext";

class HeroComponent {

    readonly _page: Page;
    readonly _greetingText: Locator;
    readonly _name: Locator;
    readonly _title: Locator;
    readonly _description: Locator;
    readonly _viewProjectsButton: Locator;
    readonly _contactMeButton: Locator;
    readonly _resumeDownloadButton: Locator;
    readonly _githubLinkButton: Locator;
    readonly _linkedinLinkButton: Locator;   
    readonly _emailLinkButton: Locator;
    readonly _automaticCarousel: Locator;
    readonly _scrollDownIndicator: Locator;

    constructor(page: Page) {
        this._page = page;
        this._greetingText = page.locator(locatores.heroPage.greetingText);
        this._name = page.locator(locatores.heroPage.name); // Replace 'Your Name' with the actual name
        this._title = page.locator(locatores.heroPage.title); // Replace 'Your Title' with the actual title
        this._description = page.locator(locatores.heroPage.description); // Replace with actual description
        this._viewProjectsButton = page.locator(locatores.heroPage.viewProjectsButton);
        this._contactMeButton = page.locator(locatores.heroPage.contactMeButton);
        this._resumeDownloadButton = page.locator(locatores.heroPage.resumeDownloadButton);
        this._githubLinkButton = page.locator(locatores.heroPage.githubLinkButton);
        this._linkedinLinkButton = page.locator(locatores.heroPage.linkedinLinkButton);
        this._emailLinkButton = page.locator(locatores.heroPage.emailLinkButton);
        this._automaticCarousel = page.locator(locatores.heroPage.automaticCarousel);
        this._scrollDownIndicator = page.locator(locatores.heroPage.scrollDownIndicator);
    }

    async clickViewProjects() {
        await this._viewProjectsButton.click();
    }
    async clickContactMe() {
        await this._contactMeButton.click();
    }   
    async clickDownloadResume() {
        await this._resumeDownloadButton.click();
    }   
    async clickGithubLink() {
        await this._githubLinkButton.click();
    }
    async clickLinkedinLink() {
        await clickAndWaitForNewTab(this._page.context(),this._linkedinLinkButton, `${process.env.LINKEDIN_URL}`);
    }
    async clickEmailLink() {
        await this._emailLinkButton.click();
    }


}

export default HeroComponent;