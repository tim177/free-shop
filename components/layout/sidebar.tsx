"use client";
import Link from "next/link";

interface SidebarProps {
  activeItem?: string;
}

export function Sidebar({ activeItem = "Dashboard" }: SidebarProps) {
  // Navigation items
  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "User Management", href: "/admin/user-management" },
    { name: "Rating and Review", href: "#" },
    { name: "Settings", href: "#" },
    { name: "History", href: "/admin/history" },
    { name: "All Bookings", href: "#" },
    { name: "Push Notification", href: "#" },
    { name: "Transaction List", href: "#" },
    { name: "Google Analytics", href: "#" },
    { name: "Multi-Currency", href: "#" },
    { name: "Category", href: "/admin/category" },
    { name: "Live Chat History", href: "#" },
    { name: "Package Plan", href: "#" },
    { name: "Referral History", href: "#" },
    { name: "Google Map", href: "/admin/google-map" },
  ];

  return (
    <div className="w-64  bg-white rounded-2xl overflow-y-auto h-full flex flex-col mr-4 scrollbar-hidden">
      <div className="p-4 border-b">
        <div className="text-center py-4 text-teal-500 font-bold text-xl">
          Logo
        </div>
      </div>
      <nav className="mt-2 flex-1">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`block w-full text-left px-4 py-3 border-b ${
              activeItem === item.name
                ? "bg-teal-500 text-white font-medium"
                : "text-teal-500 hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
