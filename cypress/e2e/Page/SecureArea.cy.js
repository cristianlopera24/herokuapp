/**
 * Locators Home page Demo Casino
 */
class SecureArea {
    elements = {
      Message: () => cy.get('.subheader').should('have.text', 'Welcome to the Secure Area. When you are done click logout below.'),
      LogoutButton: () => cy.get('.icon-2x')
    };

    /**
     * See if the green message is equals
     */
    ValidationMessage() {
        this.elements.Message();
      }
  
    /**
     * See if the button (Logout) is visible
     */
    ValidationLogoutButton() {
      this.elements.LogoutButton().should("be.visible");
    }

    /**
     * Logout method
     */
    Logout() {
      this.elements.LogoutButton().click();
    }
  
    
  }
  module.exports = new SecureArea();