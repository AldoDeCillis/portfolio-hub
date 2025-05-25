# PortfolioHub

PortfolioHub è un portfolio personale da web developer con CMS headless integrato, un generatore di CV intelligente basato su AI, un chatbot AI e un blog SEO con articoli generati automaticamente.

## ✨ Funzionalità principali

- Portfolio dinamico gestito da Laravel CMS
- Blog con articoli generati manualmente e automaticamente (AI)
- Generatore di CV intelligente con esportazione PDF dopo donazione (Stripe)
- Chatbot AI conversazionale
- Area admin per gestione contenuti e generazione articoli automatici

## 🧰 Tecnologie usate

| Stack         | Tecnologie                                 |
|--------------|---------------------------------------------|
| Frontend     | React, Tailwind CSS, Inertia.js             |
| Backend      | Laravel, Inertia.js                         |
| Database     | MySQL                                       |
| AI Services  | OpenAI API (GPT per CV, chatbot e articoli) |
| PDF Export   | Spatie Browsershot                          |
| Payment      | Stripe API                                  |
| Test         | PestPHP 2                                   |
| Tools        | WSL2, GitBash, VSCode, Postman              |

## 🚀 Avvio del progetto

### 1. Clona il progetto

```bash
git clone https://github.com/tuo-utente/portfoliohub.git
cd portfoliohub
```

### 2. Installa le dipendenze

```bash
composer install
npm install
```

### 3. Configura l'ambiente

```bash
cp .env.example .env
php artisan key:generate
```

> Ricorda di configurare DB, Stripe e OpenAI nel file `.env`

### 4. Migra il database

```bash
php artisan migrate
```

### 5. Avvia il server

```bash
php artisan serve
npm run dev
```

## 🧪 Test

```bash
./vendor/bin/pest
```

## 📁 Struttura cartelle chiave

```
/resources/js/          → React Components
/resources/views/       → Blade layout principale per Inertia
/routes/web.php         → Rotte Inertia + API
/app/Http/Controllers/  → Controller Laravel
/database/migrations/   → Migration database
/tests/Feature/         → Test con PestPHP
```

## 🧠 Prompt per usare ChatGPT con la feature Progetto

> Sto lavorando su un'applicazione chiamata PortfolioHub: è il mio portfolio personale in Laravel + React (Inertia) con un generatore CV AI, chatbot AI e blog automatico. Il backend usa Laravel, il frontend React via Inertia. PDF con Spatie Browsershot. AI con OpenAI. Test con Pest. Aiutami a:
> - creare i componenti React
> - costruire le API in Laravel
> - generare il CV con AI e PDF
> - implementare chatbot
> - generare articoli automatici
> - scrivere test con Pest

## 📚 Licenza

MIT
