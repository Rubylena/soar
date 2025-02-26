
import{ recentTransactions} from '../../utils/data'

export default function Transactions() {
  return (
    <div className="p-5 flex gap-2 flex-col justify-between w-full overflow-y-auto scrollbar text-white h-[235px] rounded-3xl bg-white">
      {recentTransactions.map((transac, i) => (
        <div className="flex items-center gap-5" key={i}>
          <div
            className={` ${
              transac.bank === "paypal" && "bg-blue-100" 
            } ${transac.bank==='jemi' && "bg-teal-100"} bg-amber-100 grid place-content-center flex-shrink-0 rounded-full size-[55px]`}
          >
            <img
              src={`/src/assets/icons/overview/${transac.bank}.png`}
              alt="deposit"
              className="size-7"
            />
          </div>
          <div className="flex justify-between items-center w-full gap-5">
            <div>
              <h3 className="text-gray-900 font-medium">{transac.title}</h3>
              <p className="text-[15px] text-[#718EBF] pt-1">{transac.date}</p>
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

    
     
    </div>
  );
}
