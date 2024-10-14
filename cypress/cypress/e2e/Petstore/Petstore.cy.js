describe('Petstore Dashboard Functional Tests', () => {

  beforeEach(() => {
    // ทำการ Login ก่อนการทดสอบทุกครั้ง
    cy.visit('https://petstore.octoperf.com/actions/Account.action?signonForm=');
    cy.get('[name="username"]').type('j2ee');
    cy.get('[name="password"]').clear().type('j2ee');
    cy.get('[name="signon"]').click();
    
    // ตรวจสอบว่า Login สำเร็จ (Welcome Message ปรากฏ)
    cy.contains('Welcome').should('be.visible');
  });
  describe('Petstore Fish Category Tests', () => {

    beforeEach(() => {
      // เปิดหน้า Fish โดยตรงก่อนการทดสอบแต่ละครั้ง
      cy.visit('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=FISH');
    });
  
    it('tc-01: ตรวจสอบว่าหน้า Fish ถูกโหลดสำเร็จ', () => {
      // ตรวจสอบว่า URL ตรงกับหน้า Fish
      cy.url().should('include', 'categoryId=FISH');
  
      // ตรวจสอบว่ามีรายการหมวดหมู่ปลา
      // ตรวจสอบว่ามีรายการปลาแต่ละตัวแสดงในหน้า
    cy.contains('FI-SW-01').should('be.visible');
    cy.contains('Angelfish').should('be.visible');
    cy.contains('FI-SW-02').should('be.visible');
    cy.contains('Tiger Shark').should('be.visible');
    cy.contains('FI-FW-01').should('be.visible');
    cy.contains('Koi').should('be.visible');
    cy.contains('FI-FW-02').should('be.visible');
    cy.contains('Goldfish').should('be.visible');
    });

    it('tc-01: ตรวจสอบรายละเอียดสินค้าของ Angelfish', () => {

      // ตรวจสอบว่ารายการ Large Angelfish และ Small Angelfish ปรากฏ
      cy.get('tbody > :nth-child(2) > :nth-child(1) > a').should('be.visible');
  

    });
  });
  
 


});
