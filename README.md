# Project Nama: API User

API User adalah aplikasi backend menggunakan **Node.js** dan **Express** yang menyediakan beberapa endpoint CRUD. App ini menggunakan **Sequelize ORM** untuk mengakses database **MySQL**.

## Deskripsi Proyek

Proyek ini menyediakan API untuk:
- Menampilkan semua user
- Menampilkan user berdasarkan ID
- Membuat user baru
- Memperbarui data user yang sudah ada
- Menghapus user

### Teknologi yang Digunakan
- **Node.js**: untuk menjalankan aplikasi.
- **Express**: untuk RESTful API.
- **Sequelize**: ORM Javascript untuk SQL.
- **MySQL**: Database untuk menyimpan data pengguna.
- **Docker**: Untuk menjalankan aplikasi dan database dalam container.

## Instruksi Menjalankan Aplikasi secara Lokal

### 1. Persyaratan Sistem

Pastikan Anda sudah menginstal perangkat lunak berikut:
- **Node.js** (versi >= 18)
- **Docker** (untuk menjalankan database MySQL dalam container)
- **Docker Compose** (untuk mengelola multi-container)

### 2. Menjalankan Aplikasi

#### Langkah 1: Clone repository

Clone repository ini ke mesin lokal Anda:

```bash
git clone git@github.com:dimasinr/apprimba.git
cd apprimba
docker-compose up -d --build

setelah selesai

buka http://localhost:3000/users

sudah berjalan, tinggal test dengan run npx jest untuk testing dan http://localhost:3000/api-docs untuk buka dokumentasi api