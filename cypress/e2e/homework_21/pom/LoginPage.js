/// <reference types = "cypress" />

class LoginPage{

   get userEmailField(){
    return cy.get('#signinEmail')
   }

   get userPasswordField(){
    return cy.get('#signinPassword')
   }

   get loginButton(){
    return cy.get('button').contains('Login')
   }

   Login(userEmail, userPassword){
    this.userEmailField.type(userEmail);
    this.userPasswordField.type(userPassword,{ sensitive: true });
    this.loginButton.click();
   }
}

export default new LoginPage();