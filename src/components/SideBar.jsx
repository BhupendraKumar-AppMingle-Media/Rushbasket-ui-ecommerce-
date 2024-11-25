import { useState } from "react";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaMoneyBillWave, FaUserCircle } from "react-icons/fa";
import { FaCartShopping, FaUsers } from "react-icons/fa6";
import { GrProductHunt } from "react-icons/gr";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io"; // Import the dropdown icon
import { MdNotificationsOff } from "react-icons/md";
import {
  MdDashboard,
  MdOutlineSupportAgent,
  MdRateReview,
} from "react-icons/md";
import { RiCouponFill, RiLogoutBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import "./SideBar.css";

const SideBar = () => {
  const navigate = useNavigate();
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isDeliveryDropdownOpen, setDeliveryDropdownOpen] = useState(false);
  const [isCustomersDropdownOpen, setCustomersDropdownOpen] = useState(false); // State for Customers Management dropdown

  const sideBarDatas = [
    {
      icon: <MdDashboard style={{ fontSize: "1.25rem", color: "#ffffff" }} />,
      title: "Dashboard",
      link: "/",
    },
    {
      icon: <GrProductHunt style={{ fontSize: "1.25rem", color: "#ffffff" }} />,
      title: "User Management",
      link: "/products",
      dropdown: [
        { title: "Add Products", link: "/addProduct" },
        { title: "All Product", link: "/list" },
        { title: "Categories", link: "/categories" },
        { title: "Inventory", link: "/inventoryproduct" },
      ],
    },
    {
      icon: (
        <FaCartShopping style={{ fontSize: "1.25rem", color: "#ffffff" }} />
      ),
      title: "Restaurant Management",
      link: "/order-active",
      dropdown: [{ title: "Active Order", link: "/order-active" }],
    },
    {
      icon: <FaUsers style={{ fontSize: "1.25rem", color: "#ffffff" }} />,
      title: "Event Management",
      dropdown: [
        { title: "Leaderboard", link: "/customers" },
        { title: "Customer List", link: "/customerlist" },
        { title: "Buyer List", link: "/buyerlist" },
      ],
    },
    {
      icon: <MdRateReview style={{ fontSize: "1.25rem", color: "#ffffff" }} />,
      title: "Rating and Review",
      link: "/reviews",
    },
    {
      icon: (
        <HiMiniCurrencyRupee style={{ fontSize: "1.25rem", color: "#ffffff" }} />
      ),
      title: "Wallet and Incentive ",
      link: "/transactions",
    },
    {
      icon: (
        <AiOutlineAreaChart
          style={{ fontSize: "1.25rem", color: "#ffffff" }}
        />
      ),
      title: "Analytics",
      link: "/analytics",
    },
    {
      icon: (
        <IoNotificationsSharp
          style={{ fontSize: "1.25rem", color: "#ffffff" }}
        />
      ),
      title: "Notifications and Alerts",
      link: "/push-notifications",
    },
    {
      icon: (
        <FaMoneyBillWave style={{ fontSize: "1.25rem", color: "#ffffff" }} />
      ),
      title: "Analytics and Reporting",
      link: "/earning-report",
    },
    {
      icon: <FaUsers style={{ fontSize: "1.25rem", color: "#ffffff" }} />,
      title: "Bidding Management",
      dropdown: [
        { title: "Delivery Management", link: "/delivery-management" },
        { title: "Delivery List", link: "/delivery-list" },
        { title: "Delivery Status Tracking", link: "/DeliveryStatusTracking" },
      ],
    },
    {
      icon: <RiCouponFill style={{ fontSize: "1.25rem", color: "#ffffff" }} />,
      title: "Referral Management",
      link: "/coupon-management",
    },
    {
      icon: (
        <MdOutlineSupportAgent
          style={{ fontSize: "1.25rem", color: "#ffffff" }}
        />
      ),
      title: "Support Management",
      link: "/support",
    },
    {
      icon: <IoMdSettings style={{ fontSize: "1.25rem", color: "#ffffff" }} />,
      title: "Slider and Promotion ",
      link: "/settings",
    },
    {
      icon: <FaUserCircle style={{ fontSize: "1.25rem", color: "#ffffff" }} />,
      title: "Profile",
      link: "/profile",
    },
    {
      icon: (
        <RiLogoutBoxFill style={{ fontSize: "1.25rem", color: "#ffffff" }} />
      ),
      title: "Login",
      link: "/login",
    },
  ];

  const handleProductsDropdownToggle = () => {
    setProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const handleDeliveryDropdownToggle = () => {
    setDeliveryDropdownOpen(!isDeliveryDropdownOpen);
  };

  const handleCustomersDropdownToggle = () => {
    setCustomersDropdownOpen(!isCustomersDropdownOpen);
  };

  return (
    <div
      className="w-61 h-[calc(100vh-64px)] bg-[#1F2D5C] shadow-xl fixed top-[84px] left-0 overflow-y-auto custom-scrollbar font-semibold"
      style={{ color: "#ffffff" }}
    >
      <section className="w-61 h-full">
        <ul className="rounded-xl flex flex-col">
          {sideBarDatas.map((sideBarData, idx) => (
            <li key={idx}>
              {sideBarData.dropdown ? (
                <>
                  <div
                    className="w-full p-4 hover:bg-[#86C3D7] hover:shadow-xl flex justify-start items-center gap-2 cursor-pointer"
                    onClick={() => {
                      if (sideBarData.title === "User Management") {
                        handleProductsDropdownToggle();
                      } else if (sideBarData.title === "Bidding Management") {
                        handleDeliveryDropdownToggle();
                      } else {
                        handleCustomersDropdownToggle();
                      }
                    }}
                  >
                    <span>{sideBarData.icon}</span>
                    <span className="text-base">{sideBarData.title}</span>
                    <span className="ml-auto">
                      <IoMdArrowDropdown
                        style={{
                          transform: `${
                            (sideBarData.title === "User Management" &&
                              isProductsDropdownOpen) ||
                            (sideBarData.title === "Bidding Management" &&
                              isDeliveryDropdownOpen)
                              ? "rotate(180deg)"
                              : "rotate(0deg)"
                          }`,
                        }}
                      />
                    </span>
                  </div>
                  {((sideBarData.title === "User Management" &&
                    isProductsDropdownOpen) ||
                    (sideBarData.title === "Bidding Management" &&
                      isDeliveryDropdownOpen)) && (
                    <ul className="ml-1 mt-2">
                      {sideBarData.dropdown.map((item, i) => (
                        <li
                          key={i}
                          className="pl-11 p-2 m-2 bg-[#fad9bd] text-black hover:bg-[#86C3D7] rounded-lg cursor-pointer"
                          onClick={() => navigate(item.link)}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <div
                  className="w-full p-4 hover:bg-[#86C3D7] hover:shadow-xl flex justify-start items-center gap-2 cursor-pointer"
                  onClick={() => navigate(sideBarData.link)}
                >
                  <span>{sideBarData.icon}</span>
                  <span className="text-base">{sideBarData.title}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SideBar;
