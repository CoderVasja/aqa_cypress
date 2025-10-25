/// <reference types = "cypress" />

class GaragePage {

  get AddCarButton() {
    return cy.get('button').contains('Add car')
  }

  get AddCarMileage() {
    return cy.get('#addCarMileage')
  }

  get ConfirmButton() {
    return cy.get('.modal-footer button').eq(1)
  }

  get ExpensesValue(){
    return cy.get('.car-item')
    .first()
    .find('input[name="miles"]')
  }

  AddNewCar() {
    this.AddCarButton.click();
    this.AddCarMileage.type('12');
    this.ConfirmButton.click();
  }

  InterceptCarId() {
    cy.intercept('POST', '**/api/cars').as('getCar');
  }

  InterceptAllCars() {
    cy.intercept('GET', '**/api/cars').as('getCars');
  }

  GetCarId() {
    cy.wait('@getCar').then((interception) => {

      expect(interception.response.statusCode).to.be.oneOf([200, 201]);


      const body = interception.response.body;
      cy.log('Response body:', JSON.stringify(body));


      expect(body).to.have.property('status', 'ok');
      expect(body).to.have.property('data');

      const carId = interception.response.body.data.id;
   
      cy.writeFile('cypress/fixtures/createdCar.json', { carId });
    
      expect(carId).to.be.a('number');

    });

  }


  GetAllCars() {
    cy.readFile('cypress/fixtures/createdCar.json').then((data) => {
      const carId = data.carId;

      cy.wait('@getCars').then((interception) => {
        const cars = interception.response.body.data;
        const foundCar = cars.find(car => car.id === carId);

        expect(foundCar, `Car with ID ${carId} not found`).to.exist;
      });
    });
  }


  AddExpensesToCar() {
    cy.readFile('cypress/fixtures/createdCar.json').then(({ carId}) => {
      const reportedAt = new Date().toISOString().split('T')[0];
      cy.request({
        method: 'POST',
        url: 'https://qauto.forstudy.space/api/expenses', 
        body: {
          carId,
          reportedAt,
          mileage: 1998,
          liters: 228,
          totalCost: 98
        },
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body.status).to.eq('ok');
      });
    });
  }

  CheckExpenses(){
    this.ExpensesValue.should('have.value', '1998');
  }
}

export default new GaragePage();