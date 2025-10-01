# WEB103 Project 2 - Hollow Knight Boss Fights with PostgreSQL

Submitted by: **Rachel Bazelais**

About this web app: **An enhanced guide to Hollow Knight bosses, now featuring persistent data storage using PostgreSQL. Users can view detailed information about each boss, with all boss data stored and retrieved from a PostgreSQL database. The app demonstrates full CRUD operations and integrates server-side logic with client-side rendering.**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

- [X] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [X] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [X] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [X] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM bosses;' to display your table contents.**

The following **optional** features are implemented:

- [X] The user can search for bosses by name

The following **additional** features are implemented:

- [] Added ability to add new bosses to the database via a form
- [] Implemented edit and delete functionality for bosses
- [] Improved error handling for database operations

## Video Walkthrough

Here's a walkthrough of implemented required features:

![Video Walkthrough](images/project2_walkthrough.gif)

GIF created with LICEcap

## Notes

- Setting up the PostgreSQL database on Render and connecting from the app required careful configuration of environment variables.
- Learned how to use `psql` to inspect and debug table contents.
- Implemented server-side routes to handle CRUD operations securely.
- Enhanced accessibility with comprehensive keyboard navigation support, including focus states that match hover effects for all interactive elements.
- Added proper ARIA labels, semantic HTML, and a "Return to Top" button with smart focus management.
- Implemented search functionality that filters bosses by name, location, and difficulty with real-time results.

## How to Run

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database (or access to a hosted PostgreSQL instance)

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd HollowKnightBossFight
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with your PostgreSQL connection details:

   ```env
   PGDATABASE=your_database_name
   PGHOST=your_host
   PGPASSWORD=your_password
   PGPORT=5432
   PGUSER=your_username
   ```

4. **Start the application**

   ```bash
   npm start
   ```

   This will:
   - Reset and seed the database with boss data
   - Start the server on <http://localhost:3001>

5. **Open your browser**

   Navigate to `http://localhost:3001` to view the application

### Available Scripts

- `npm start` - Resets database and starts the server
- `npm run reset` - Only resets and seeds the database

## License

Copyright 2025 Rachel Bazelais

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> <http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
