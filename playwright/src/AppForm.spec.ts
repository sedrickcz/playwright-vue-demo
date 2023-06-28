import { test, expect } from '@playwright/experimental-ct-vue';
import AppForm from '../../src/components/AppForm.vue';

test.use({ viewport: { width: 500, height: 500 } });


// Create a test that is testing if the title is correct
test('should have form filled correctly', async ({ mount }) => {
  const component = await mount(AppForm, {});
  const textInput = component.getByTestId('somethingTextInput')
  
  await textInput.fill('Name is Secondgen');
  expect(await textInput.inputValue()).toEqual('Name is Secondgen');

  const select = component.getByTestId('somethingSelect');

  await select.selectOption({ label: 'Option 2'});

  expect(await select.inputValue()).toEqual('2');

  const checkbox = component.getByTestId('somethingCheckbox2');

  await checkbox.check();

  expect(await checkbox.isChecked()).toBeTruthy();

  const textarea = component.getByTestId('somethingTextarea');

  await textarea.fill('This is a long text to show how I fill textarea');

  expect(await textarea.inputValue()).toEqual('This is a long text to show how I fill textarea');
});

test('should send emit with filled values after click on button', async ({ mount }) => {
  let clicked = false;
  let formData = {};
  const component = await mount(AppForm, {
    on: {
      formSubmitted: (data: any) => {
        clicked = true;
        formData = data;
      }
    }
  });


  await component.getByTestId('somethingTextInput').fill('Naaaame is Inputgen!!!');

  await component.getByTestId('somethingSelect').selectOption({ label: 'Option 1'});
  await component.getByTestId('somethingCheckbox1').check();
  await component.getByTestId('somethingCheckbox3').check();
  await component.getByTestId('somethingTextarea').fill('Text deez texarea!!!');

  await component.getByTestId('formButton').click();

  expect(clicked).toBeTruthy();

  expect(formData).toEqual({
      textInput: 'Naaaame is Inputgen!!!',
      selectInput: '1',
      checkboxInput: true,
      checkboxInput2: false,
      checkboxInput3: true,
      textareaInput: 'Text deez texarea!!!'
  })
})
