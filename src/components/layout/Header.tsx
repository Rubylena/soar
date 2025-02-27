import settings from "../../assets/icons/settings.svg";
import notification from "../../assets/icons/notification.svg";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router";
import { useAppSelector } from "../../store/hooks/hooks";
import imageUrl from "../../assets/accountowner.jpeg";

export default function Header({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) {
  const module = useAppSelector((state) => state.module.currentModule);

  return (
    <div className=" w-full gap-3 flex flex-col md:flex-row it md:items-center justify-start md:justify-between">
      <div className=" flex justify-between">
        <IconButton
          color="inherit"
          aria-label="open mobile drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 1, display: { sm: "none" } }}
        >
          <MenuIcon className="text-gray-900" />
        </IconButton>
        <h2 className=" text-lg md:text-[23px] font-semibold text-[#343C6A]">
          {module}
        </h2>
        <img
          src={imageUrl}
          alt="accountowner-img"
          className="size-[30px] md:hidden flex-shrink-0 object-cover rounded-full"
        />
      </div>

      <div className=" flex gap-3 items-center justify-end w-full ">
        <div className=" w-full md:w-[255px] h-[35px] md:h-[50px] relative text-[#8BA3CB]">
          <div className=" absolute left-4 top-[50%] -translate-y-[50%]">
            <SearchIcon />
          </div>
          <input
            className="w-full bg-[#F5F7FA] h-full placeholder:text-[#8BA3CB] pl-12 rounded-[40px] "
            placeholder="Search for something"
          />
        </div>
        <Link to="/settings">
          <div className=" bg-[#F5F7FA] hidden md:grid place-content-center size-[50px] rounded-full">
            <img
              src={settings}
              alt="settings-icon"
              className="size-[25px]  object-cover rounded-full"
            />
          </div>
        </Link>
        <div className=" bg-[#F5F7FA] hidden md:grid place-content-center size-[50px] rounded-full">
          {" "}
          <img
            src={notification}
            alt="notification-icon"
            className="size-[25px]  object-cover"
          />
        </div>

        <img
          src={imageUrl}
          alt="accountowner-img"
          className="size-[50px] hidden md:block flex-shrink-0 object-cover rounded-full"
        />
      </div>
    </div>
  );
}
