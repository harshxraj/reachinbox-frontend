# ReachInbox Frontend

## Introduction
ReachInbox is an AI-driven platform designed to transform cold outreach for businesses. It offers a comprehensive solution for finding, enriching, and engaging high-intent leads through multi-channel outreach across platforms like Twitter, LinkedIn, email, and phone. With ReachInbox, businesses can effortlessly manage cold email marketing campaigns, utilizing customizable templates, A/B testing, real-time analytics, and performance tracking.

## Project Type
Frontend

## Deployed App
Frontend: [https://reachinbox-frontend.vercel.app/](https://reachinbox-frontend.vercel.app/)  

## Video Walkthrough of the Project

## Video Walkthrough of the Codebase

## Features
- Seamless login page implementation with provided design.
- Integration with ReachInbox API for fetching data in the onebox.
- Keyboard shortcuts for efficient thread management.
- Custom text editor with additional functionalities like "SAVE" and "Variables".
- Reply functionality allowing users to compose and send replies within the app.
- Support for both light and dark mode.

## Design Decisions or Assumptions
- Utilized the provided design for a consistent user experience.
- Assumed ReachInbox API endpoints and request/response formats for integration.

## Installation & Getting Started
To install and run the project locally, follow these steps:
```bash
git clone https://github.com/harshxraj/reachinbox-frontend.git
cd reachinbox
npm run dev
```


## API Endpoints
- GET /onebox/list - Retrieve all threads
- GET /onebox/:thread_id - Fetch details of a specific thread
- DELETE /onebox/:thread_id - Delete a thread
- POST /reply/:thread_id - Send a reply to a thread

## Technology Stack
- React.js
- Tailwind CSS
