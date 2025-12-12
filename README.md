Deskripsi
  Backend yang dibangun merupakan layanan API berbasis RESTful API yang berfungsi sebagai pusat logika bisnis dan pengelolaan data aplikasi. 
Sistem ini kami bagi menjadi 5 fitur fungsional utama yaitu menangani proses autentikasi pengguna (login), manajemen data UKT (Uang Kuliah Tunggal),
manajemen tugas mahasiswa (task), notifikasi, serta menyediakan endpoint untuk administrator. Struktur backend dirancang modular menggunakan konsep MVC (Model–View–Controller)
agar kode lebih teratur, mudah dipelihara, dan dapat dikembangkan lebih lanjut. Backend juga dilengkapi middleware untuk mengelola autentikasi JWT (JSON Web Token) dan otorisasi berdasarkan role.

Teknologi yang Digunakan
  a. Bahasa & Runtime
    •	Node.js:  sebagai environment server.
    •	JavaScript (ES6): bahasa pemrograman utama.
  b. Framework & Library
    •	Express.js: framework utama untuk membuat REST API.
    •	Sequelize ORM: untuk mengelola database secara lebih mudah (Model, Migration, Relasi).
    •	bcrypt: untuk hashing password.
    •	jsonwebtoken (JWT): untuk autentikasi dan otorisasi user secara aman.
    •	dotenv: untuk menyimpan konfigurasi sensitif seperti key, DB user, password.
    •	Nodemon: untuk memulai server dengan auto-reload.
  c. Database
    •	MySQL: digunakan untuk menyimpan data user, UKT, tugas, dan notifikasi.
  d. Arsitektur Folder
    Backend menggunakan struktur modul berikut:
    src/
    ─ config/          → Pengaturan database (db.js)
    ─ controllers/     → Logika proses (Auth, UKT, Task, Admin, Notif)
    ─ middlewares/     → Middleware auth dan role
    ─ models/          → Model database (User, Task, UKT, Notification)
    ─ routes/          → Routing endpoint API
    ─ server.js        → File utama untuk menjalankan server
    .env                → Variabel environment
    package.json        → Dependencies

Cara menjalankan aplikasi
  1. Install dependencies
     Pastikan berada di folder backend: npm install
  2. Buat file .env
     Contoh konfigurasi:
      DB_HOST=localhost
      DB_USER=root
      DB_PASSWORD=
      DB_NAME=your_database_name
      JWT_SECRET=your_secret_key
      PORT=5000

  3. Pastikan database sudah dibuat
  Masuk ke MySQL kemudian buat database: CREATE DATABASE your_database_name;

  4. Sync database (jika model menggunakan sync)
  Di server.js, Sequelize akan melakukan sync otomatis:
  sequelize.sync();

  5. Jalankan server
  npm run dev atau node src/server.js

  6. Cek apakah server berjalan
  Buka: http://localhost:3000
  Jika muncul respon seperti: "API is running"
  maka backend siap digunakan.

Bagian yang dibantu Generative AI
  1. Penyusunan Struktur Folder dan Arsitektur Backend
      Generative AI membantu merekomendasikan struktur direktori backend yang rapi dan standar, termasuk pembagian folder:
      •	controllers/
      •	routes/
      •	middlewares/
      •	models/
      •	config/
      Saran dari AI memastikan bahwa pola arsitektur yang digunakan mengikuti praktik terbaik (best practice) seperti pola MVC (Model–View–Controller).

  2. Pembuatan Boilerplate Code Express.js
      AI membantu membuat kode dasar Express seperti:
      •	Inisialisasi server
      •	Middleware global
      •	Pengaturan CORS
      •	Parsing JSON
      •	Setup route awal
     
      Contoh bagian yang dibantu AI:
      const express = require('express');
      const cors = require('cors');
      const app = express();
      app.use(cors());
      app.use(express.json());




