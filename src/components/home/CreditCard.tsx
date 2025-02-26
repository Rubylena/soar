import { pie, chip } from "../../assets/icons/overview";

export default function CreditCard({
  cardBg,
  bottomBg,
  invert,
  showBorder,
}: {
  cardBg: string;
  bottomBg?: string;
  invert?: boolean;
  showBorder?: boolean;
}) {
  const headerColor =
    cardBg === "bg-white" ? "text-[#718EBF]" : "text-white/30";
  const textcolor = cardBg === "bg-white" ? "text-[#343C6A]" : "text-white";
  return (
    <div
      className={`${cardBg} pt-7 flex flex-shrink-0 lg:flex-shrink flex-col justify-between w-full ${textcolor} h-[235px] rounded-3xl `}
    >
      <div className="px-7 flex justify-between">
        <div>
          <h3 className={`${headerColor} text-xs`}>Balance</h3>
          <p className="text-lg font-semibold">$5,756</p>
        </div>
        <div>
          <img
            alt="chip"
            src={chip}
            className={`${invert && "invert"} size-[34px] `}
          />
        </div>
      </div>

      <div className="flex px-7 gap-10">
        <div>
          <h3 className={` ${headerColor} text-xs `}>CARD HOLDER</h3>
          <p className="text-[15px] font-semibold">Eddy Cusuma</p>
        </div>
        <div>
          <h3 className={` ${headerColor} text-xs `}>VALID THRU</h3>
          <p className="text-[15px] font-semibold">12/22</p>
        </div>
      </div>
      <div
        className={`${bottomBg} py-4 flex justify-between px-7 ${
          showBorder && " border-t border-[#DFEAF2] "
        }`}
      >
        <p className={`${textcolor} text-[22px] font-semibold`}>
          3778 **** **** 1234
        </p>
        <img src={pie} className="w-[44px] h-[33px]" />
      </div>
    </div>
  );
}
