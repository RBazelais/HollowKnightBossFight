# WEB103 Project 1 - Hollow Knight Boss Fights

Submitted by: Rachel Bazelais

About this web app: **A comprehensive guide to Hollow Knight bosses, featuring detailed information about each boss including their location, health, difficulty, lore, strategy tips, and rewards. The app uses client-side routing to provide a smooth single-page application experience with individual pages for each boss.**

Time spent: 4 hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app displays a title**
- [x] **The web app displays at least five unique list items, each with at least three displayed attributes (such as title, text, and image)**
- [x] **The user can click on each item in the list to see a detailed view of it, including all database fields**
  - [x] **Each detail view should be a unique endpoint, such as as `localhost:3000/bosses/crystalguardian` and `localhost:3000/mantislords`**
  - [x] *Note: When showing this feature in the video walkthrough, please show the unique URL for each detailed view. We will not be able to give points if we cannot see the implementation* 
- [x] **The web app serves an appropriate 404 page when no matching route is defined**
- [x] **The web app is styled using Picocss**

The following **optional** features are implemented:

- [x] The web app displays items in a unique format, such as cards rather than lists or animated list items

The following **additional** features are implemented:

- [x] **Breadcrumb navigation** for better user experience
- [x] **Statistics cards** showing boss health, difficulty, and location

## Video Walkthrough

**Note: please be sure to show the unique URLs for each boss detail page in your video walkthrough**

Here's a walkthrough of implemented required features:

![Video Walkthrough](https://submissions.us-east-1.linodeobjects.com/web103/TRlYqDSV.gif)

GIF created with LICEcap

## How to Run

To run this website locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/RBazelais/HollowKnightBossFight.git
   cd HollowKnightBossFight
   ```

2. **Start the development server**

   ```bash
   python3 server.py
   ```

3. **Open your browser**
   - Navigate to `http://localhost:8080`
   - The website will be running with full client-side routing support

### Alternative Methods

If you don't want to use the custom server, you can also run:

```bash
# Using Python's built-in server (basic functionality only)
python3 -m http.server 8000

# Then visit http://localhost:8000
```

**Note:** The custom `server.py` is recommended as it provides proper single-page application (SPA) routing support, allowing the 404 functionality to work correctly for invalid routes.

## Notes
404 was not that bad until I realized I needed a tiny server

## License

Copyright 2025 Rachel Bazelais

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
