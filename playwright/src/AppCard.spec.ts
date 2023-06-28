import { test, expect } from '@playwright/experimental-ct-vue';
import AppCard from '../../src/components/AppCard.vue';

test.use({ viewport: { width: 500, height: 500 } });


// Create a test that is testing if the title is correct
test('should have correct title', async ({ mount }) => {
  const component = await mount(AppCard, {
    props: {
      title: 'Testing with Playwright!'
    }
  });
  await expect(component).toContainText('Testing with Playwright!');
});

test('should have correct description', async ({ mount }) => {
  const component = await mount(AppCard, {
    props: {
      description: 'This is a test of the Playwright testing framework. It is a great tool for testing web applications. You will love it!'
    }
  });
  await expect(component).toContainText('This is a test of the Playwright testing framework. It is a great tool for testing web applications. You will love it!');
});

test('should have correct image', async ({ mount }) => {
  const component = await mount(AppCard, {
    props: {
      image: 'https://picsum.photos/384/200'
    }
  });

  await expect(component.getByTestId('card-image')).toHaveAttribute('src', 'https://picsum.photos/384/200');
});

test('should have default image if there is no image prop', async ({ mount }) => {
  const component = await mount(AppCard);

  await expect(component.getByTestId('card-image')).toHaveAttribute('src', 'https://via.placeholder.com/384x200');
});

test('should emit click event when clicked', async ({ mount }) => {
  let clicked = false ;
  const component = await mount(AppCard, {
    on: {
      doSomething: () => clicked = true,
    }
  });

  await component.getByTestId('card-button').click();

   expect(clicked).toBeTruthy();
});
