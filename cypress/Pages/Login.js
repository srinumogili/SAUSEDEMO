import SauseLocators from "../fixtures/sauseLocators.json";

export class Login {
  Login() {
    
    cy.fixture('data.json').then((data) => {
      const usernames = data.usernames; 
      const randomUsername = usernames[Math.floor(Math.random() * usernames.length)];
      const password = data.Password; 

      cy.visit('https://www.saucedemo.com/v1/');
      cy.get(SauseLocators.txtusername).type(randomUsername);
      cy.log(`What is the username, ${randomUsername}`)
      cy.get(SauseLocators.txtPassword).type(password);
      cy.get(SauseLocators.loginbtn).click();
    });
  }
}
