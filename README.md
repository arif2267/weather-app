# 🌤️ Weather App TypeScript

Aplikasi cuaca sederhana yang dibuat menggunakan TypeScript dengan implementasi `Enum` untuk kondisi cuaca. Aplikasi ini mendemonstrasikan penggunaan TypeScript, Enum, Interface, dan simulasi perubahan cuaca real-time.

---

## 📋 Daftar Isi

- [✨ Fitur](#-fitur)
- [🔧 Persyaratan Sistem](#-persyaratan-sistem)
- [🚀 Instalasi](#-instalasi)
- [🎮 Cara Menjalankan](#-cara-menjalankan)
- [📁 Struktur Project](#-struktur-project)
- [💡 Penjelasan Code](#-penjelasan-code)
- [📺 Output Program](#-output-program)

---

## ✨ Fitur

- 🌈 `Enum WeatherCondition` dengan 4 kondisi cuaca: Sunny, Rainy, Cloudy, Stormy
- 📊 `Interface WeatherReport` untuk struktur data yang konsisten
- 🔄 Simulasi perubahan cuaca real-time dengan delay
- 📝 Logging yang informatif dan mudah dibaca
- 🎯 Type Safety dengan TypeScript
- 🏗️ Arsitektur yang modular dan mudah dikembangkan

---

## 🔧 Persyaratan Sistem

Pastikan sistem Anda memiliki:

- Node.js versi 14.x atau lebih tinggi
- npm versi 6.x atau lebih tinggi
- Terminal/Command Prompt

Cek versi yang terinstall:

```bash
node --version
npm --version
```

Jika belum terinstall, silakan unduh dari [nodejs.org](https://nodejs.org).

---

## 🚀 Instalasi

### 1. Clone atau Download Project

```bash
# Clone repository
git clone https://github.com/arif2267/weather-app.git
cd weather-app

# Atau buat folder baru
mkdir weather-app
cd weather-app
```

### 2. Install TypeScript Secara Global

```bash
npm install -g typescript
```

### 3. Inisialisasi Project

```bash
npm init -y
npm install -D typescript @types/node ts-node
```

### 4. Konfigurasi TypeScript

Buat file `tsconfig.json`:

```bash
tsc --init
```

Atau gunakan konfigurasi berikut:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 5. Tambahkan Script ke package.json

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts",
    "watch": "tsc --watch",
    "clean": "rm -rf dist/"
  }
}
```

### 6. Struktur Folder

```bash
mkdir src
# Tambahkan file src/index.ts dengan kode utama
```

---

## 🎮 Cara Menjalankan

### Metode 1: Compile & Jalankan

```bash
npm run build
npm start
```

### Metode 2: Jalankan Langsung (Development)

```bash
npm run dev
```

### Metode 3: Watch Mode (Auto Compile)

```bash
npm run watch
# Terminal lain:
npm start
```

### Metode 4: Manual

```bash
tsc src/index.ts --outDir dist
node dist/index.js
```

---

## 📁 Struktur Project

```
weather-app/
├── src/
│   └── index.ts
├── dist/
│   └── index.js
├── node_modules/
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💡 Penjelasan Code

### Enum `WeatherCondition`

```ts
enum WeatherCondition {
  Sunny = "Sunny",
  Rainy = "Rainy", 
  Cloudy = "Cloudy",
  Stormy = "Stormy"
}
```

### Interface `WeatherReport`

```ts
interface WeatherReport {
  id: number;
  cityName: string;
  condition: WeatherCondition;
}
```

### Fungsi Utama

- `displayWeather()`: Menampilkan informasi cuaca ke console
- `changeWeatherCondition()`: Mengubah kondisi cuaca secara acak dan tampilkan perubahan
- `main()`: Fungsi utama yang menjalankan simulasi cuaca

---

## 📺 Output Program

```txt
🌍 APLIKASI CUACA SEDERHANA
============================
📊 Kondisi Cuaca Awal:

=== LAPORAN CUACA ===
ID: 1
Kota: Banda Aceh
Kondisi: Sunny
=====================

🔄 Simulasi Perubahan Cuaca:

🌤️ Perubahan cuaca di Banda Aceh:
   Sunny → Cloudy

=== LAPORAN CUACA ===
ID: 1
Kota: Banda Aceh
Kondisi: Cloudy
=====================

🌤️ Perubahan cuaca di Banda Aceh:
   Cloudy → Rainy

=== LAPORAN CUACA ===
ID: 1
Kota: Banda Aceh
Kondisi: Rainy
=====================

📋 Semua Kondisi Cuaca yang Tersedia:
1. Sunny
2. Rainy
3. Cloudy
4. Stormy
```

---
