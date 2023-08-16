const HomePageCy = require("../Page/HomePage.cy");
const SecureAreaCy = require("../Page/SecureArea.cy");

const emailRegistered = "tomsmith";
const passwordUserRegistered = "SuperSecretPassword!";

/**
 * Describe to group test cases
 */
describe('template spec', () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  /**
   * function to sign up
   */
  it('User Sign In', () => {
    HomePageCy.GotItValidationTitle();
    HomePageCy.TypeUsername(emailRegistered);
    HomePageCy.TypePassword(passwordUserRegistered);
    HomePageCy.ClickSigninButton();
    SecureAreaCy.ValidationMessage();
  })

  /**
   * function to logout
   */
  it('"User Logout', () => {
    HomePageCy.TypeUsername(emailRegistered);
    HomePageCy.TypePassword(passwordUserRegistered);
    HomePageCy.ClickSigninButton();
    SecureAreaCy.ValidationMessage();
    SecureAreaCy.ValidationLogoutButton();
    SecureAreaCy.Logout();
    HomePageCy.ValidateMessage();
  })
})