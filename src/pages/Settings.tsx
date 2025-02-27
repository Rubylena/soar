import { useState } from "react";
import Tab from "../components/reusables/Tab";
import Input from "../components/reusables/Input";
import { SetCurrentModule } from "../store/slices/moduleSlice";
import { useEffect } from "react";
import EditProfile from "../components/settings/EditProfile";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { updateUser } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { UserInfo } from "../utils/types";

const options = [
  {
    value: "Edit Profile",
  },
  {
    value: "Prefrences",
  },
  {
    value: "Security",
  },
];

export default function Settings() {
  const userData = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [activeTab, setActiveTab] = useState("Edit Profile");
  const [image, setImage] = useState<string>(userData.imageUrl);

  const handleImageChange = (src: string) => {
    setImage(src);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>({
    defaultValues: {
      name: userData.name,
      username: userData.username,
      email: userData.email,
      presentAddress: userData.presentAddress,
      permanentAddress: userData.permanentAddress,
      password: userData.password,
      city: userData.city,
      postalCode: userData.postalCode,
      country: userData.country,
      DOB: userData.DOB,
    },
  });
  const onSubmit: SubmitHandler<UserInfo> = (data) => {
    const payload = {
      name: data.name,
      username: data.username,
      email: data.email,
      presentAddress: data.presentAddress,
      permanentAddress: data.permanentAddress,
      password: data.password,
      city: data.city,
      postalCode: data.postalCode,
      country: data.country,
      DOB: new Date(data.DOB)
        .toLocaleDateString("en-CA")
        .split("/")
        .reverse()
        .join("-"),
      imageUrl: image,
    };
    dispatch(updateUser(payload));

    toast.success("Profile updated successfully");
  };

  useEffect(() => {
    dispatch(SetCurrentModule("Setting"));
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className=" bg-white m-4 mt-[30px] md:mt-0 md:m-0 rounded-[25px] px-10  py-7">
      <Tab
        options={options}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />
      <div className="my-10 flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-start lg:justify-between">
        <EditProfile image={image} handleImageChange={handleImageChange} />
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className=" mb-5 lg:grid-cols-2 grid gap-5">
            <Input
              register={register}
              error={errors?.name}
              type="text"
              label="Your Name"
              name="name"
              placeholder="Charlene Reed "
            />
            <Input
              label="User Name"
              name="username"
              placeholder="Charlene Reed "
              register={register}
              error={errors?.username}
              type="text"
            />
            <Input
              register={register}
              error={errors?.email}
              type="email"
              label="Email"
              name="email"
              placeholder="email "
            />
            <Input
              label="Password"
              name="password"
              placeholder="enter yout password "
              register={register}
              error={errors?.password}
              type="password"
            />
            <Input
              label="Date of Birth"
              name="DOB"
              placeholder="type here "
              register={register}
              error={errors?.DOB}
              type="date"
            />
            <Input
              label="Present Address"
              name="presentAddress"
              placeholder="e.g: USA "
              register={register}
              error={errors?.presentAddress}
              type="text"
            />
            <Input
              label="Permanent Address"
              name="permanentAddress"
              placeholder="e.g:USA "
              register={register}
              error={errors?.permanentAddress}
              type="text"
            />
            <Input
              label="City"
              name="city"
              placeholder="type your city here "
              register={register}
              error={errors?.city}
              type="text"
            />
            <Input
              label="Postal Code"
              name="postalCode"
              placeholder="type your postal code  here "
              register={register}
              error={errors?.postalCode}
              type="text"
            />
            <Input
              label="Country"
              name="country"
              placeholder="type your country here "
              register={register}
              error={errors?.country}
              type="text"
            />
          </div>
          <div className="w-full lg:w-fit lg:ml-auto">
            <button className=" font-medium text-lg hover:scale-110 duration-500 transition-all  bg-black text-white  w-full lg:w-[190px] h-[50px] rounded-2xl">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
