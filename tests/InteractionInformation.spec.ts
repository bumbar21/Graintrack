import { test, expect } from '@playwright/test';

test('Update Interaction Information with Counterparty', async ({ page }) => {
    // Відкрийти веб-сторінку та авторизватись
    await page.goto('URL вашої веб-сторінки');
    await page.fill(' поле логіна', 'ваш логін');
    await page.fill(' поле пароля', 'ваш пароль');
    await page.click(' кнопки входу');
  
    // Вибрати контрагента зі списку
    await page.click(' контрагента');
  
    // Перевірити, що система відображає інформацію про вибраного контрагента
    const counterpartyInfo = await page.textContent(' поле інформації про контрагента');
    expect(counterpartyInfo).not.toBeNull();
  
    // Введіть нову інформацію про взаємодію з контрагентом
    await page.fill(' поле інформації про взаємодію', 'нова інформація');
  
    // Збережіть зміни
    await page.click(' кнопки збереження');
  
    // Перевірити, що система зберегла введену інформацію та відобразила підтвердження
    const confirmationMessage = await page.textContent(' поле підтвердження');
    expect(confirmationMessage).toBe('Інформація оновлена');
  
    // Перевірити, що інформація про контрагента оновилася
    const updatedInfo = await page.textContent(' поле інформації про контрагента');
    expect(updatedInfo).toBe('нова інформація');
  });
  