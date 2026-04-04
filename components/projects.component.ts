import { Page, Locator, expect } from "@playwright/test";
import locatores from "../infrastructure/locators";

export default class ProjectsComponent {
    readonly _page: Page;
    readonly _projectsCards: Locator;
    readonly _projectsTitle: Locator;
    readonly _projectsSubTitle: Locator;
    readonly _viewMoreLink: Locator;


    constructor(page: Page) {
        this._page = page;
        this._projectsCards = page.locator(locatores.projectsComponent.cards);
        this._projectsTitle = page.locator(locatores.projectsComponent.projectsTitle);
        this._projectsSubTitle = page.locator(locatores.projectsComponent.projectsSubTitle);
        this._viewMoreLink = page.locator(locatores.projectsComponent.cardLink);
    }

    async assertProjectsTitle(): Promise<void> {
        await expect(this._projectsTitle).toHaveText("Projects");
    }

    async assertProjectsSubTitle(): Promise<void> {
        await expect(this._projectsSubTitle).toHaveText("Tools, frameworks, and applications I've built");
    }

    async assertGithubLinkOnTheBottomTheComponent(): Promise<void> {
        const githubLink = this._page.locator(locatores.projectsComponent.githubLinkButton);
        await expect(githubLink).toBeVisible();
    }
}
