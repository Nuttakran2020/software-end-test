describe('Petstore Login Tests', () => {
  
  it('tc-01: Login สำเร็จด้วยข้อมูลที่ถูกต้อง', () => {
    cy.visit('https://petstore.octoperf.com/actions/Account.action?signonForm=');

    // กรอก Username และ Password ถูกต้อง
    cy.get('[name="username"]').type('j2ee');
    cy.get('[name="password"]').clear().type('j2ee');

    // คลิกปุ่ม Login
    cy.get('[name="signon"]').click();

    // ตรวจสอบว่าล็อกอินสำเร็จ (มีข้อความ "Welcome")
    cy.contains('Welcome').should('be.visible');
  });

  it('tc-02: Login ล้มเหลวเมื่อชื่อผู้ใช้ไม่ถูกต้อง', () => {
    cy.visit('https://petstore.octoperf.com/actions/Account.action?signonForm=');

    // กรอก Username ผิด และ Password ถูกต้อง
    cy.get('[name="username"]').type('wrong_user');
    cy.get('[name="password"]').clear().type('j2ee');

    // คลิกปุ่ม Login
    cy.get('[name="signon"]').click();

    // ตรวจสอบว่ามีข้อความแสดงข้อผิดพลาด
    cy.contains('Invalid username or password.').should('be.visible');
  });

  it('tc-03: Login ล้มเหลวเมื่อรหัสผ่านไม่ถูกต้อง', () => {
    cy.visit('https://petstore.octoperf.com/actions/Account.action?signonForm=');

    // กรอก Username ถูกต้อง และ Password ผิด
    cy.get('[name="username"]').type('j2ee');
    cy.get('[name="password"]').clear().type('wrong_password');

    // คลิกปุ่ม Login
    cy.get('[name="signon"]').click();

    // ตรวจสอบว่ามีข้อความแสดงข้อผิดพลาด
    cy.contains('Invalid username or password.').should('be.visible');
  });
});
