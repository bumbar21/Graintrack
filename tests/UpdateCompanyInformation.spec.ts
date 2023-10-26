import { test, expect } from '@playwright/test';

test('Update Company Information', async ({ page }) => {
  // Аутентифікація користувача в системі
  await page.goto('URL вашої веб-сторінки');
  await page.fill('селектор поля логіна', 'логін користувача');
  await page.fill('селектор поля пароля', 'пароль користувача');
  await page.click('селектор кнопки входу');

  // Вибір опції "Оновити інформацію про компанію"
  await page.click('селектор опції "Оновити інформацію про компанію"');

  // Оновлення необхідної інформації
  await page.fill('селектор поля інформації', 'нова інформація');
  await page.click('селектор кнопки збереження');

  // Перевірка оновленої інформації
  const updatedInfo = await page.textContent('селектор поля оновленої інформації');
  expect(updatedInfo).toContain('нова інформація');
});
