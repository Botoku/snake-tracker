import HeroHome from "@/components/HeroHome";

describe("MainTest.cy.tsx", () => {
  it("playground", () => {
    // cy.mount()
  });
  it("should have a heading 'Home Hero'", () => {
    cy.mount(<HeroHome />);
    cy.get("p").contains("HeroHome");
  });

  it("should have input with placeholder", () => {
    cy.mount(<HeroHome />)
    cy.get('input#username').should('have.')
  })
});
