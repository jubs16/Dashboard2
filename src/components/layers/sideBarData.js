import {
  AiOutlineHome,
  AiOutlineDashboard,
  AiOutlineBarChart,
  AiOutlineTransaction,
  AiOutlineWallet,
  AiOutlineHeart,
} from "react-icons/ai";

export const sideBarData = [
  {
    title: "Home",
    icon: <AiOutlineHome size={25}/>,
    link: "/home",
  },
  {
    title: "Dashboard",
    icon: <AiOutlineDashboard size={25}/>,
    link: "/dashboard",
  },
  {
    title: "Expenses",
    icon: <AiOutlineBarChart size={25}/>,
    link: "/expenses",
  },
  {
    title: "Transactions",
    icon: <AiOutlineTransaction size={25}/>,
    link: "/transactions",
  },
  {
    title: "Wallet",
    icon: <AiOutlineWallet size={25}/>,
    link: "/wallet",
  },
  {
    title: "Activity",
    icon: <AiOutlineHeart size={25}/>,
    link: "/activity",
  }
];
