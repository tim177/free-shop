/* eslint-disable @next/next/no-img-element */
"use client";

import { Bell, Search } from "lucide-react";
import type { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { WavyBackground } from "../wavy-background";

interface MainLayoutProps {
  children: ReactNode;
  activeItem?: string;
}

export function MainLayout({
  children,
  activeItem = "Dashboard",
}: MainLayoutProps) {
  return (
    <WavyBackground>
      <div className="flex h-screen p-8">
        <Sidebar activeItem={activeItem} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-transparent p-4 flex items-center">
            <div className="flex-1 flex items-center">
              <div className="relative w-96">
                <input
                  type="text"
                  className="w-full bg-white/30 backdrop-blur-sm rounded-md pl-4 pr-10 py-2 text-white placeholder-white/70 focus:outline-none"
                  placeholder="Search..."
                />
                <button className="absolute right-0 top-0 h-full px-3 bg-teal-500 rounded-r-md">
                  <Search className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2">
                <Bell className="h-6 w-6 text-white" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="h-10 w-10 rounded-full bg-white overflow-hidden">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </header>

          <div className="w-[95%] border-t border-white my-4 mx-8"></div>

          {/* Dashboard Content */}
          <main className="flex-1 scrollbar-hidden overflow-y-auto px-6">
            {children}
          </main>
        </div>
      </div>
    </WavyBackground>
  );
}
