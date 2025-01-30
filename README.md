# HNG12 Public API

## Overview
This is a public API for HNG12 that returns basic information such as a registered email, the current UTC datetime, and the GitHub URL of the project's codebase.

## Features
- Returns JSON response with email, current datetime, and GitHub URL.
- Dynamically generates the current datetime in ISO 8601 format (UTC).
- Handles CORS for cross-origin requests.

## Tech Stack
- **Node.js** with **Express.js**
- **dotenv** for environment variables
- **CORS** for handling cross-origin requests

## Setup Instructions
### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/kenneropia/stage-0
   cd stage-0
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following:
   ```env
   EMAIL=your-email@example.com
   GITHUB_URL=https://github.com/yourusername/your-repo
   PORT=3000
   ```
4. Start the server:
   ```sh
   npm run dev
   ```

## API Documentation
### Endpoint: `GET /`
#### Response Format
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## Deployment
The API is publicly accessible at:
```
<your-deployment-url>
```

## Backlink
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)