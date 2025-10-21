/// <reference types = "cypress" />

class GaragePage{

    get AddCarButton(){
     return cy.get('button').contains('Add car')
    }
 
    get AddCarMileage(){
     return cy.get('#addCarMileage')
    }
 
    get ConfirmButton(){
     return  cy.get('.modal-footer button').eq(1)
    }
 
    AddNewCar(){
    this.AddCarButton.click();
    this.AddCarMileage.type('12');
    this.ConfirmButton.click();
    }
 }
 
 export default new GaragePage();