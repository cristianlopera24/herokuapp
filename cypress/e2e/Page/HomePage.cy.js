/**
 * Locators Home page Demo Casino
 */
class HomePage {
    elements = {
      GotItTitle: () => cy.get('h2').should("be.visible"),
      UsernameField: () => cy.get('#username'),
      PasswordField: () => cy.get('#password'),
      SignInButton: () => cy.get('.fa'),
      SuccessfulMessage: () => cy.get('#flash')
    };
  
    /**
     * See if the title is visible
     */
    GotItValidationTitle() {
      this.elements.GotItTitle();
    }
  
    /**
     * type the username
     */
    TypeUsername(username) {
      this.elements.UsernameField().type(username);
    }
    
    /**
     * type the password
     */
    TypePassword(TypePassword) {
        this.elements.PasswordField().type(TypePassword);
    }

    /**
     * Click on Sign in button
     */
    ClickSigninButton() {
        this.elements.SignInButton().click();
    }

    /**
     * Click on Sign in button
     */
    ValidateMessage() {
        this.elements.SuccessfulMessage().should('include.text', 'logged out');
    }
  }
  module.exports = new HomePage();