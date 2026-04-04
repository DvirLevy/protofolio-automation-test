import { Page, Locator, test, expect } from "@playwright/test";
import locatores from "../infrastructure/locators";

export class CardComponent {
    private readonly _page: Page;
    private readonly _cardTitle: Locator;
    private readonly _cardDescription: Locator;
    private readonly _cardLink: Locator;
    private readonly _projectsCards: Locator;
    // private _cardsNumber?:number;

    constructor(page: Page) {
        this._page = page;
        this._projectsCards = page.locator(locatores.projectsComponent.cards);
        this._cardTitle = page.locator(locatores.projectsComponent.cardTitle);
        this._cardDescription = page.locator(locatores.projectsComponent.cardDescription);
        this._cardLink = page.locator(locatores.projectsComponent.cardLink);
    }

    async countCards(): Promise<number> {
        return await this._projectsCards.locator(':scope > *').count();
    }

    async cardsInpector(): Promise<void> {
        const numberOfCards = await this.countCards();
        const cards = this._projectsCards.locator(':scope > *');
        for (let i = 0; i < numberOfCards; i++) {
            await this.assertCardTitle(cards.nth(i), i);
            await this.getCardDescription(cards.nth(i), i);
        }
    }

    async assertCardTitle(card: Locator, index: number): Promise<void> {
        await test.step(`verifing card number ${++index} has a title`, async () => {
            let cardTitle = card.locator(locatores.projectsComponent.cardTitle);
            await expect(cardTitle).toBeVisible();
        })
    }
    async getCardDescription(card: Locator, index: number): Promise<void> {
        await test.step(`verifing card number ${++index} has a description`, async () => {
            let cardDescription = card.locator(locatores.projectsComponent.cardDescription);
            await expect(cardDescription).toBeVisible();
        })
    }

}