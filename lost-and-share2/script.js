document.addEventListener("DOMContentLoaded", () => {
  // ฟังก์ชันแสดงรายการข้อมูล
  function renderList(formId, listId, storageKey) {
    const form = document.getElementById(formId);
    const list = document.getElementById(listId);
    const data = JSON.parse(localStorage.getItem(storageKey)) || [];

    const updateList = () => {
      list.innerHTML = data.map(item => `
        <div style="background:#fff;padding:10px;margin:8px 0;border-radius:8px;">
          <strong>${item.name}</strong><br>
          ${item.detail}<br>
          📍 ${item.place} | 📅 ${item.date} <br>
          ☎️ ${item.contact}
        </div>
      `).join("");
    };

    if (form) {
      form.addEventListener("submit", e => {
        e.preventDefault();
        const inputs = form.querySelectorAll("input, textarea");
        const [name, detail, place, date, contact] = [...inputs].map(i => i.value);
        data.push({ name, detail, place, date, contact });
        localStorage.setItem(storageKey, JSON.s...