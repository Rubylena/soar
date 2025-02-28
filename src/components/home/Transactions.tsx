import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../reusables/Skeleton";
import { Transaction } from "../../utils/types";

export default function Transactions() {
  const [transactionsData, setTransactionsData] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const formatDate = (val: Date) => {
    return new Date(val).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const fetchTransactions = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/transactions`
      );

      if (typeof result?.data === "object") {
        setTransactionsData(result.data);
      }
    } catch (err) {
      console.log("Error fetching transactions:", err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="p-5 flex gap-2 flex-col justify-between w-full overflow-y-auto scrollbar text-white h-[235px] rounded-3xl bg-white">
      {loading ? (
        <Skeleton />
      ) : (
        <>
          {transactionsData?.map((transac, i) => (
            <div className="flex items-center gap-5" key={i}>
              <div
                className={` ${transac.bank === "paypal" && "bg-blue-100"} ${
                  transac.bank === "jemi" && "bg-teal-100"
                } bg-amber-100 grid place-content-center flex-shrink-0 rounded-full size-[55px]`}
              >
                <img
                  src={`/assets/icons/overview/${transac.bank}.png`}
                  alt="deposit"
                  className="size-7"
                />
              </div>
              <div className="flex justify-between items-center w-full gap-5">
                <div>
                  <h3 className="text-gray-900 text-sm md:text-base font-medium">
                    {transac.title}
                  </h3>
                  <p className=" text-sm md:text-[15px] text-[#718EBF] pt-1">
                    {formatDate(transac.date)}
                  </p>
                </div>
                <p
                  className={`${
                    transac.type === "deposit"
                      ? "text-emerald-400"
                      : " text-red-500"
                  } font-medium`}
                >
                  <span>{transac.type === "deposit" ? "+" : "-"}</span> $
                  {transac.amount}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
