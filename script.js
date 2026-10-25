// ============================================
// PERPUSTAKAAN DIGITAL — DATA & STATE
// ============================================

// Copy hero image to accessible path
const HERO_IMG_PATH = ''; // Will use emoji fallback

// ---- Initial Data ----
let books = [
  { id: 'B001', title: 'Laskar Pelangi', author: 'Andrea Hirata', category: 'Fiksi', year: 2005, stock: 3, available: 2, cover: '📖', color: '#6366f1' },
  { id: 'B002', title: 'Bumi Manusia', author: 'Pramoedya Ananta Toer', category: 'Fiksi Sejarah', year: 1980, stock: 2, available: 2, cover: '📚', color: '#0ea5e9' },
  { id: 'B003', title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiksi', year: 2011, stock: 4, available: 1, cover: '🧠', color: '#f59e0b' },
  { id: 'B004', title: 'Atomic Habits', author: 'James Clear', category: 'Self-Help', year: 2018, stock: 5, available: 3, cover: '⚛️', color: '#10b981' },
  { id: 'B005', title: 'Harry Potter & Batu Bertuah', author: 'J.K. Rowling', category: 'Fantasi', year: 1997, stock: 3, available: 0, cover: '🧙', color: '#8b5cf6' },
  { id: 'B006', title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', year: 1965, stock: 2, available: 2, cover: '🏜️', color: '#d97706' },
  { id: 'B007', title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiksi', year: 1988, stock: 6, available: 4, cover: '✨', color: '#ec4899' },
  { id: 'B008', title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', category: 'Keuangan', year: 1997, stock: 3, available: 2, cover: '💰', color: '#14b8a6' },
  { id: 'B009', title: 'Thinking, Fast & Slow', author: 'Daniel Kahneman', category: 'Psikologi', year: 2011, stock: 2, available: 1, cover: '🔍', color: '#f43f5e' },
  { id: 'B010', title: 'Clean Code', author: 'Robert C. Martin', category: 'Teknologi', year: 2008, stock: 4, available: 3, cover: '💻', color: '#6366f1' },
  { id: 'B011', title: 'Filosofi Teras', author: 'Henry Manampiring', category: 'Self-Help', year: 2018, stock: 5, available: 4, cover: '🌿', color: '#10b981' },
  { id: 'B012', title: '1984', author: 'George Orwell', category: 'Fiksi', year: 1949, stock: 3, available: 3, cover: '👁️', color: '#64748b' },
];

let members = [
  { id: 'M001', name: 'Andi Pratama', email: 'andi@email.com', phone: '081234567890', joinDate: '2025-01-15', totalBorrow: 12 },
  { id: 'M002', name: 'Siti Rahayu', email: 'siti@email.com', phone: '082345678901', joinDate: '2025-02-20', totalBorrow: 8 },
  { id: 'M003', name: 'Budi Santoso', email: 'budi@email.com', phone: '083456789012', joinDate: '2025-03-10', totalBorrow: 15 },
  { id: 'M004', name: 'Dewi Kusuma', email: 'dewi@email.com', phone: '084567890123', joinDate: '2025-04-05', totalBorrow: 5 },
  { id: 'M005', name: 'Rizky Fauzan', email: 'rizky@email.com', phone: '085678901234', joinDate: '2025-05-18', totalBorrow: 20 },
  { id: 'M006', name: 'Nur Aini', email: 'nur@email.com', phone: '086789012345', joinDate: '2025-06-22', totalBorrow: 3 },
];

let borrowings = [
  { id: 'P001', bookId: 'B005', memberId: 'M001', borrowDate: '2026-10-10', dueDate: '2026-10-24', returnDate: null, status: 'terlambat' },
  { id: 'P002', bookId: 'B003', memberId: 'M003', borrowDate: '2026-10-18', dueDate: '2026-11-01', returnDate: null, status: 'aktif' },
  { id: 'P003', bookId: 'B007', memberId: 'M005', borrowDate: '2026-10-20', dueDate: '2026-11-03', returnDate: null, status: 'aktif' },
  { id: 'P004', bookId: 'B001', memberId: 'M002', borrowDate: '2026-09-15', dueDate: '2026-09-29', returnDate: '2026-09-28', status: 'kembali' },
  { id: 'P005', bookId: 'B004', memberId: 'M004', borrowDate: '2026-10-15', dueDate: '2026-10-29', returnDate: null, status: 'aktif' },
];

let activityLog = [
  { icon: '📤', msg: '<strong>Andi Pratama</strong> meminjam <strong>Harry Potter & Batu Bertuah</strong>', time: '5 menit lalu', color: '#7c5cfc' },
  { icon: '📥', msg: '<strong>Siti Rahayu</strong> mengembalikan <strong>Laskar Pelangi</strong>', time: '1 jam lalu', color: '#00d4aa' },
  { icon: '👤', msg: 'Anggota baru <strong>Nur Aini</strong> terdaftar', time: '3 jam lalu', color: '#ff5e8a' },
  { icon: '📤', msg: '<strong>Budi Santoso</strong> meminjam <strong>Sapiens</strong>', time: 'Kemarin', color: '#ffb347' },
  { icon: '📥', msg: '<strong>Rizky Fauzan</strong> mengembalikan <strong>The Alchemist</strong>', time: 'Kemarin', color: '#00d4aa' },
];

// ---- State ----
let currentPage = 'dashboard';
let bookFilter  = 'semua';
let borrowFilter = 'semua';
let editingBook = null;
let editingMember = null;
let confirmCallback = null;

// ============================================
// NAVIGATION
// ============================================
function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));

  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    // Re-trigger animation
    target.querySelectorAll(':scope > *').forEach(el => {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = '';
    });
  }

  const navEl = document.querySelector(`[data-page="${page}"]`);
  if (navEl) navEl.classList.add('active');

  // Render page-specific content
  if (page === 'dashboard')  renderDashboard();
  if (page === 'buku')       renderBooks();
  if (page === 'peminjaman') renderBorrowings();
  if (page === 'anggota')    renderMembers();
  if (page === 'laporan')    renderReport();
}

// ============================================
// DASHBOARD
// ============================================
function renderDashboard() {
  updateStats();
  renderActivityFeed();
  renderRecentBorrowings();
}

function updateStats() {
  const totalBooks    = books.reduce((s, b) => s + b.stock, 0);
  const totalAvail    = books.reduce((s, b) => s + b.available, 0);
  const activeBorrow  = borrowings.filter(b => b.status === 'aktif' || b.status === 'terlambat').length;
  const overdueCount  = borrowings.filter(b => b.status === 'terlambat').length;
  const totalMembers  = members.length;

  setEl('stat-books', totalBooks);
  setEl('stat-avail', totalAvail);
  setEl('stat-borrow', activeBorrow);
  setEl('stat-members', totalMembers);

  // Overdue badge
  const badge = document.getElementById('overdue-badge');
  if (badge) badge.textContent = overdueCount;
  badge.style.display = overdueCount > 0 ? '' : 'none';

  // Progress
  const pct = totalBooks > 0 ? Math.round((totalAvail / totalBooks) * 100) : 0;
  const bar = document.getElementById('avail-bar');
  if (bar) bar.style.width = pct + '%';
  setEl('avail-pct', pct + '%');
}

function renderActivityFeed() {
  const el = document.getElementById('activity-feed');
  if (!el) return;
  el.innerHTML = activityLog.map(a => `
    <div class="activity-item">
      <div class="activity-dot" style="background:${a.color}22; color:${a.color}">${a.icon}</div>
      <div class="activity-info">
        <div class="activity-text">${a.msg}</div>
        <div class="activity-time">${a.time}</div>
      </div>
    </div>`).join('');
}

function renderRecentBorrowings() {
  const el = document.getElementById('recent-borrowings');
  if (!el) return;
  const recent = [...borrowings].slice(-5).reverse();
  el.innerHTML = recent.map(b => {
    const book   = books.find(x => x.id === b.bookId);
    const member = members.find(x => x.id === b.memberId);
    const st = statusBadge(b.status);
    return `<tr>
      <td class="td-bold">${book ? book.title : b.bookId}</td>
      <td>${member ? member.name : b.memberId}</td>
      <td>${formatDate(b.borrowDate)}</td>
      <td>${formatDate(b.dueDate)}</td>
      <td>${st}</td>
    </tr>`;
  }).join('');
}

// ============================================
// BOOKS
// ============================================
function renderBooks() {
  const search = document.getElementById('search-book')?.value.toLowerCase() || '';
  const el = document.getElementById('book-grid');
  if (!el) return;

  let filtered = books.filter(b => {
    const matchSearch = b.title.toLowerCase().includes(search) || b.author.toLowerCase().includes(search);
    const matchFilter = bookFilter === 'semua' || b.category === bookFilter;
    return matchSearch && matchFilter;
  });

  if (filtered.length === 0) {
    el.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <div class="empty-icon">📭</div><p>Tidak ada buku ditemukan.</p></div>`;
    return;
  }

  el.innerHTML = filtered.map(b => `
    <div class="book-card" onclick="openBookDetail('${b.id}')">
      <div class="book-cover" style="background: linear-gradient(135deg, ${b.color}33, ${b.color}11)">
        <span style="position:relative;z-index:1">${b.cover}</span>
        <div class="book-cover-overlay"></div>
        <div class="book-available-tag ${b.available > 0 ? 'badge-success' : 'badge-danger'}">
          ${b.available > 0 ? '✓ Tersedia' : '✗ Habis'}
        </div>
      </div>
      <div class="book-card-body">
        <div class="book-title">${b.title}</div>
        <div class="book-author">${b.author}</div>
        <div class="book-card-footer">
          <span class="badge badge-purple">${b.category}</span>
          <span style="font-size:11px;color:var(--text-muted)">${b.available}/${b.stock}</span>
        </div>
      </div>
    </div>`).join('');

  // Category counts
  renderBookFilterCounts();
}

function renderBookFilterCounts() {
  const categories = ['semua', ...new Set(books.map(b => b.category))];
  const el = document.getElementById('book-filter-tabs');
  if (!el) return;
  el.innerHTML = categories.map(c => `
    <button class="filter-tab ${bookFilter === c ? 'active' : ''}"
      onclick="setBookFilter('${c}')">${c === 'semua' ? 'Semua' : c}</button>`).join('');
}

function setBookFilter(f) {
  bookFilter = f;
  renderBooks();
}

function openBookDetail(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;
  const borrowed = borrowings.filter(b => b.bookId === id && b.status !== 'kembali').length;

  document.getElementById('modal-book-cover').textContent = book.cover;
  document.getElementById('modal-book-cover').style.background = `linear-gradient(135deg, ${book.color}44, ${book.color}22)`;
  document.getElementById('modal-book-title').textContent   = book.title;
  document.getElementById('modal-book-author').textContent  = book.author;
  document.getElementById('modal-book-cat').textContent     = book.category;
  document.getElementById('modal-book-year').textContent    = book.year;
  document.getElementById('modal-book-stock').textContent   = book.stock;
  document.getElementById('modal-book-avail').textContent   = book.available;
  document.getElementById('modal-book-id').textContent      = book.id;

  const borrowBtn = document.getElementById('modal-borrow-btn');
  if (book.available > 0) {
    borrowBtn.disabled = false;
    borrowBtn.className = 'btn btn-primary';
    borrowBtn.onclick = () => { closeModal('modal-book-detail'); openBorrowModal(id); };
  } else {
    borrowBtn.disabled = true;
    borrowBtn.className = 'btn btn-ghost';
  }

  openModal('modal-book-detail');
}

// Add / Edit Book
function openAddBookModal(id = null) {
  editingBook = id;
  const isEdit = !!id;
  const book = isEdit ? books.find(b => b.id === id) : null;

  document.getElementById('book-modal-title').textContent = isEdit ? 'Edit Buku' : 'Tambah Buku Baru';
  document.getElementById('book-form-id').value       = isEdit ? book.id : '';
  document.getElementById('book-form-title').value    = isEdit ? book.title : '';
  document.getElementById('book-form-author').value   = isEdit ? book.author : '';
  document.getElementById('book-form-cat').value      = isEdit ? book.category : '';
  document.getElementById('book-form-year').value     = isEdit ? book.year : '';
  document.getElementById('book-form-stock').value    = isEdit ? book.stock : '';
  document.getElementById('book-form-cover').value    = isEdit ? book.cover : '📖';
  document.getElementById('book-form-color').value    = isEdit ? book.color : '#7c5cfc';
  openModal('modal-add-book');
}

function saveBook() {
  const title  = document.getElementById('book-form-title').value.trim();
  const author = document.getElementById('book-form-author').value.trim();
  const cat    = document.getElementById('book-form-cat').value.trim();
  const year   = parseInt(document.getElementById('book-form-year').value);
  const stock  = parseInt(document.getElementById('book-form-stock').value);
  const cover  = document.getElementById('book-form-cover').value.trim() || '📖';
  const color  = document.getElementById('book-form-color').value;

  if (!title || !author || !cat || !year || !stock) {
    showToast('Mohon isi semua field!', 'warning'); return;
  }

  if (editingBook) {
    const idx = books.findIndex(b => b.id === editingBook);
    const diff = stock - books[idx].stock;
    books[idx] = { ...books[idx], title, author, category: cat, year, stock, available: Math.max(0, books[idx].available + diff), cover, color };
    showToast('Buku berhasil diperbarui!', 'success');
    addActivity('✏️', `Buku <strong>${title}</strong> diperbarui`, 'Baru saja', '#60a5fa');
  } else {
    const newId = 'B' + String(books.length + 1).padStart(3, '0');
    books.push({ id: newId, title, author, category: cat, year, stock, available: stock, cover, color });
    showToast('Buku berhasil ditambahkan!', 'success');
    addActivity('➕', `Buku baru <strong>${title}</strong> ditambahkan`, 'Baru saja', '#00d4aa');
  }

  closeModal('modal-add-book');
  renderBooks();
  updateStats();
}

function deleteBook(id) {
  const book = books.find(b => b.id === id);
  openConfirm(`Hapus buku "${book.title}"?`, `Tindakan ini tidak dapat dibatalkan.`, () => {
    books = books.filter(b => b.id !== id);
    showToast('Buku berhasil dihapus!', 'success');
    renderBooks();
    updateStats();
  });
}

// ============================================
// BORROWINGS
// ============================================
function openBorrowModal(preBookId = '') {
  document.getElementById('borrow-book-sel').value   = preBookId;
  document.getElementById('borrow-member-sel').value  = '';
  const today = new Date();
  const due   = new Date(today); due.setDate(due.getDate() + 14);
  document.getElementById('borrow-date').value     = toInputDate(today);
  document.getElementById('borrow-due').value      = toInputDate(due);
  populateBorrowSelects();
  openModal('modal-borrow');
}

function populateBorrowSelects() {
  const bookSel = document.getElementById('borrow-book-sel');
  const savedBookId = bookSel.value;
  bookSel.innerHTML = '<option value="">-- Pilih Buku --</option>' +
    books.filter(b => b.available > 0 || b.id === savedBookId)
      .map(b => `<option value="${b.id}" ${b.id === savedBookId ? 'selected' : ''}>${b.title} (${b.available} tersedia)</option>`).join('');

  const memSel = document.getElementById('borrow-member-sel');
  memSel.innerHTML = '<option value="">-- Pilih Anggota --</option>' +
    members.map(m => `<option value="${m.id}">${m.name} (${m.id})</option>`).join('');
}

function saveBorrowing() {
  const bookId    = document.getElementById('borrow-book-sel').value;
  const memberId  = document.getElementById('borrow-member-sel').value;
  const borrowDate = document.getElementById('borrow-date').value;
  const dueDate   = document.getElementById('borrow-due').value;

  if (!bookId || !memberId || !borrowDate || !dueDate) {
    showToast('Mohon isi semua field!', 'warning'); return;
  }

  // Check active borrow for same book + member
  const already = borrowings.find(b => b.bookId === bookId && b.memberId === memberId && b.status !== 'kembali');
  if (already) { showToast('Anggota sudah meminjam buku ini!', 'danger'); return; }

  const book   = books.find(b => b.id === bookId);
  const member = members.find(m => m.id === memberId);

  const newId = 'P' + String(borrowings.length + 1).padStart(3, '0');
  borrowings.push({ id: newId, bookId, memberId, borrowDate, dueDate, returnDate: null, status: 'aktif' });

  // Update book availability
  book.available = Math.max(0, book.available - 1);
  // Update member total
  member.totalBorrow++;

  addActivity('📤', `<strong>${member.name}</strong> meminjam <strong>${book.title}</strong>`, 'Baru saja', '#7c5cfc');

  showToast('Peminjaman berhasil dicatat!', 'success');
  closeModal('modal-borrow');
  renderBorrowings();
  updateStats();
}

function returnBook(id) {
  const b = borrowings.find(x => x.id === id);
  const book = books.find(x => x.id === b.bookId);
  const member = members.find(x => x.id === b.memberId);

  openConfirm(`Kembalikan "${book.title}"?`,
    `Dikembalikan oleh <strong>${member.name}</strong>. Konfirmasi pengembalian?`, () => {
    b.returnDate = toInputDate(new Date());
    b.status     = 'kembali';
    book.available = Math.min(book.stock, book.available + 1);
    addActivity('📥', `<strong>${member.name}</strong> mengembalikan <strong>${book.title}</strong>`, 'Baru saja', '#00d4aa');
    showToast('Buku berhasil dikembalikan!', 'success');
    renderBorrowings();
    updateStats();
    renderBooks();
  });
}

function renderBorrowings() {
  checkOverdue();
  const search = document.getElementById('search-borrow')?.value.toLowerCase() || '';
  const el = document.getElementById('borrow-table-body');
  if (!el) return;

  let filtered = borrowings.filter(b => {
    const book   = books.find(x => x.id === b.bookId);
    const member = members.find(x => x.id === b.memberId);
    const matchSearch = (book?.title || '').toLowerCase().includes(search) ||
                        (member?.name || '').toLowerCase().includes(search) ||
                        b.id.toLowerCase().includes(search);
    const matchFilter = borrowFilter === 'semua' || b.status === borrowFilter;
    return matchSearch && matchFilter;
  }).reverse();

  if (filtered.length === 0) {
    el.innerHTML = `<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--text-muted)">Tidak ada data peminjaman.</td></tr>`;
    return;
  }

  el.innerHTML = filtered.map(b => {
    const book   = books.find(x => x.id === b.bookId);
    const member = members.find(x => x.id === b.memberId);
    const isOverdue = b.status === 'terlambat';
    const daysLeft  = getDaysLeft(b.dueDate);

    return `<tr>
      <td class="td-bold" style="color:var(--accent-light)">${b.id}</td>
      <td class="td-bold">${book ? book.title : b.bookId}</td>
      <td>${member ? member.name : b.memberId}</td>
      <td>${formatDate(b.borrowDate)}</td>
      <td ${isOverdue ? 'style="color:var(--danger)"' : ''}>${formatDate(b.dueDate)}
        ${b.status === 'aktif' || b.status === 'terlambat' ? `<div style="font-size:10px;color:${isOverdue?'var(--danger)':'var(--text-muted)'}">${isOverdue ? `${Math.abs(daysLeft)} hari terlambat` : `${daysLeft} hari lagi`}</div>` : ''}</td>
      <td>${statusBadge(b.status)}</td>
      <td>
        ${b.status !== 'kembali'
          ? `<button class="btn btn-teal btn-sm" onclick="returnBook('${b.id}')">↩ Kembalikan</button>`
          : `<span style="font-size:11px;color:var(--text-muted)">${formatDate(b.returnDate)}</span>`}
      </td>
    </tr>`;
  }).join('');
}

function checkOverdue() {
  const today = new Date(); today.setHours(0,0,0,0);
  borrowings.forEach(b => {
    if (b.status === 'aktif') {
      const due = new Date(b.dueDate);
      if (due < today) b.status = 'terlambat';
    }
  });
  const cnt = borrowings.filter(b => b.status === 'terlambat').length;
  const badge = document.getElementById('overdue-badge');
  if (badge) { badge.textContent = cnt; badge.style.display = cnt > 0 ? '' : 'none'; }
}

function setBorrowFilter(f) {
  borrowFilter = f;
  document.querySelectorAll('.borrow-filter-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.filter === f);
  });
  renderBorrowings();
}

// ============================================
// MEMBERS
// ============================================
function renderMembers() {
  const search = document.getElementById('search-member')?.value.toLowerCase() || '';
  const el = document.getElementById('member-grid');
  if (!el) return;

  const filtered = members.filter(m =>
    m.name.toLowerCase().includes(search) ||
    m.email.toLowerCase().includes(search) ||
    m.id.toLowerCase().includes(search)
  );

  if (filtered.length === 0) {
    el.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <div class="empty-icon">👤</div><p>Tidak ada anggota ditemukan.</p></div>`;
    return;
  }

  el.innerHTML = filtered.map(m => {
    const active   = borrowings.filter(b => b.memberId === m.id && b.status !== 'kembali').length;
    const initials = m.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2);
    return `<div class="member-card">
      <div class="member-avatar-lg">${initials}</div>
      <div class="member-name">${m.name}</div>
      <div class="member-id">${m.id} · ${m.email}</div>
      <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">📞 ${m.phone}</div>
      <div style="font-size:11px;color:var(--text-muted)">Bergabung ${formatDate(m.joinDate)}</div>
      <div class="member-stats">
        <div><div class="member-stat-val" style="color:var(--accent-light)">${m.totalBorrow}</div><div class="member-stat-lbl">Total Pinjam</div></div>
        <div><div class="member-stat-val" style="color:${active>0?'var(--warning)':'var(--success)'}">${active}</div><div class="member-stat-lbl">Sedang Pinjam</div></div>
      </div>
      <div style="display:flex;gap:8px;margin-top:14px">
        <button class="btn btn-ghost btn-sm" style="flex:1" onclick="openEditMember('${m.id}')">✏️ Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteMember('${m.id}')">🗑️</button>
      </div>
    </div>`;
  }).join('');
}

function openAddMemberModal(id = null) {
  editingMember = id;
  const isEdit = !!id;
  const m = isEdit ? members.find(x => x.id === id) : null;

  document.getElementById('member-modal-title').textContent = isEdit ? 'Edit Anggota' : 'Tambah Anggota';
  document.getElementById('member-form-name').value    = isEdit ? m.name : '';
  document.getElementById('member-form-email').value   = isEdit ? m.email : '';
  document.getElementById('member-form-phone').value   = isEdit ? m.phone : '';
  document.getElementById('member-form-join').value    = isEdit ? m.joinDate : toInputDate(new Date());
  openModal('modal-add-member');
}

function openEditMember(id) { openAddMemberModal(id); }

function saveMember() {
  const name  = document.getElementById('member-form-name').value.trim();
  const email = document.getElementById('member-form-email').value.trim();
  const phone = document.getElementById('member-form-phone').value.trim();
  const join  = document.getElementById('member-form-join').value;

  if (!name || !email || !phone || !join) { showToast('Mohon isi semua field!', 'warning'); return; }

  if (editingMember) {
    const idx = members.findIndex(m => m.id === editingMember);
    members[idx] = { ...members[idx], name, email, phone, joinDate: join };
    showToast('Anggota berhasil diperbarui!', 'success');
  } else {
    const newId = 'M' + String(members.length + 1).padStart(3, '0');
    members.push({ id: newId, name, email, phone, joinDate: join, totalBorrow: 0 });
    showToast('Anggota berhasil ditambahkan!', 'success');
    addActivity('👤', `Anggota baru <strong>${name}</strong> terdaftar`, 'Baru saja', '#ff5e8a');
  }

  closeModal('modal-add-member');
  renderMembers();
  updateStats();
}

function deleteMember(id) {
  const m = members.find(x => x.id === id);
  const hasBorrow = borrowings.some(b => b.memberId === id && b.status !== 'kembali');
  if (hasBorrow) { showToast('Tidak bisa hapus! Anggota masih memiliki pinjaman aktif.', 'danger'); return; }
  openConfirm(`Hapus anggota "${m.name}"?`, 'Tindakan ini tidak dapat dibatalkan.', () => {
    members = members.filter(x => x.id !== id);
    showToast('Anggota berhasil dihapus!', 'success');
    renderMembers();
    updateStats();
  });
}

// ============================================
// REPORT
// ============================================
function renderReport() {
  const totalBorrow  = borrowings.length;
  const returned     = borrowings.filter(b => b.status === 'kembali').length;
  const active       = borrowings.filter(b => b.status === 'aktif').length;
  const overdue      = borrowings.filter(b => b.status === 'terlambat').length;

  setEl('rep-total', totalBorrow);
  setEl('rep-returned', returned);
  setEl('rep-active', active);
  setEl('rep-overdue', overdue);

  // Top books
  const bookCount = {};
  borrowings.forEach(b => { bookCount[b.bookId] = (bookCount[b.bookId] || 0) + 1; });
  const topBooks = Object.entries(bookCount).sort((a,b) => b[1]-a[1]).slice(0,5);

  const topBooksEl = document.getElementById('top-books');
  if (topBooksEl) {
    const max = topBooks[0]?.[1] || 1;
    topBooksEl.innerHTML = topBooks.map(([id, cnt]) => {
      const book = books.find(b => b.id === id);
      const pct = Math.round((cnt/max)*100);
      return `<div style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:13px">
          <span>${book?.cover} ${book?.title || id}</span>
          <span style="color:var(--accent-light);font-weight:700">${cnt}x</span>
        </div>
        <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
      </div>`;
    }).join('');
  }

  // Category breakdown
  const catCount = {};
  borrowings.forEach(b => {
    const book = books.find(x => x.id === b.bookId);
    if (book) catCount[book.category] = (catCount[book.category] || 0) + 1;
  });
  const topCats = Object.entries(catCount).sort((a,b) => b[1]-a[1]);
  const repCatEl = document.getElementById('rep-categories');
  if (repCatEl) {
    repCatEl.innerHTML = topCats.map(([cat, cnt]) => `
      <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--glass-border);font-size:13px">
        <span>${cat}</span><span class="badge badge-purple">${cnt} pinjaman</span>
      </div>`).join('') || '<div style="color:var(--text-muted);text-align:center;padding:20px">Belum ada data</div>';
  }

  // Overdue list
  const overdueListEl = document.getElementById('overdue-list');
  if (overdueListEl) {
    const overdues = borrowings.filter(b => b.status === 'terlambat');
    overdueListEl.innerHTML = overdues.length === 0
      ? '<tr><td colspan="4" style="text-align:center;padding:30px;color:var(--text-muted)">✅ Tidak ada keterlambatan</td></tr>'
      : overdues.map(b => {
          const book   = books.find(x => x.id === b.bookId);
          const member = members.find(x => x.id === b.memberId);
          const days   = Math.abs(getDaysLeft(b.dueDate));
          return `<tr>
            <td class="td-bold">${member?.name || b.memberId}</td>
            <td>${book?.title || b.bookId}</td>
            <td>${formatDate(b.dueDate)}</td>
            <td><span class="badge badge-danger">${days} hari</span></td>
          </tr>`;
        }).join('');
  }
}

// ============================================
// MODAL SYSTEM
// ============================================
function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

function openConfirm(title, msg, cb) {
  document.getElementById('confirm-title').textContent = title;
  document.getElementById('confirm-msg').innerHTML     = msg;
  confirmCallback = cb;
  openModal('modal-confirm');
}

function doConfirm() {
  if (confirmCallback) confirmCallback();
  confirmCallback = null;
  closeModal('modal-confirm');
}

// Close modals on overlay click
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
  }
});

// ============================================
// TOAST
// ============================================
function showToast(msg, type = 'success') {
  const icons = { success: '✅', warning: '⚠️', danger: '❌', info: 'ℹ️' };
  const colors = { success: 'var(--success)', warning: 'var(--warning)', danger: 'var(--danger)', info: 'var(--info)' };

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.setProperty('--toast-color', colors[type]);
  toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span class="toast-msg">${msg}</span>`;
  document.getElementById('toast-container').appendChild(toast);

  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================
// HELPERS
// ============================================
function setEl(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }

function formatDate(d) {
  if (!d) return '-';
  const dt = new Date(d);
  return dt.toLocaleDateString('id-ID', { day:'2-digit', month:'short', year:'numeric' });
}

function toInputDate(d) {
  return d.toISOString().split('T')[0];
}

function getDaysLeft(dueDate) {
  const today = new Date(); today.setHours(0,0,0,0);
  const due   = new Date(dueDate);
  return Math.ceil((due - today) / (1000*60*60*24));
}

function statusBadge(status) {
  const map = {
    'aktif':    '<span class="badge badge-info">● Aktif</span>',
    'terlambat':'<span class="badge badge-danger">● Terlambat</span>',
    'kembali':  '<span class="badge badge-success">● Dikembalikan</span>',
  };
  return map[status] || status;
}

function addActivity(icon, msg, time, color) {
  activityLog.unshift({ icon, msg, time, color });
  if (activityLog.length > 10) activityLog.pop();
}

// ============================================
// SEARCH HANDLERS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Global search in topbar
  const globalSearch = document.getElementById('global-search');
  if (globalSearch) {
    globalSearch.addEventListener('input', e => {
      const val = e.target.value.toLowerCase();
      // Highlight in current page
      if (currentPage === 'buku') {
        document.getElementById('search-book').value = val;
        renderBooks();
      } else if (currentPage === 'peminjaman') {
        document.getElementById('search-borrow').value = val;
        renderBorrowings();
      } else if (currentPage === 'anggota') {
        document.getElementById('search-member').value = val;
        renderMembers();
      }
    });
  }

  // Init
  navigate('dashboard');
});
