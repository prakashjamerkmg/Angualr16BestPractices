# 🅰️ Angular 20 Installation Guide

## 🧩 Step 1: Install Node.js (Latest LTS)

Angular 20 requires **Node.js ≥ 18.19.1** or **≥ 20.11.1**.

### ✅ Check if Node is installed
```bash
node -v
```

If the version is **below 18.19.1**, uninstall and install the latest **LTS (Long-Term Support)** version from:
🔗 https://nodejs.org/

Alternatively, use **nvm** (Node Version Manager):
```bash
nvm install 20
nvm use 20
```

---

## 🧰 Step 2: Install Angular CLI (v20)

Install Angular CLI globally using npm:
```bash
npm install -g @angular/cli@20
```

### Verify installation:
```bash
ng version
```

Expected output:
```
Angular CLI: 20.x.x
Node: 20.x.x
Package Manager: npm
OS: win32 x64
```

---

## 🏗️ Step 3: Create a New Angular 20 Project

```bash
ng new my-angular20-app
```

**Prompts:**
1. Add routing? → Yes (recommended)
2. Stylesheet format → SCSS (recommended)

---

## 📂 Step 4: Navigate to the Project Folder

```bash
cd my-angular20-app
```

---

## ⚙️ Step 5: Run the Application (Development Server)

```bash
ng serve
```

Now open your browser and go to:
👉 http://localhost:4200

You should see the default Angular 20 welcome page.

---

## 📦 Step 6: Build for Production

```bash
ng build --configuration production
```

Build output will be in the `dist/` folder.

---

## 🧠 Optional — Useful Add-ons

### Install Angular Material (UI Library)
```bash
ng add @angular/material
```

### Add PWA support
```bash
ng add @angular/pwa
```

### Add ESLint (recommended instead of TSLint)
```bash
ng add @angular-eslint/schematics
```

---

## 🧱 Project Structure Overview

```
my-angular20-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   └── app.component.ts
│   ├── assets/
│   └── environments/
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 🧾 Bonus — Check or Upgrade Angular Version

### Check version
```bash
ng version
```

### Upgrade to Angular 20
```bash
ng update @angular/core@20 @angular/cli@20
```

---

✅ **Your Angular 20 environment is now ready!**
