/// <reference types="cypress" />

class FuelPage {

  get AddExpenseButton() {
    return cy.get('.car-list .car-item .car_add-expense').eq(0);
  }

  get AddExpenseMileage() {
    return cy.get('#addExpenseMileage');
  }

  get AddExpenseLiters() {
    return cy.get('#addExpenseLiters');
  }

       get AddExpenseTotalCost(){
        return cy.get('#addExpenseTotalCost')
       }
 
    get ConfirmButton(){
     return cy.get('.modal-footer button').eq(1)
    }
 
    AddExpense(){
    this.AddExpenseButton.click();
    this.AddExpenseMileage.clear().type('20');
    this.AddExpenseLiters.type('14');
    this.AddExpenseTotalCost.type('14');
    this.ConfirmButton.click();
    }
 }
 
 export default new FuelPage();