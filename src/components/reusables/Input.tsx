import { FieldValues } from "react-hook-form";
import { Props } from "../../utils/types";

export default function Input<T extends FieldValues>({
  name,
  label,
  placeholder,
  type,
  register,
  error,
}: Props<T>) {
  return (
    <div>
      <label className=" pb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        {...register(name, {
          required: `${label} is required`,
          ...(type === "password" && {
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            validate: {
              hasLowercase: (value) =>
                /[a-z]/.test(value as string) ||
                "Password must include a lowercase letter",
              hasNumber: (value) =>
                /[0-9]/.test(value as string) ||
                "Password must include a number letter",
              hasSpecialChar: (value) =>
                /[!@#$%^&*(),.?":{}|<>]/.test(value as string) ||
                "Password must include a special letter",
            },
          }),
        })}
        type={type}
        className=" w-full text-[#718EBF] mt-1 p-3 border rounded-2xl border-[#DFEAF2]"
        placeholder={placeholder}
      />
      <p className=" text-red-800 text-xs">{error?.message}</p>
    </div>
  );
}
