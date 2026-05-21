describe("Home Page", () => {

  it("should load products", () => {

    cy.visit("http://localhost:5173");

    cy.contains("View Details");

  });

});