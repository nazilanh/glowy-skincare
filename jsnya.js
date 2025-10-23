// Toggle menu untuk mobile
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}

// Validasi form kontak
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const pesan = document.getElementById('pesan').value.trim();

    if (!nama || !email || !pesan) {
      alert('Semua kolom harus diisi!');
    } else {
      alert(`Terima kasih, ${nama}! Pesanmu telah terkirim 💖`);
      form.reset();
    }
  });
}
