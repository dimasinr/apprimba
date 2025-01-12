
# API User

API User adalah aplikasi backend berbasis **Node.js** dan **Express** yang menyediakan fitur CRUD untuk pengelolaan data pengguna. Aplikasi ini menggunakan **Sequelize ORM** untuk berinteraksi dengan database **MySQL** dan mendukung pengelolaan container menggunakan **Docker**.

## Fitur

- Menampilkan semua pengguna
- Menampilkan pengguna berdasarkan ID
- Menambahkan pengguna baru
- Memperbarui data pengguna yang ada
- Menghapus pengguna

---

## Teknologi yang Digunakan

- **Node.js**: Menjalankan aplikasi backend.
- **Express**: Framework untuk membangun RESTful API.
- **Sequelize**: ORM untuk mengelola database SQL.
- **MySQL**: Database relasional untuk menyimpan data pengguna.
- **Docker & Docker Compose**: Menyediakan lingkungan container untuk aplikasi dan database.
- **Jest**: Framework untuk pengujian aplikasi.

---

## Cara Menjalankan Aplikasi Secara Lokal

### 1. Persyaratan Sistem

Pastikan perangkat lunak berikut telah terpasang di sistem Anda:

- **Node.js** (versi ≥ 18)
- **Docker** dan **Docker Compose** (opsional, untuk menjalankan aplikasi dalam container)

---

### 2. Menjalankan Aplikasi

#### **A. Menjalankan Secara Lokal (Tanpa Docker)**

1. Clone repository ini ke mesin lokal Anda:
   ```bash
   git clone git@github.com:dimasinr/apprimba.git
   cd apprimba
   ```

2. Pastikan MySQL berjalan di port `3306`, lalu buat database baru dengan nama `rimba`:
   ```sql
   CREATE DATABASE rimba;
   ```

3. Instal dependensi aplikasi:
   ```bash
   npm install
   ```

4. Jalankan aplikasi:
   ```bash
   npm start
   ```

5. Akses API di browser:
   - Menampilkan semua pengguna: [http://localhost:3000/users](http://localhost:3000/users)
   - Dokumentasi API: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

#### **B. Menjalankan dengan Docker**

1. Jalankan aplikasi menggunakan Docker Compose:
   ```bash
   docker-compose up -d --build
   docker ps -a
   ```

2. Setelah semua container berjalan:
   - Akses API di [http://localhost:3000/users](http://localhost:3000/users)
   - Lihat dokumentasi API di [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

3. Untuk menjalankan pengujian di container:
   ```bash
   docker exec -it <container_name> npx jest
   ```

---

## Dokumentasi API

Dokumentasi API tersedia di endpoint berikut:
[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---

## Pengujian

Jalankan **Jest** dengan perintah:
```bash
npm run test
```
