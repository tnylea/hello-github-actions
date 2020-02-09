describe('My First Test', function() {
    it('Visits our website and sees our message', function() {
      cy.visit('http://localhost:3000')
  
      cy.contains('Hello Github Actions!');
    })
})