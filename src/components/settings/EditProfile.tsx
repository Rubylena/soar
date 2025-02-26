import EditIcon from "@mui/icons-material/Edit";


export default function EditProfile({
  image,
  handleImageChange,
}: {
  image: string  ;
  handleImageChange: (image: string ) => void;
}) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        handleImageChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" flex-shrink-0 relative">
      <img
        src={image}
        alt="accountowner-img"
        className="size-[90px] flex-shrink-0 object-cover rounded-full"
      />
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="fileInput"
        />
        <label
          htmlFor="fileInput"
          className=" size-7 grid place-content-center bottom-0 right-0 absolute rounded-full bg-black text-white"
        >
          <div>
            <EditIcon sx={{ fontSize: "20px" }} />
          </div>
        </label>
      </div>
    </div>
  );
}
