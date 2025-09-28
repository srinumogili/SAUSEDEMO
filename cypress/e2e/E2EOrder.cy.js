/// <reference types="cypress" />

describe('Verify the end to end Sause demo order', () => {
beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

  it('Verify the user is able to place the Sauce order', () => {
  cy.visit('https://www.saucedemo.com/v1/')
  
  // Login
  cy.get('#user-name').type('standard_user')
  cy.get('#password').type('secret_sauce')
  cy.get('#login-button').click()
  
  // Check products page
  cy.get('.product_label').should('be.visible')
  
  // Click the Sauce Labs Backpack product link
  cy.get("a[id='item_4_title_link'] div.inventory_item_name").click()
  
  // Click "Add to cart" button (fix selector)
  cy.get('button.btn_primary.btn_inventory').click()
  
  // Click shopping cart icon
  cy.get('.shopping_cart_link').click()
  
  // Click checkout button
  cy.get('.btn_action.checkout_button').click()
  
  // Verify checkout info page is visible
  cy.contains('Checkout: Your Information').should('be.visible')
  
  // Fill in checkout form - fix selectors and assertions
  cy.get('#first-name').type('dummy').should('have.value', 'dummy')
  cy.get('#last-name').type('dummy').should('have.value', 'dummy')
  cy.get('#postal-code').type('34567').should('have.value', '34567')
  
  // Click continue button
  cy.get('.btn_primary.cart_button').click()
  
  // Verify checkout overview page is visible
  cy.contains('Checkout: Overview').should('be.visible')
  
  // Click finish button (fix selector)
  cy.get('.btn_action.cart_button').click()
  
  // Verify order confirmation text
  cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible')
})
})