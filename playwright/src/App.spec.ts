import { test, expect } from '@playwright/test';

test('should have a title', async ({ page }) => {
    await page.goto('/');

    expect(await page.content()).toContain('Testing with Playwright!');
})

test('should have at least one App Card component', async ({ page }) => {
    await page.goto('/');

    expect(await page.getByTestId('appCard').count()).toBeGreaterThan(0);
})

test('should have notification text when clicked on AppCard button', async ({ page }) => {
    await page.goto('/');
    const appCard = page.getByTestId('appCard').first()
    await appCard.getByTestId('card-button').click()
    
    expect(await page.content()).toContain('Card button clicked: Something happened!');
})

test('should have notification text when form is filled and submitted', async ({ page }) => {
    await page.goto('/');
    const appForm = page.getByTestId('appForm')
    
    await appForm.getByTestId('somethingTextInput').fill('Naaaame is Inputgen!!!');
    await appForm.getByTestId('somethingSelect').selectOption({ label: 'Option 1'});
    await appForm.getByTestId('somethingCheckbox1').check();
    await appForm.getByTestId('somethingCheckbox3').check();
    await appForm.getByTestId('somethingTextarea').fill('Text deez texarea!!!');
    await appForm.getByTestId('formButton').click();
    
    expect(await page.content()).toContain('Form submitted: {\"textInput\":\"Naaaame is Inputgen!!!\",\"selectInput\":\"1\",\"checkboxInput\":true,\"checkboxInput2\":false,\"checkboxInput3\":true,\"textareaInput\":\"Text deez texarea!!!\"}');
    //expect(await page.content()).toContain('Form submitted: {"textInput":"Naaaame is Inputgen!!!","selectInput":"1","checkboxInput":true,"checkboxInput2":false,"checkboxInput3":true,"textareaInput":"Text deez textarea!!!"}');
})
