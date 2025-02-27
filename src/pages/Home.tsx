import { useDispatch } from "react-redux";
import ExpensePieChart from "../components/charts/ExpensesPieChart";
import WeeklyActivity from "../components/charts/weeklyActivity";
import BalanceChart from "../components/charts/BalanceChart";
import Transactions from "../components/home/Transactions";
import { SetCurrentModule } from "../store/slices/moduleSlice";
import { useEffect } from "react";
import QuickTransfer from "../components/home/QuickTransfer";
import Cards from "../components/home/Cards";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetCurrentModule("Overview"));
  }, []);
  return (
    <div className=" bg-white md:bg-transparent px-5 py-7 md:p-0  flex flex-col gap-7">
      <section className="lg:grid flex flex-col gap-7 lg:grid-cols-3">
        <div className="lg:col-span-2  ">
          <div className="pb-5 flex justify-between">
            <h2 className="text-[#343C6A] font-semibold text-lg md:text-xl">
              My Cards
            </h2>
            <button className=" cursor-pointer hover:text-blue-500 font-semibold md:text-[17px] text-[#343C6A]">
              See All
            </button>
          </div>
          <Cards/>
        </div>
        <div className="lg:col-span-1">
          <h2 className="pb-5 text-[#343C6A] text-lg md:text-xl font-semibold">
            Recent Transaction
          </h2>

          <Transactions />
        </div>
      </section>

      <section className="grid gap-7 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="pb-5 ">
            <h2 className="text-[#343C6A] font-semibold text-lg md:text-xl">
              Weekly Activity
            </h2>
          </div>

          <div className=" bg-white h-[330px] p-5 w-full rounded-3xl">
            <div className=" flex justify-end gap-5">
              <div className=" flex gap-3 items-center">
                <div className=" size-[15px] rounded-full bg-[#396AFF]" />
                <p className=" text-[15px] text-[#718EBF]">Deposit</p>
              </div>
              <div className=" flex gap-3 items-center">
                <div className=" size-[15px] rounded-full bg-black" />
                <p className=" text-[15px] text-[#718EBF]">Withdraw</p>
              </div>
            </div>
            <div className="w-full h-[280px] ">
              <WeeklyActivity />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="pb-5 text-[#343C6A] text-lg md:text-xl font-semibold">
            Expense Statistics
          </h2>

          <div className="bg-white w-full h-[330px] rounded-3xl">
            <ExpensePieChart />
          </div>
        </div>
      </section>

      <section className="grid gap-7 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="pb-5 ">
            <h2 className="text-[#343C6A] font-semibold text-lg md:text-xl">
              Quick Transfer
            </h2>
          </div>

          <div className=" bg-white  h-[322px] p-3 w-full rounded-3xl">
            <QuickTransfer />
          </div>
        </div>
        <div className="lg:col-span-3">
          <h2 className="pb-5 text-[#343C6A] text-lg md:text-xl font-semibold">
            Balance History
          </h2>

          <div className="bg-white w-full p-5 h-[322px] rounded-3xl">
            <BalanceChart />
          </div>
        </div>
      </section>
    </div>
  );
}
