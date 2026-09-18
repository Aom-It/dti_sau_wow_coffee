/**
 * api.js
 * ตัวช่วยกลางสำหรับเรียก GAS Web App API จาก Frontend
 *
 * ส่งข้อมูลแบบ form-urlencoded (URLSearchParams) เพื่อเลี่ยงปัญหา CORS
 * ตอน GAS redirect ไปที่ script.googleusercontent.com (บทเรียนจากโปรเจกต์ก่อน)
 */

const API_URL = 'https://script.google.com/macros/s/AKfycbx2RoIekp8YVSfV-zLQHzehgrPD4EAdF5xLJN-1BTnYaDBpoKQumPXRHTnt3oJgih-u/exec';

async function callApi(action, data = {}, withToken = false) {
  const payload = { action: action, data: JSON.stringify(data) };

  if (withToken) {
    const token = localStorage.getItem('token');
    if (!token) {
      return { success: false, message: 'กรุณาเข้าสู่ระบบ' };
    }
    payload.token = token;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: new URLSearchParams(payload)
    });

    if (!response.ok) {
      return { success: false, message: 'เชื่อมต่อเซิร์ฟเวอร์ไม่สำเร็จ (HTTP ' + response.status + ')' };
    }

    return await response.json();
  } catch (err) {
    return { success: false, message: 'เกิดข้อผิดพลาดในการเชื่อมต่อ: ' + err.message };
  }
}

function saveSession(token, user) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}

function clearSession() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

function getCurrentUser() {
  const raw = localStorage.getItem('user');
  return raw ? JSON.parse(raw) : null;
}

// การ์ดกันหน้า: ถ้าไม่มี token ให้เด้งไปหน้า login
function requireAuth() {
  if (!localStorage.getItem('token')) {
    window.location.href = 'login.html';
  }
}

// การ์ดกันหน้าเฉพาะ admin: ถ้าไม่ใช่ admin ให้เด้งกลับหน้าแรก
function requireAdmin() {
  requireAuth();
  const user = getCurrentUser();
  if (!user || user.role !== 'admin') {
    window.location.href = 'index.html';
  }
}