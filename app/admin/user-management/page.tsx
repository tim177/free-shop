"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { UserTable } from "@/components/user-management/user-table";

export default function UserManagementPage() {
  // Sample user data
  const users = [
    {
      id: 1,
      name: "Yeray Rosalos",
      email: "yerayrosalos@gmail.com",
      phone: "+91-09876543",
      sold: 2,
      bought: 1,
      status: "Block",
      rating: 3,
    },
    {
      id: 2,
      name: "Talah Cotton",
      email: "talahcotton2@gmail.com",
      phone: "+91-09876543",
      sold: 0,
      bought: 5,
      status: "Unblock",
      rating: 4,
    },
    {
      id: 3,
      name: "Yeray Rosalos",
      email: "yerayrosalos@gmail.com",
      phone: "+91-09876543",
      sold: 2,
      bought: 1,
      status: "Block",
      rating: 3,
    },
    {
      id: 4,
      name: "Talah Cotton",
      email: "talahcotton2@gmail.com",
      phone: "+91-09876543",
      sold: 0,
      bought: 5,
      status: "Unblock",
      rating: 4,
    },
    {
      id: 5,
      name: "Talah Cotton",
      email: "talahcotton2@gmail.com",
      phone: "+91-09876543",
      sold: 0,
      bought: 5,
      status: "Unblock",
      rating: 4,
    },
  ];

  return (
    <MainLayout activeItem="User Management">
      <h1 className="text-2xl font-bold text-white mb-4">User Management</h1>
      <UserTable users={users} totalUsers={5556} />
    </MainLayout>
  );
}
