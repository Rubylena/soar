# Project Overview

This project is Soar's frontend assessment implementation of the dashbaord and settings page. It includes the following datasets stored in a single JSON file:

- **Recent Transactions**: Transaction history
- **Balance History**: User's balance over months
- **Weekly Statistics**: Withdrawals and deposits per day
- **Expenses**: Expense categories with values

This data is served using `json-server` and fetched in a frontend application using `axios`.

## Setup Instructions

1. Clone this repository
2. Open the folder in your code editor, and run the commands below
3. To install dependencies: 
   ```bash
   npm install
   or
   pnpm install
   or
   yarn add
   ```

4. Run the app: 
   ```bash
   npm run dev
   or
   pnpm dev
   or
   yarn dev
   ```

5. You need to also start the json-server API server: 
   ```bash
   npm run server
   or
   pnpm server
   or
   yarn server
   ```
The server must be on before the running the app to get data to appear on the dashboard.

You can now use http://localhost:5173/ to view the application.

## Features

- Dummy data imitated using json-server
- Skeleton loader to show loading state
- Toast component to indicate when an action is successful
- Edit profile feature to update users' profile
- Edit user details feature