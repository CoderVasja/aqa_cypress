describe('registration and login', () => {

    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.get('.header_signin').click();
      
    })

    it.only('login with valid data', () => { 
        cy.get('#signinEmail').type('grauppayalloiyu-5117@yopmail.com');
        cy.get('#signinPassword').type('Test12345678',{ sensitive: true });
        cy.get('button').contains('Login').click();
        cy.get('h1').should('have.text', 'Garage');
    })
    
})