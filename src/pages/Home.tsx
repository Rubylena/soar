import { useDispatch } from "react-redux";
import ExpensePieChart from "../components/charts/ExpensesPieChart";
import WeeklyActivity from "../components/charts/weeklyActivity";
import BalanceChart from '../components/charts/BalanceChart'
import CreditCard from "../components/home/CreditCard";
import Transactions from "../components/home/Transactions";
import { SetCurrentModule } from "../store/slices/moduleSlice";
import { useEffect } from "react";
import QuickTransfer from "../components/home/QuickTransfer";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetCurrentModule("Overview"));
  }, []);
  return (
    <div className=" bg-white md:bg-transparent px-2 py-7 md:p-0 grid gap-10">
      <section className="grid gap-7 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="pb-5 flex justify-between">
            <h2 className="text-[#343C6A] font-semibold text-[22px]">
              My Cards
            </h2>
            <button className="  cursor-pointer hover:text-blue-500 font-semibold text-[17px] text-[#343C6A">
              See All
            </button>
          </div>
          <div className=" flex w-full overflow-x-auto gap-5 justify-between">
            <CreditCard
              cardBg="bg-[linear-gradient(107.38deg,#5B5A6F_2.61%,#000000_101.2%)]"
              bottomBg="bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%)]"
            />
            <CreditCard cardBg="bg-white" invert={true} showBorder />
          </div>
        </div>
        <div className="lg:col-span-1">
          <h2 className="pb-5 text-[#343C6A] text-[22px] font-semibold">
            Recent Transaction
          </h2>

          <Transactions />
        </div>
      </section>

      <section className="grid gap-7 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="pb-5 ">
            <h2 className="text-[#343C6A] font-semibold text-[22px]">
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
          <h2 className="pb-5 text-[#343C6A] text-[22px] font-semibold">
            Expense Statistics
          </h2>

          <div className="bg-white w-full h-[330px] rounded-3xl">
            <ExpensePieChart />
          </div>
        </div>
      </section>

      <section className="grid gap-7 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="pb-5 ">
            <h2 className="text-gray-800 font-semibold text-[22px]">
              Quick Transfer
            </h2>
          </div>

          <div className=" bg-white  h-[322px] p-3 w-full rounded-3xl">
            <QuickTransfer />
          </div>
        </div>
        <div className="lg:col-span-2">
          <h2 className="pb-5 text-gray-800 text-[22px] font-semibold">
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
