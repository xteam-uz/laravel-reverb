# Laravel Reverb

Laravel Reverb is a blazing-fast, scalable WebSocket server solution built by the Laravel team. It integrates seamlessly with Laravel's broadcasting tools and allows real-time, bidirectional communication using the Pusher protocol. :contentReference[oaicite:0]{index=0}

---

## Features

### Backend (Laravel + Reverb)
- **Laravel 12+** backend application in `/backend`.
- **Reverb WebSocket server** integrated to handle real-time events.
- **Broadcasting and API routes** pre-configured to support event streaming.
- **Authentication ready** using Laravel’s built-in features (e.g. Sanctum).
- **Database structure** with migrations, seeders, and factories under `/database`.
- Asset bundling via **Vite** (if needed in backend).

### Frontend (React + Vite)
- **React + Vite** frontend located in `/frontend`.
- Fast HMR (Hot Module Replacement) and modern JavaScript build pipeline.
- **Reusable components** under `/src` directory.
- **WebSocket client integration** ready to connect to Laravel Reverb backend.
- Environment-based config to easily switch between development and production.
- Simple but extendable architecture to build a full SPA or dashboard.

### Combined
- Full separation of concerns: backend API + WebSocket server and standalone React frontend.
- Ready to run locally or deploy to separate servers.

---

## Requirements

- PHP 8.2+ (or version compatible with latest Laravel that supports Reverb)  
- Laravel version that supports broadcasting / Reverb package (check compatibility in the documentation)  
- Redis (for scaling and pub/sub)  
- A web server or reverse proxy capable of handling WebSocket upgrades (e.g. Nginx)  
- Node.js/npm (if front-end part or Laravel Echo client side is used)  

---

## Installation

1. Install the package via Composer (if published) or require the Reverb package.  
2. Run the broadcasting installer command:  
   ```bash
   php artisan install:broadcasting
   ```

## Contributing

Reverb is open source. If you want to contribute:

1. Fork the repo

2. Create a new branch: `feature/your-feature` or `fix/your-fix`

3. Write tests for new features or changes

4. Submit a pull request and follow the contribution guidelines in repo’s `CONTRIBUTING.md` (if present)

## License

Laravel Reverb is released under the MIT [License](./LICENSE).