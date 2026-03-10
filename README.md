# LOTR RPG

A text-based, choose-your-own-adventure RPG set in Middle-earth. Players create a character, pick a role, and navigate branching scenarios from the Shire to Mount Doom. Every decision matters - choose unwisely and lose health. Final scores are saved to a persistent leaderboard.

**Live:** [lotr-rpg-production.up.railway.app](https://lotr-rpg-production.up.railway.app/)

## Features

- **Character creation** - Choose a name and role (Hobbit, Human, Wizard, Elf, or Dwarf)
- **Branching story** - ~20 canon-faithful scenarios, each with a wise choice and a harmful one
- **Health system** - Start at 20 HP; wrong choices cost 1 point each
- **Leaderboard** - Top 10 scores ranked by remaining health
- **Audio** - Background music per page, plus correct/error sound effects for choices
- **User accounts** - Sign up, log in, and track multiple characters per account

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Backend** | Node.js, Express |
| **Database** | MySQL, Sequelize ORM |
| **Templating** | Express Handlebars |
| **Auth** | express-session, bcrypt, connect-session-sequelize |
| **Frontend** | Vanilla JavaScript, Bootstrap 5, Foundation |
| **Audio** | Howler.js |

## Getting Started

### Prerequisites

- Node.js 20+
- MySQL server with a `middle_earth_db` database created

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and fill in your values:

   ```
   DB_NAME=middle_earth_db
   DB_USER=your_mysql_user
   DB_PW=your_mysql_password
   DB_HOST=localhost
   DB_PORT=3306
   SESSION_SECRET=your_session_secret
   PORT=3001
   ```

3. Start the server:

   ```bash
   npm start
   ```

   Or with auto-reload during development:

   ```bash
   npm run dev
   ```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the production server |
| `npm run dev` | Start with nodemon (auto-reload) |
| `npm run seed` | Seed the database (currently disabled) |

## Project Structure

```
LOTR-RPG/
├── config/
│   └── connection.js        # Sequelize DB config
├── controllers/
│   ├── homepage-routes.js   # Home and login pages
│   ├── characterpage-routes.js
│   ├── gamepage-routes.js
│   ├── scorepage-routes.js
│   └── api/                 # User and character REST endpoints
├── models/
│   ├── User.js              # Username, hashed password
│   └── Character.js         # Name, type, health, user FK
├── views/
│   ├── layouts/             # Handlebars layout
│   └── *.handlebars         # Page templates
├── public/
│   ├── javascript/          # Client-side game logic and music controls
│   ├── css/
│   ├── assets/              # Graphics and fonts
│   └── music/               # Sound effects
├── server.js
└── package.json
```

## Contributors

- [Thomas Upchurch](https://github.com/thomascupchurch)
- [Katharine Humble](https://github.com/katharinechumble)
- [Michael Hodges](https://github.com/mjh1985codeman)

## Credits

- Music and sound effects from [freesound.org](https://freesound.org)
- Fonts: [Aniron](https://www.1001fonts.com/aniron-font.html), [Elvish Ring NFI](https://www.1001fonts.com/elvish-ring-nfi-font.html)

## Disclaimer

This is a fan-made project for personal and educational use. No commercial use intended.
