import {
  services,
  loans,
  privileges,
  settings,
  dashboards,
  investment,
  transactions,
  accounts,
  creditCard,
} from "../assets/icons/overview";

export const navigation = [
  {
    name: "Dashboard",
    link: "/",
    icon: dashboards,
  },
  {
    name: "Transactions",
    link: "",
    icon: transactions,
  },
  {
    name: "Accounts",
    link: "",
    icon: accounts,
  },
  {
    name: "Investments",
    link: "",
    icon: investment,
  },
  {
    name: "Credit Cards",
    link: "",
    icon: creditCard,
  },
  {
    name: "Loans",
    link: "",
    icon: loans,
  },
  {
    name: "Services",
    link: "",
    icon: services,
  },
  {
    name: "My Privileges",
    link: "",
    icon: privileges,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: settings,
  },
];

export const recentTransactions = [
  {
    type: "withdrawal",
    amount: "850",
    date: "28 January 2021",
    title: "Deposit from my Card",
    bank:'deposit'
  },
  {
    type: "deposit",
    amount: "2,500",
    date: "25 January 2021",
    title: "Deposit Paypal",
    bank:'paypal'
  },
  {
    type: "deposit",
    amount: "5,400",
    date: "21 January 2021",
    title: "Jemi Wilson",
    bank:'jemi'
  },
];

export const weeklyStatistics = [
  {
    day: "Sat",
    withdraw: 450,
    deposit: 250,
  },
  {
    day: "Sun",
    withdraw: 350,
    deposit: 150,
  },
  {
    day: "Mon",
    withdraw: 300,
    deposit: 250,
  },
  {
    day: "Tue",
    withdraw: 480,
    deposit: 380,
  },
  {
    day: "Wed",
    withdraw: 120,
    deposit: 280,
  },
  {
    day: "Thu",
    withdraw: 400,
    deposit: 220,
  },
  {
    day: "Fri",
    withdraw: 400,
    deposit: 350,
  },
];

export const expenses = [
  { name: "Entertainment", value: 30, color: "#343C6A" },
  { name: "Investment", value: 20, color: "#396AFF" },
  { name: "Others", value: 35, color: "#000000" },
  { name: "Bill Expense", value: 15, color: "#FC7900" },
];

// Balance history

export const balanceHistory = [
  { month: "Jul", amount: 0 },
  { month: "Aug", amount: 400 },
  { month: "Sep", amount: 300 },
  { month: "Oct", amount: 750 },
  { month: "Nov", amount: 200 },
  { month: "Dec", amount: 500 },
  { month: "Jan", amount: 280 },
 
];
;
