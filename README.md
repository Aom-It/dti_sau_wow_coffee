# ☕ DTI Coffee — Online Coffee Shop Web Application

*ระบบเว็บแอปพลิเคชันร้านกาแฟออนไลน์ (Version 2.4) รองรับการเลือกซื้อสินค้า จัดการตะกร้า ระบบสมาชิก และการจัดการหลังบ้านสำหรับผู้ดูแลระบบ*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Version](https://img.shields.io/badge/Version-2.4-6F4E37?style=for-the-badge)

---

## ✨ ฟีเจอร์หลักของระบบ (Key Features)

| ส่วนงาน (Module) | รายละเอียดการทำงาน |
| :--- | :--- |
| 🏠 **หน้าหลัก & เมนู (`index.html`)** | แสดงรายการเครื่องดื่มกาแฟ โปรโมชัน และเมนูแนะนำของทางร้าน |
| 🔐 **ระบบสมาชิก (`Login.html`, `Register.html`)** | รองรับการสมัครสมาชิกใหม่และการเข้าสู่ระบบสำหรับลูกค้า |
| 🛒 **ตะกร้าสินค้า (`Cart.html`)** | เพิ่ม/ลบรายการเครื่องดื่ม ปรับจำนวน และคำนวณยอดรวมอัตโนมัติ |
| 📦 **ประวัติการสั่งซื้อ (`Orders.html`)** | ตรวจสอบสถานะและรายการคำสั่งซื้อย้อนหลัง |
| 🛠️ **ระบบหลังบ้าน (`admin/`)** | หน้าจัดการข้อมูลสินค้า เมนู และคำสั่งซื้อสำหรับแอดมิน |

## 📂 โครงสร้างไฟล์ในโปรเจกต์ (Project Structure)

```text
├── admin/               # หน้าเว็บและสคริปต์สำหรับผู้ดูแลระบบ (Admin Dashboard)
├── assets/              # ไฟล์ CSS, JavaScript, รูปภาพเมนู และไอคอนต่างๆ
├── index.html           # หน้าหลักของร้าน DTI Coffee
├── Login.html           # หน้าเข้าสู่ระบบ
├── Register.html        # หน้าสมัครสมาชิก
├── Cart.html            # หน้าตะกร้าสินค้าและการชำระเงิน
└── Orders.html          # หน้าแสดงรายการคำสั่งซื้อ
