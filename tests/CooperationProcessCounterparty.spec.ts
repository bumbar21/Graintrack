import { test, expect } from '@playwright/test';

test('Plan Manager\'s Actions and Build Cooperation Process with Counterparty', async ({ page }) => {
  // Аутентифікація менеджера в системі
  await page.goto('URL вашої веб-сторінки');
  await page.fill('селектор поля логіна', 'логін менеджера');
  await page.fill('селектор поля пароля', 'пароль менеджера');
  await page.click('селектор кнопки входу');

  // Вибір контрагента зі списку
  await page.click('селектор контрагента');

  // Планування дій і побудова процесу співпраці з контрагентом
  await page.fill('селектор поля планування дій', 'план дій');
  await page.click('селектор кнопки збереження');

  // Перевірка оновленої інформації
  const updatedInfo = await page.textContent('селектор поля оновленої інформації');
  expect(updatedInfo).toContain('план дій');
});
