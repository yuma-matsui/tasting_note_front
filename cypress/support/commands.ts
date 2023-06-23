import { Appearance, Conclusion, Flavor, Taste } from '../../src/types'
import { appearanceTestData, conclusionTestData, flavorTestData, tasteTestData } from '../../src/utils'

const inputSettingForm = (color: '白' | '赤') => {
  cy.contains('シート名').type('test')
  cy.get('select#time').select('5')
  cy.contains(color).click()
}

const stepToAppearanceForm = () => {
  cy.visit('/tasting_sheets/new')
  cy.inputSettingForm('白')
  cy.contains('テイスティングをはじめる').click()
}

const checkAppearanceForm = ({
  clarity,
  brightness,
  appearanceColors,
  appearanceImpressions,
  consistency,
  intensity
}: Appearance) => {
  cy.contains(clarity).click()
  cy.contains(brightness).click()
  appearanceColors.map((color) => cy.contains(color).click())
  appearanceImpressions.map((impression) => cy.contains(impression).click())
  cy.contains(consistency).click()
  cy.contains(intensity).click()
}

const stepToFlavorForm = () => {
  cy.visit('/tasting_sheets/new')
  cy.stepToAppearanceForm()
  cy.checkAppearanceForm(appearanceTestData)
  cy.contains('次へ').click()
}

const checkFlavorForm = ({
  flavorFirstImpressions,
  flavorFruits,
  flavorFlowers,
  flavorSpices,
  flavorImpressions
}: Flavor) => {
  flavorFirstImpressions.map((firstImpression) => cy.contains(firstImpression).click())
  flavorFruits.map((fruit) => cy.contains(fruit).click())
  flavorFlowers.map((flower) => cy.contains(flower).click())
  flavorSpices.map((spice) => cy.contains(spice).click())
  flavorImpressions.map((impression) => cy.contains(impression).click())
}

const stepToTasteForm = () => {
  cy.visit('/tasting_sheets/new')
  cy.stepToFlavorForm()
  cy.checkFlavorForm(flavorTestData)
  cy.contains('次へ').click()
}

const checkTasteForm = ({ attack, sweetness, bitterness, acidity, balance, afterTaste, alcohol }: Taste) => {
  cy.contains(attack).click()
  cy.contains(sweetness).click()
  cy.contains(bitterness).click()
  cy.contains(acidity).click()
  cy.contains(balance).click()
  cy.contains(afterTaste).click()
  cy.contains(alcohol).click()
}

const stepToConclusionForm = () => {
  cy.visit('/tasting_sheets/new')
  cy.stepToTasteForm()
  cy.checkTasteForm(tasteTestData)
  cy.contains('次へ').click()
}

const checkConclusionForm = ({ evaluation, optimumTemperature, glass, vintage, country, grape }: Conclusion) => {
  cy.contains(evaluation).click()
  cy.contains(optimumTemperature).click()
  cy.contains(glass).click()
  cy.get('select#vintage').select(vintage)
  cy.get('select#country').select(country)
  cy.get('select#grape').select(grape)
}

const stepToConfirmationTab = () => {
  cy.stepToConclusionForm()
  cy.checkConclusionForm(conclusionTestData)
  cy.contains('回答確認').click()
}

Cypress.Commands.add('inputSettingForm', inputSettingForm)
Cypress.Commands.add('stepToAppearanceForm', stepToAppearanceForm)
Cypress.Commands.add('checkAppearanceForm', checkAppearanceForm)
Cypress.Commands.add('stepToFlavorForm', stepToFlavorForm)
Cypress.Commands.add('checkFlavorForm', checkFlavorForm)
Cypress.Commands.add('stepToTasteForm', stepToTasteForm)
Cypress.Commands.add('checkTasteForm', checkTasteForm)
Cypress.Commands.add('stepToConclusionForm', stepToConclusionForm)
Cypress.Commands.add('checkConclusionForm', checkConclusionForm)
Cypress.Commands.add('stepToConfirmationTab', stepToConfirmationTab)
