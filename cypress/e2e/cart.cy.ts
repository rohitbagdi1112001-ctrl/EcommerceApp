describe("Cart", () => {

  it("should add product to cart", () => {

    cy.visit("http://localhost:5173");

    cy.contains("View Details").first().click();

    cy.contains("Add To Cart").click();

    cy.visit("http://localhost:5173/cart");

    cy.contains("Total Items: 1");

  });

});