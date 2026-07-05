import { Page, Locator, expect, test } from "@playwright/test";
import locatores from "../infrastructure/locators";

export class ContactUsComponent {
    private readonly _page: Page;
    private readonly _fullName: Locator;
    private readonly _email: Locator;
    private readonly _subject: Locator;
    private readonly _message: Locator;
    private readonly _submitButton: Locator;

    constructor(page: Page) {
        this._page = page;
        this._fullName = page.locator(locatores.contactUsComponent.fullName);
        this._email = page.locator(locatores.contactUsComponent.email);
        this._subject = page.locator(locatores.contactUsComponent.subject);
        this._message = page.locator(locatores.contactUsComponent.message);
        this._submitButton = page.locator(locatores.contactUsComponent.submitButton);
    }

    private async closeAvatarPopupIfOpen() {
        const closeButton = this._page.locator(locatores.aiAssistantComponent.closeButton).first();
        if (await closeButton.isVisible().catch(() => false)) {
            await closeButton.click({ force: true });
            await this._page.locator(locatores.aiAssistantComponent.avatarDialog).first().waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
        }
    }

    async fillForm(fullName: string, email: string, subject: string, message: string) {
        await this.closeAvatarPopupIfOpen();
        await this._fullName.fill(fullName);
        await this._email.fill(email);
        await this._subject.fill(subject);
        await this._message.fill(message);
    }

    async submitForm() {
        await this.closeAvatarPopupIfOpen();
        await this._submitButton.click({ force: true, timeout: 10000 });
    }

    async clearForm() {
        await this.closeAvatarPopupIfOpen();
        await this._fullName.fill("");
        await this._email.fill("");
        await this._subject.fill("");
        await this._message.fill("");
    }

    getValidationMessage(field: "fullName" | "email" | "subject" | "message" | "emailFormat") {
        switch (field) {
            case "fullName":
                return this._page.locator(locatores.contactUsComponent.validationFullName);
            case "email":
                return this._page.locator(locatores.contactUsComponent.validationEmail);
            case "subject":
                return this._page.locator(locatores.contactUsComponent.validationSubject);
            case "message":
                return this._page.locator(locatores.contactUsComponent.validationMessage);
            case "emailFormat":
                return this._page.locator(locatores.contactUsComponent.validationEmailFormat);
        }
    }

    get() {
        return {
            fullName: this._fullName,
            email: this._email,
            subject: this._subject,
            message: this._message,
            submitButton: this._submitButton
        }
    }
}
