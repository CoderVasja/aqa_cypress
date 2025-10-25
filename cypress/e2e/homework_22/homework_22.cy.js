import LoginPage from "./pom/LoginPage";
import GaragePage from "./pom/GaragePage";

import FuelPage from "./pom/FuelPage";

describe('registration and login', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('.header_signin').click();

    })

    it('Create Car', () => {

        GaragePage.InterceptCarId();

        LoginPage.Login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

        GaragePage.AddNewCar();

        GaragePage.GetCarId()
    })

    it('Get All Cars', () => {

        GaragePage.InterceptAllCars();

        LoginPage.Login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))

        GaragePage.GetAllCars();
    })

    it('AddExpensesToCar', () => {
        cy.session('user', () => {
            cy.visit('/');
            cy.get('.header_signin').click();
            LoginPage.Login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'));
            cy.url().should('include', '/panel/garage');
            cy.get('h1').should('contain', 'Garage');
        }).then(() => {

            GaragePage.AddExpensesToCar();
        });
    });

    it('Check Expenses', () => {
        LoginPage.Login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'));
        GaragePage.CheckExpenses();

    })
})  