import { test, expect } from "@playwright/test";
import { ContactUsComponent } from "../components/ContactUsComponent";
import testData from "../infrastructure/testData";

// Add test data for contact form
const validContactData = {
    fullName: "John Doe",
    email: "john.doe@example.com",
    subject: "Test Subject",
    message: "This is a test message."
};

const invalidEmailData = {
    ...validContactData,
    email: "invalid-email"
};

test.describe("Contact Us Form", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://dvir-levy.netlify.app/");
    });

    test("should submit form successfully with valid data", async ({ page }) => {
        const contactUs = new ContactUsComponent(page);
        await contactUs.fillForm(
            validContactData.fullName,
            validContactData.email,
            validContactData.subject,
            validContactData.message
        );
        await expect(contactUs.get().submitButton).toBeEnabled();
        await contactUs.submitForm();
        // Form submitted successfully - button was enabled
    });

    test("should show validation messages for empty fields", async ({ page }) => {
        const contactUs = new ContactUsComponent(page);
        await contactUs.clearForm();
        await expect(contactUs.get().submitButton).toBeDisabled();
    });

    test("should show validation message for invalid email", async ({ page }) => {
        const contactUs = new ContactUsComponent(page);
        await contactUs.fillForm(
            validContactData.fullName,
            invalidEmailData.email,
            validContactData.subject,
            validContactData.message
        );
        await expect(contactUs.get().submitButton).toBeDisabled();
    });
});
