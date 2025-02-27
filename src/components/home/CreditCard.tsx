import { pie, chip } from "../../assets/icons/overview";

export default function CreditCard({
  cardBg,
  bottomBg,
  invert,
  showBorder,
  detail
}: {
  cardBg: string;
  bottomBg?: string;
  invert?: boolean;
  showBorder?: boolean;
  detail: {
    number: string;
    holder: string;
    expiry: string;
    balance:string
  };
}) {
  const headerColor =
    cardBg === "bg-white" ? "text-[#718EBF]" : "text-white/30";
  const textcolor = cardBg === "bg-white" ? "text-[#343C6A]" : "text-white";
  return (
    <div
      className={`${cardBg}  font-Lato pt-7 w-full max-w-[400px] lg:max-w-none min-w-[300px]  flex flex-shrink-0 lg:flex-shrink flex-col justify-between ${textcolor} h-[235px] rounded-3xl `}
    >
      <div className="px-7 flex justify-between">
        <div>
          <h3 className={`${headerColor} text-xs`}>Balance</h3>
          <p className="text-lg font-semibold">{detail?.balance}</p>
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
          <p className="text-[15px] font-semibold font-Lato">
            {detail?.holder}
          </p>
        </div>
        <div>
          <h3 className={` ${headerColor} text-xs `}>VALID THRU</h3>
          <p className="text-[15px] font-semibold">{detail?.expiry}</p>
        </div>
      </div>
      <div
        className={`${bottomBg} py-4 flex justify-between px-7 ${
          showBorder && " border-t border-[#DFEAF2] "
        }`}
      >
        <p className={`${textcolor} text-lg font-semibold`}>{detail?.number}</p>
        <img src={pie} alt="credit-card-logo" className="w-[44px] h-[33px]" />
      </div>
    </div>
  );
}
