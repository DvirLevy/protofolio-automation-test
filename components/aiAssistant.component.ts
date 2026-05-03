import test, { expect, Locator, Page } from "@playwright/test";
import locatores from "../infrastructure/locators";

export class AiAssistantComponent {
    readonly closeBtn: Locator;
    readonly askMeBtn: Locator;
    readonly whoAmIButton: Locator;
    readonly avatarDialog: Locator;
    readonly chatInput: Locator;
    readonly languageSelection: Locator

    constructor(private _page: Page) {
        this.closeBtn = _page.locator(locatores.aiAssistantComponent.closeButton);
        this.askMeBtn = _page.locator(locatores.aiAssistantComponent.askMeButton);
        this.whoAmIButton = _page.locator(locatores.aiAssistantComponent.whoAmIButton);
        this.avatarDialog = _page.locator(locatores.aiAssistantComponent.avatarDialog);
        this.chatInput = _page.locator(locatores.aiAssistantComponent.chatInput);
        this.languageSelection = _page.locator(locatores.aiAssistantComponent.languageSelection);
    }

    async closeAiAssistant(): Promise<void> {
        await test.step(`Closing AI Assistant`, async () => {
            await this.closeBtn.click();
            await expect(this.closeBtn).toBeHidden();
        })
    }

    async verifyCreateStreamApi(): Promise<void> {
        await test.step(`verifying that create-stream api returned 200 and managed to create stream`, async () => {
            const response = await this._page.waitForResponse(
                response => response.url().includes('create-stream') && response.status() === 200
            );
            expect(response.ok()).toBeTruthy();
        });
    }

    async verifyAvatarWidgetPresented(): Promise<void> {
        await test.step(`verifying that avatar widget presented`, async () => {
            expect(this.avatarDialog).toBeVisible();
        })
    }

    async verifyWidgetLoaded(): Promise<void> {
        await test.step(`verifying that avatar elements presents`, async () => {
            await this.verifyCreateStreamApi();
            expect(this.closeBtn).toBeVisible();
            expect(this.askMeBtn).toBeVisible();
            expect(this.whoAmIButton).toBeVisible();
            expect(this.chatInput).toBeVisible();
            expect(this.languageSelection).toBeVisible();
        })
    }

    async verifyAvatarWidgetNotPresented(): Promise<void> {
        await test.step(`verifying that avatar widget not presented`, async () => {
            await expect(this.avatarDialog).toBeHidden();
        })
    }

}