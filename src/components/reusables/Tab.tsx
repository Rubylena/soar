
export default function Tab({options, handleTabChange, activeTab}:{
  options: Array<{ value: string }>,
  handleTabChange: (tab: string) => void,
  activeTab: string,
 
}) {
  return (
    <div className="w-full overflow-x-auto  border-b-2 border-[#E5E7EB] flex gap-5 items-center ">
      {options.map((tab, index) => {
        return (
          <button
            key={index}
            onClick={() => handleTabChange(tab.value)}
            className={`${
              activeTab === tab.value
                ? "text-[#232323]  bg-transparent border-b-3 rounded-tl-md border-[#232323] shadow-none "
                : " text-[#718EBF]"
            } px-5 transition-all text-nowrap duration-500 text-sm font-medium py-2`}
          >
            {tab.value}
          </button>
        );
      })}
    </div>
  );
}
