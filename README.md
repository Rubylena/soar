# Project Overview

This project is Soar's frontend assessment implementation of the dashboard and settings page. It includes the following datasets stored in a single JSON file:

- **Recent Transactions**: Transaction history
- **Balance History**: User's balance over months
- **Weekly Statistics**: Withdrawals and deposits per day
- **Expenses**: Expense categories with values

This data is served using `json-server` and fetched in this frontend application using `axios`. The server is hosted on [a third-party server](https://my-json-server.typicode.com/).

You can also run the local server using:

```bash
npm run server
# or
pnpm server
# or
yarn server
```

## Setup Instructions

1. Clone this repository.
2. Open the folder in your code editor and run the commands below.
3. To install dependencies: 

   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

4. Run the app: 

   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

You can now use [http://localhost:5173/](http://localhost:5173/) to view the application.

## Features

- Dummy data imitated using `json-server`
- Skeleton loader to show loading state
- Toast component to indicate when an action is successful
- Edit profile feature to update users' profiles
- Edit user details feature