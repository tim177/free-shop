/* eslint-disable @next/next/no-img-element */
"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { ChevronLeft, ChevronRight, Filter, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HistoryPage() {
  // Sample activity data
  const activities = [
    {
      id: 1,
      user: {
        name: "Yeray Rosalos",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      action: "Log In",
      date: "July 3, 2023 12:29 pm",
    },
    {
      id: 2,
      user: {
        name: "Alan Robert",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      action: "Booked Product",
      date: "July 3, 2023 12:27 pm",
    },
    {
      id: 3,
      user: {
        name: "Yeray Rosalos",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      action: "Selling Product",
      date: "July 3, 2023 12:29 pm",
    },
    {
      id: 4,
      user: {
        name: "Alan Robert",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      action: "Commented",
      date: "July 3, 2023 12:27 pm",
    },
    {
      id: 5,
      user: {
        name: "Yeray Rosalos",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      action: "Bought Product",
      date: "July 3, 2023 12:29 pm",
    },
    {
      id: 6,
      user: {
        name: "Alan Robert",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      action: "Log Out",
      date: "July 3, 2023 12:27 pm",
    },
    {
      id: 7,
      user: {
        name: "Yeray Rosalos",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      action: "Delete Product",
      date: "July 3, 2023 12:29 pm",
    },
    {
      id: 8,
      user: {
        name: "Alan Robert",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      action: "Share Product",
      date: "July 3, 2023 12:27 pm",
    },
  ];

  return (
    <MainLayout activeItem="History">
      <div className="bg-white rounded-xl shadow">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Activity History</h2>
          <p className="text-sm text-gray-500">
            View historical data of actions taken within the app.
          </p>
        </div>

        <div className="p-4 flex justify-between items-center">
          <div className="relative w-96">
            <Input
              type="text"
              placeholder="Search by user, date, or activity type"
              className="pr-10"
            />
            <Button className="absolute right-0 top-0 h-full bg-teal-500 hover:bg-teal-600">
              Search
            </Button>
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left w-12">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="p-3 text-left">User</th>
                <th className="p-3 text-left">Action</th>
                <th className="p-3 text-left">Date & Time</th>
                <th className="p-3 text-left">React</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="p-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src={activity.user.avatar || "/placeholder.svg"}
                          alt={activity.user.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="font-medium">{activity.user.name}</div>
                    </div>
                  </td>
                  <td className="p-3">{activity.action}</td>
                  <td className="p-3">{activity.date}</td>
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
            <Button variant="outline" size="sm">
              Delete
            </Button>
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
            <span className="text-gray-500">
              Showing 8 of 877 total listings
            </span>
          </div>
        </div>

        <div className="p-4 border-t text-center">
          <Button
            variant="outline"
            className="text-teal-500 border-teal-500 hover:bg-teal-50"
          >
            Export activity log to CSV
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
