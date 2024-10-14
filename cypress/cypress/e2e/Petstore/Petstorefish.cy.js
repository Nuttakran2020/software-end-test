describe('Petstore Angelfish Product Tests', () => {

  beforeEach(() => {
    // เปิดหน้า Fish และคลิกลิงก์ Angelfish
    cy.visit('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH');
    cy.contains('Angelfish').click();
  });

  it('tc-01: ตรวจสอบรายละเอียดสินค้าของ Angelfish', () => {

    // ตรวจสอบว่ารายการ Large Angelfish และ Small Angelfish ปรากฏ
    cy.get('tbody > :nth-child(2) > :nth-child(1) > a').should('be.visible');

    // ตรวจสอบราคา $16.50
    cy.contains('$16.50').should('be.visible');
  });


});
