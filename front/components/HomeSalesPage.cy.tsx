import HomeSalesPage from "./general-ui/HomeSalesPage";

describe("Home sales page tests", () => {
  beforeEach(() => {
    cy.mount(<HomeSalesPage />);
  });
  it("shows hero text", () => {
    cy.contains("Stop guessing when your snake last ate.").should("be.visible");
  });
  it("sends visitor to sigup", ()=> {
    cy.contains("a", "Get Started").click();
    cy.url().should('include', '/auth/signup')
  })
});
