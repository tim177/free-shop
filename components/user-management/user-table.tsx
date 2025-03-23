"use client";

import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  sold: number;
  bought: number;
  status: string;
  rating: number;
}

interface UserTableProps {
  users: User[];
  totalUsers: number;
}

export function UserTable({ users, totalUsers }: UserTableProps) {
  return (
    <div className="bg-white rounded-xl shadow mt-6">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">User Management</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left w-12">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">User Deal</th>
              <th className="p-3 text-left">Block / Unblock</th>
              <th className="p-3 text-left">Ratings</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-3">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={user.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                      <div className="text-xs text-gray-400">{user.phone}</div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <div>
                    <div className="text-sm text-red-500">{user.sold} Sold</div>
                    <div className="text-sm text-green-500">
                      {user.bought} Bought
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <button
                    className={`px-4 py-1 rounded-md text-white text-sm ${
                      user.status === "Block" ? "bg-orange-400" : "bg-red-500"
                    }`}
                  >
                    {user.status}
                  </button>
                </td>
                <td className="p-3">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-lg text-yellow-400">
                        {i < user.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-3">
                  <button className="text-gray-500">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 flex items-center justify-between text-sm">
        <div>
          <span className="text-gray-500">
            Showing {users.length} of {totalUsers} total users
          </span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-gray-500">Displaying page</span>
          <button className="px-2 py-1 border rounded-md mx-1 bg-gray-100">
            First
          </button>
          <button className="px-2 py-1 border rounded-md mx-1">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="px-2 py-1 border rounded-md mx-1 bg-gray-100">
            1
          </button>
          <button className="px-2 py-1 border rounded-md mx-1">2</button>
          <button className="px-2 py-1 border rounded-md mx-1">3</button>
          <button className="px-2 py-1 border rounded-md mx-1">4</button>
          <button className="px-2 py-1 border rounded-md mx-1">5</button>
          <button className="px-2 py-1 border rounded-md mx-1">6</button>
          <button className="px-2 py-1 border rounded-md mx-1">
            <ChevronRight className="h-4 w-4" />
          </button>
          <button className="px-2 py-1 border rounded-md mx-1">Last</button>
        </div>
        <div>
          <button className="text-gray-500">Select All</button>
        </div>
      </div>
    </div>
  );
}
