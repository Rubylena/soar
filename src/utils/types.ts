import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

export type Balance = { month: string; amount: string };

export type Expenses = { name: string; value: number; color: string };

export type Transaction = {
  type: "deposit" | "withdrawal";
  amount: string;
  date: Date;
  title: string;
  bank: string;
};

export type Props<T extends FieldValues> = {
  register: UseFormRegister<T>;
  name: Path<T>;
  error?: FieldError;

  label: string;
  placeholder: string;
  type: string;
};

export type UserInfo = {
  name: string;
  username: string;
  email: string;
  presentAddress: string;
  permanentAddress: string;
  password: string;
  city: string;
  postalCode: string;
  country: string;
  DOB: string;
};