/**
 * cart.js
 * ตะกร้าสินค้าเก็บไว้ใน localStorage (ฝั่ง browser ของลูกค้าเอง)
 * โครงสร้างแต่ละรายการ:
 * { cart_item_id, item_id, item_name, unit_price, quantity, selected_options: [{group_name, choice_name, extra_price}], subtotal }
 */

function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
}

function recalcSubtotal(entry) {
  const optsTotal = (entry.selected_options || []).reduce((s, o) => s + Number(o.extra_price || 0), 0);
  entry.subtotal = (Number(entry.unit_price) + optsTotal) * entry.quantity;
}

function addToCart(entry) {
  recalcSubtotal(entry);
  const cart = getCart();
  cart.push(entry);
  saveCart(cart);
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateCartItemQty(index, quantity) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].quantity = Math.max(1, quantity);
    recalcSubtotal(cart[index]);
    saveCart(cart);
  }
}

function cartTotal() {
  return getCart().reduce((s, e) => s + Number(e.subtotal), 0);
}

function clearCart() {
  localStorage.removeItem('cart');
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const count = getCart().reduce((s, e) => s + e.quantity, 0);
  if (count > 0) {
    badge.textContent = count;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}