# WEB103 Project 2 - Hollow Knight Boss Fights with PostgreSQL

Submitted by: **Rachel Bazelais**

About this web app: **An enhanced guide to Hollow Knight bosses, now featuring persistent data storage using PostgreSQL. Users can view detailed information about each boss, with all boss data stored and retrieved from a PostgreSQL database. The app demonstrates full CRUD operations and integrates server-side logic with client-side rendering.**

Time spent: **6** hours

## Required Features

The following **required** functionality is completed:

- [X] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM bosses;' to display your table contents.**

The following **optional** features are implemented:

- [] The user can search for bosses by name

The following **additional** features are implemented:

- [] Added ability to add new bosses to the database via a form
- [] Implemented edit and delete functionality for bosses
- [] Improved error handling for database operations

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='images/project2_walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with LICEcap

## Notes

- Setting up the PostgreSQL database on Render and connecting from the app required careful configuration of environment variables.
- Learned how to use `psql` to inspect and debug table contents.
- Implemented server-side routes to handle CRUD operations securely.

## License

Copyright 2025 Rachel Bazelais

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and