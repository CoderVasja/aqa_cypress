describe('registration and login', () => {

    beforeEach(() => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.get('.header_signin').click();
        cy.get('button').contains('Registration').click(); 
    })

    it('registration with invalid email', () => {
      
       cy.get('#signupName').type('T');
       cy.get('#signupLastName').type('t');
       cy.get('#signupEmail').type('1');
       cy.get('#signupPassword').type('1'); 
       cy.get('#signupRepeatPassword').type('1');
       cy.get('label').contains('Re-enter password').click(); 

       cy.get('#signupName').closest('.form-group').find('.invalid-feedback').within(() => {
       cy.get('p').should('contain', 'Name has to be from 2 to 20 characters long');

      });

      cy.get('#signupLastName').closest('.form-group').find('.invalid-feedback').within(() => {
        cy.get('p').should('contain', 'Last name has to be from 2 to 20 characters long');
      });
  
      
      cy.get('#signupEmail').closest('.form-group').find('.invalid-feedback').within(() => {
        cy.get('p').should('contain', 'Email is incorrect');
      });
  
      
      cy.get('#signupPassword').closest('.form-group').find('.invalid-feedback').within(() => {
        cy.get('p').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
      });
  
      
      cy.get('#signupRepeatPassword').closest('.form-group').find('.invalid-feedback').within(() => {
        cy.get('p').should('contain', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
      });
      
    })
    
    it('registration with valid data', () => { 
        cy.get('#signupName').type('Test');
        cy.get('#signupLastName').type('Test');
        cy.get('#signupEmail').type('grauppayalloiyu-5117@yopmail.com');
        cy.get('#signupPassword').type('Test12345678');
        cy.get('#signupRepeatPassword').type('Test12345678');
        cy.get('button').contains('Register').click();
    })

  
    
})