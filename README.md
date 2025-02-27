# Project Overview

This project includes the following datasets stored in a single JSON file:

- **Recent Transactions**: Transaction history
- **Balance History**: User's balance over months
- **Weekly Statistics**: Withdrawals and deposits per day
- **Expenses**: Expense categories with values

This data is served using `json-server` and fetched in a frontend application using `axios`.

## Setup Instructions

1. To install dependencies: 
   ```bash
   npm install
   ```

2. Run the app: 
   ```bash
   npm run dev
   ```

3. To start the local API server: 
   ```bash
   npm run server
   ```
The server must be on before the running the app to get data to appear on the dashboard.

## Features

- Skeleton loader to show loading state
- Toast component to indicate when an action is successful
- Edit profile feature to update users' profile
- Edit user details feature