import LoginPage from "./pom/LoginPage";
import GaragePage from "./pom/GaragePage";

import FuelPage from "./pom/FuelPage";

describe('registration and login', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('.header_signin').click();
      
    })

    it.only('Login', () => { 
        // cy.get('#signinEmail').type(Cypress.env('USER_EMAIL'));
        // cy.get('#signinPassword').type(Cypress.env('USER_PASSWORD'),{ sensitive: true });
        // cy.get('button').contains('Login').click();
        LoginPage.Login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

        // cy.get('button').contains('Add car').click();
        // cy.get('#addCarMileage').type('12');
        // cy.get('.modal-footer button').eq(1).click();
        GaragePage.AddNewCar();
        FuelPage.AddExpense()

        // cy.get('.car-list .car-item .car_add-expense').eq(0).click();
        // cy.get('#addExpenseMileage').clear();
        // cy.get('#addExpenseMileage').type('20');
        // cy.get('#addExpenseLiters').type('14');
        // cy.get('#addExpenseTotalCost').type('14');
        // cy.get('.modal-footer button').eq(1).click();
    })
})