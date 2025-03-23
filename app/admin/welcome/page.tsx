"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/page-container";
import Image from "next/image";
// import { Logo } from "@/components/logo"

export default function WelcomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/admin/profile");
  };

  return (
    <PageContainer>
      <div className="w-full max-w-3xl bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
        <div className="border-2 border-blue-400 rounded-3xl m-2 p-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <Image src="/bird_2.jpg" alt="logo" width={150} height={150} />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Welcome</h1>
              <p className="text-xl text-orange-500 font-medium">
                to the Free Shops App Admin Panel
              </p>
            </div>
            <p className="text-gray-600 max-w-md">
              Manage and monitor all aspects of your app seamlessly from one
              place. Use the tools below to get started.
            </p>
            <Button
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 px-8 mt-4"
            >
              Get Start
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
