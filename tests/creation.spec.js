import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe('creation',()=>

{
  test('Creation Etudiant Licence', async ({ page }) => 
  {
  await page.goto('https://www.campusfrance.org/fr/user/register');
  await page.getByPlaceholder('monadresse@domaine.com').click();
  await page.locator('#tarteaucitronPersonalize2').click();
  await page.getByPlaceholder('monadresse@domaine.com').fill('mail@mail.fr');
  await page.getByRole('textbox', { name: 'Mon mot de passe*' }).fill('gdgdgdgdgdg');

  await page.getByLabel('Confirmer le mot de passe').fill('hdhdhdhdhdh');
  await page.getByText('Mme', { exact: true }).click();
  await page.getByLabel('Nom', { exact: true }).fill('fdfdfd');   
  await page.getByLabel('Prénom').fill('dfdfdf');
  await page.locator('#edit-field-pays-concernes', { exact: true }).nth(2).click();
  await page.locator(' #edit-field-pays-concernes > option:nth-child(9)', { exact: true }).click();
 
  await page.getByLabel('Pays de nationalité (valeur 1)').fill('f');
  await page.locator('#ui-id-7').click();
  await page.getByLabel('Code postal').click();
  await page.getByLabel('Code postal').fill('75001');
  await page.getByLabel('Ville').click();
  await page.getByLabel('Ville').fill('paris');
  await page.getByLabel('Téléphone').click();
  await page.getByLabel('Téléphone').fill('0623457845');
  await page.locator('#edit-field-publics-cibles').getByText('Étudiants').click();
  await page.locator('#edit-field-domaine-etudes-wrapper div').filter({ hasText: '- Aucun(e) -' }).nth(2).click();
  await page.getByText('qsds').click();
  await page.locator('#edit-field-niveaux-etude-wrapper div').filter({ hasText: '- Aucun(e) -' }).nth(2).click();
  await page.getByText('Licence 1').click();
  await page.getByText('J’accepte que mes données').click();
  const todoCount =page.getByRole('button', { name: 'Créer un compte' })
  await expect(page.getByText('J’accepte que mes données')).toBeVisible();
  await expect(todoCount).toHaveText('Créer un compte');
  await expect(todoCount).toContainText('compte');
  page.close();

});
test('Creation Etudiant Master', async ({ page }) => 
{
await page.goto('https://www.campusfrance.org/fr/user/register');
await page.getByPlaceholder('monadresse@domaine.com').click();
await page.getByPlaceholder('monadresse@domaine.com').fill('mail@mail.fr');
await page.getByRole('textbox', { name: 'Mon mot de passe*' }).click();
await page.getByRole('textbox', { name: 'Mon mot de passe*' }).fill('gdgdgdgdgdg');
await page.getByLabel('Confirmer le mot de passe').click();
await page.getByLabel('Confirmer le mot de passe').fill('hdhdhdhdhdh');
await page.getByText('Mme', { exact: true }).click();
await page.getByLabel('Nom', { exact: true }).click();
await page.getByLabel('Nom', { exact: true }).fill('fdfdfd');
await page.getByLabel('Prénom').click();
await page.getByLabel('Prénom').fill('dfdfdf');
await page.getByText('- Choisir une valeur -').nth(1).click();
await page.getByText('-Congo', { exact: true }).click();
await page.getByLabel('Pays de nationalité (valeur 1)').click();
await page.getByLabel('Pays de nationalité (valeur 1)').click();
await page.getByLabel('Pays de nationalité (valeur 1)').fill('f');
await page.locator('#ui-id-7').click();
await page.getByLabel('Code postal').click();
await page.getByLabel('Code postal').fill('75001');
await page.getByLabel('Ville').click();
await page.getByLabel('Ville').fill('paris');
await page.getByLabel('Téléphone').click();
await page.getByLabel('Téléphone').fill('0623457845');
await page.locator('#edit-field-publics-cibles').getByText('Étudiants').click();
await page.locator('#edit-field-domaine-etudes-wrapper div').filter({ hasText: '- Aucun(e) -' }).nth(2).click();
await page.getByText('qsds').click();
await page.locator('#edit-field-niveaux-etude-wrapper div').filter({ hasText: '- Aucun(e) -' }).nth(2).click();
await page.getByText('Master 1').click();
await page.getByText('J’accepte que mes données').click();
const todoCount =page.getByRole('button', { name: 'Créer un compte' })
await expect(page.getByText('J’accepte que mes données')).toBeVisible();
await expect(todoCount).toHaveText('Créer un compte');
await expect(todoCount).toContainText('compte');
page.close();

});

})
