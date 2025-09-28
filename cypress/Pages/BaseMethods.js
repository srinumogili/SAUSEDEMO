/// <reference types ="cypress" />
import SauseLocators from "../fixtures/sauseLocators.json";
import data from "../fixtures/data.json";


export  class BaseMethods  {


endtoendorder(){
this.AssertProductlable();
this.selectTheProduct();
this.Addtocart();
this.AssertChecout();
this.enterdetails();
this.completetheorder();
}

AssertProductlable(){
cy.get(SauseLocators.Productlable).should('be.visible');
}

selectTheProduct() {
  cy.get('.inventory_item').should('exist'); 
  cy.get('.inventory_item').each(($el) => {
  const priceText = $el.find('.inventory_item_price').text();
  const price = parseFloat(priceText.replace('$', ''));
  const productName = $el.find('.inventory_item_name').text();
  if (price < 20) {
  cy.log(`Selected product: ${productName} - $${price}`);
  cy.wrap($el).find('.btn_primary.btn_inventory').click();
  }
});

}

Addtocart(){
cy.get(SauseLocators.shoopingCart).click()
cy.get(SauseLocators.checkoutbtn).click()
}
AssertChecout(){
cy.contains(SauseLocators.checoutMessage).should('be.visible')
}

enterdetails(){
const randomfirstname=`First${Math.floor(Math.random()* 1000)}`;
const randomsecondname=`Second${Math.floor(Math.random()* 1000)}`;
const randomzipcode =`zipcode${Math.floor(Math.random()*90000)}`;
cy.get(SauseLocators.txtfirstname).type(randomfirstname).should('be.visible')
cy.get(SauseLocators.txtsecondtname).type(randomsecondname).should('be.visible')
cy.get(SauseLocators.txtZipcode).type(randomzipcode).should('be.visible')
}
completetheorder(){
cy.get(SauseLocators.continuebtn).click()
cy.contains(SauseLocators.checkoutoverview).should('contain','Checkout: Overview')
cy.contains(SauseLocators.finish).scrollIntoView().click()
cy.contains(SauseLocators.ThankyouMessage).should('have.text','THANK YOU FOR YOUR ORDER');
cy.log('Test is completed')
}

}