describe("Product Detail", () => {

  it("should open product page", () => {

    cy.visit("http://localhost:5173");

    cy.contains("View Details").first().click();

    cy.contains("Add To Cart");

  });

});