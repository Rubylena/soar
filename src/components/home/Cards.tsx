import CreditCard from "./CreditCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "../reusables/Skeleton";

export default function Cards() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCardDetails = async () => {
    try {
      const result = await axios.get("http://localhost:8000/cardDetails");
      setDetails(result.data);
    } catch (err) {
      console.log("Error fetching transactions:", err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    fetchCardDetails();
  }, []);

  return loading ? (
    <Skeleton />
  ) : (
    <div className=" flex  overflow-x-auto gap-5 justify-between">
      <CreditCard
        cardBg="bg-[linear-gradient(107.38deg,#5B5A6F_2.61%,#000000_101.2%)]"
        bottomBg="bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%)]"
        detail={details[0]}
      />
      <CreditCard
        cardBg="bg-white"
        invert={true}
        showBorder
        detail={details[1]}
      />
    </div>
  );
}
