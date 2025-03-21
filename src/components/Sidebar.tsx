"use client";
import Link from "next/link"; // Ensure you import Link if using Next.js
import { MdOutlineLogout } from "react-icons/md";

const menus = [
  {
    page: "Dashboard",
    link: "/",
  },
  {
    page: "Contract Management",
    link: "/contract-management",
  },
  {
    page: "Buyer Management",
    link: "/buyer-management",
  },
  {
    page: "Seller Management",
    link: "/seller-management",
  },
];

const Sidebar = () => {
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <div className="h-screen px-5 flex flex-col justify-between">
      <div>
        <div className="pt-24">
          <Link href={'/'} className="flex items-center gap-3">
            <div className="border border-green-500 px-3 py-2 rounded font-bold">
              W
            </div>
            <p>William Josh</p>
          </Link>
        </div>
        <div className="pt-7">
          {menus.map((menu, idx) => (
            <li key={idx} className="list-none mb-4">
              <Link
                href={menu.link}
                className="text-gray-700 hover:text-gray-900"
              >
                {menu.page}
              </Link>
            </li>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="pb-10">
        <button onClick={handleLogout} className="flex items-center gap-3 cursor-pointer">
          <MdOutlineLogout />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;