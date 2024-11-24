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
      icon: <MdDashboard style={{ fontSize: "1.25rem", color: "#EF8120" }} />,
      title: "Dashboard",
      link: "/",
    },
    {
      icon: <GrProductHunt style={{ fontSize: "1.25rem", color: "#EF8120" }} />,
      title: "Products Management",
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
        <FaCartShopping style={{ fontSize: "1.25rem", color: "#EF8120" }} />
      ),
      title: "Orders Management",
      link: "/order-active",
      dropdown: [{ title: "Active Order", link: "/order-active" }],
    },
    {
      icon: <FaUsers style={{ fontSize: "1.25rem", color: "#EF8120" }} />,
      title: "Customers Management",
      // link: "/customers",
      dropdown: [
        { title: "Leaderboard", link: "/customers" },
        { title: "Customer List", link: "/customerlist" },
        { title: "Buyer List", link: "/buyerlist" },
      ],
    },
    {
      icon: <MdRateReview style={{ fontSize: "1.25rem", color: "#EF8120" }} />,
      title: "Reviews Management",
      link: "/reviews",
    },
    {
      icon: (
        <HiMiniCurrencyRupee
          style={{ fontSize: "1.25rem", color: "#EF8120" }}
        />
      ),
      title: "Transactions",
      link: "/transactions",
    },
    {
      icon: (
        <AiOutlineAreaChart style={{ fontSize: "1.25rem", color: "#EF8120" }} />
      ),
      title: "Analytics",
      link: "/analytics",
    },
    {
      icon: (
        <IoNotificationsSharp
          style={{ fontSize: "1.25rem", color: "#EF8120" }}
        />
      ),
      title: "Push Notification",
      link: "/push-notifications",
    },
    {
      icon: (
        <MdNotificationsOff style={{ fontSize: "1.25rem", color: "#EF8120" }} />
      ),
      title: "Popups Management",
      link: "/popups-management",
    },
    {
      icon: (
        <FaMoneyBillWave style={{ fontSize: "1.25rem", color: "#EF8120" }} />
      ),
      title: "Earning Report",
      link: "/earning-report",
    },
    {
      icon: <FaUsers style={{ fontSize: "1.25rem", color: "#EF8120" }} />,
      title: "Delivery Management",
      link: "/delivery-management",
      dropdown: [
        { title: "Delivery Management", link: "/delivery-management" },
        { title: "Delivery List", link: "/delivery-list" },
        { title: "Delivery Status Tracking", link: "/DeliveryStatusTracking" },
      ],
    },
    {
      icon: <RiCouponFill style={{ fontSize: "1.25rem", color: "#EF8120" }} />,
      title: "Coupon Management",
      link: "/coupon-management",
    },
    {
      icon: (
        <MdOutlineSupportAgent
          style={{ fontSize: "1.25rem", color: "#EF8120" }}
        />
      ),
      title: "Support Management",
      link: "/support",
    },
    {
      icon: <IoMdSettings style={{ fontSize: "1.25rem", color: "#EF8120" }} />,
      title: "Settings",
      link: "/settings",
    },
    {
      icon: <FaUserCircle style={{ fontSize: "1.25rem", color: "#EF8120" }} />,
      title: "Profile",
      link: "/profile",
    },
    {
      icon: (
        <RiLogoutBoxFill style={{ fontSize: "1.25rem", color: "#EF8120" }} />
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
    <div className="w-61 h-[calc(100vh-64px)] bg-[#b0d8e5] shadow-xl fixed top-[84px] left-0 overflow-y-auto custom-scrollbar  font-semibold">
      <section className="w-61 h-full">
        <ul className="rounded-xl flex flex-col">
          {sideBarDatas.map((sideBarData, idx) => (
            <li key={idx}>
              {sideBarData.title === "Products Management" ? (
                <>
                  <div
                    className="w-full p-4 hover:bg-[#86C3D7] hover:shadow-xl flex justify-start items-center gap-2 text-blue-950 cursor-pointer"
                    onClick={handleProductsDropdownToggle}
                  >
                    <span className="">{sideBarData.icon}</span>
                    <span className="text-base">{sideBarData.title}</span>
                    <span className="ml-auto">
                      {isProductsDropdownOpen ? (
                        <IoMdArrowDropdown
                          style={{ transform: "rotate(180deg)" }}
                        />
                      ) : (
                        <IoMdArrowDropdown />
                      )}
                    </span>
                  </div>
                  {isProductsDropdownOpen && (
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
              ) : sideBarData.title === "Delivery Management" ? (
                <>
                  <div
                    className="w-full p-4 hover:bg-[#86C3D7] hover:shadow-xl flex justify-start items-center gap-2 text-blue-950 cursor-pointer"
                    onClick={handleDeliveryDropdownToggle}
                  >
                    <span>{sideBarData.icon}</span>
                    <span className="text-base">{sideBarData.title}</span>
                  </div>
                  {isDeliveryDropdownOpen && (
                    <ul className="ml-1 mt-2">
                      {sideBarData.dropdown.map((item, i) => (
                        <li
                          key={i}
                          className="pl-5 p-2 m-2 bg-[#fad9bd] text-black hover:bg-[#86C3D7] rounded-lg cursor-pointer"
                          onClick={() => navigate(item.link)}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : sideBarData.title === "Customers Management" ? (
                <>
                  <div
                    className="w-full p-4 hover:bg-[#86C3D7] hover:shadow-xl flex justify-start items-center gap-4 text-blue-950 cursor-pointer"
                    onClick={handleCustomersDropdownToggle}
                  >
                    <span>{sideBarData.icon}</span>
                    <span className="text-base">{sideBarData.title}</span>
                  </div>
                  {isCustomersDropdownOpen && (
                    <ul className="ml-1 mt-2">
                      {sideBarData.dropdown.map((item, i) => (
                        <li
                          key={i}
                          className="pl-5 p-2 m-2 bg-[#fad9bd] text-black hover:bg-[#86C3D7] rounded-lg cursor-pointer"
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
                  className="w-full p-4 hover:bg-[#86C3D7] hover:shadow-xl flex justify-start items-center gap-2 text-blue-950 cursor-pointer"
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
