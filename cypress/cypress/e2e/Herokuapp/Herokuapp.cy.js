describe('ทดสอบหน้าเข้าสู่ระบบ The Internet Herokuapp', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login'); // เปิดหน้าเว็บ
  });

  it('ล็อกอินสำเร็จ', () => {
    cy.get('#username').type('tomsmith'); // กรอกชื่อผู้ใช้ถูกต้อง
    cy.get('#password').type('SuperSecretPassword!'); // กรอกรหัสผ่านถูกต้อง
    cy.get('.radius').click(); // คลิกปุ่ม Login

    // ตรวจสอบข้อความล็อกอินสำเร็จ
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('ชื่อผู้ใช้ไม่ถูกต้อง', () => {
    cy.get('#username').type('Nuttakran'); // กรอกชื่อผู้ใช้ผิด
    cy.get('#password').type('SuperSecretPassword!'); // กรอกรหัสผ่านถูกต้อง
    cy.get('.radius').click(); // คลิกปุ่ม Login

    // ตรวจสอบข้อความข้อผิดพลาด
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('รหัสผ่านไม่ถูกต้อง', () => {
    cy.get('#username').type('tomsmith'); // กรอกชื่อผู้ใช้ถูกต้อง
    cy.get('#password').type('wrongpassword'); // กรอกรหัสผ่านผิด
    cy.get('.radius').click(); // คลิกปุ่ม Login

    // ตรวจสอบข้อความข้อผิดพลาด
    cy.get('#flash').should('contain', 'Your password is invalid!');
  });
});
