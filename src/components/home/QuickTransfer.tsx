import  livia from '../../assets/images/livia.svg'
import randy from "../../assets/images/randy.svg";
import workman from "../../assets/images/workman.svg";
import send from '../../assets/icons/overview/send.svg'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { toast } from "react-toastify";

export default function QuickTransfer() {
  return (
    <div className=" h-full flex flex-col justify-center gap-10">
      <div className=" flex gap-1 justify-between items-center">
        <div className=" flex overflow-x-auto w-full scrollbar max-w-[300px] justify-between gap-5">
          <div className="flex-shrink-0">
            <img src={livia} alt="livia" className="mb-3" />
            <h2 className="text-sm text-[#718EBF] font-semibold">
              Livia Bator
            </h2>
            <p className=" text-[#718EBF] text-[15px] font-medium">CEO</p>
          </div>
          <div className="flex-shrink-0">
            <img src={randy} alt="randy" className="mb-3" />
            <h2 className="text-sm text-[#718EBF] font-semibold">
              Randy Press
            </h2>
            <p className=" text-[#718EBF] text-[15px]">Director</p>
          </div>
          <div className="flex-shrink-0">
            <img src={workman} alt="workman" className="mb-3" />
            <h2 className="text-sm text-[#718EBF] font-semibold">Workman</h2>
            <p className=" text-[#718EBF] text-[15px]">Designer</p>
          </div>
        </div>
        <button className=" cursor-pointer hover:scale-105 transition-all duration-500  flex-shrink-0 grid place-content-center bg-white drop-shadow-xl shadow-3xl rounded-full size-[50px]">
          <ChevronRightIcon />
        </button>
      </div>
      <div className="flex flex-wrap justify-between gap-3 items-center">
        <p className=" text-[#718EBF] text-nowrap">Write Amount</p>

        <div className="w-full max-w-[200px] h-[50px] relative text-[#8BA3CB]">
          <input
            type="number"
            className="w-full focus:outline-none bg-[#F5F7FA] h-full placeholder:text-[#8BA3CB] pl-3 pr-[140px] rounded-[40px]"
            placeholder="amount"
          />
          <button
            onClick={() => toast.success("Transfer Successful!!")}
            className="absolute hover:scale-105 transition-all duration-500 cursor-pointer z-50 right-0 top-0 h-full rounded-[40px] flex items-center bg-black w-[127px] text-white gap-2 justify-center"
          >
            <span>Send</span>
            <img src={send} alt="send-icon" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
