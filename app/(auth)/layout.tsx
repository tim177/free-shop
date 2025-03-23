import { PageContainer } from "@/components/ui/page-container";
import Image from "next/image";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <PageContainer>
      <div className="w-full max-w-6xl h-[600px] bg-gray-100 rounded-3xl flex overflow-hidden shadow-lg">
        {/* Left side with logo */}
        <div className="w-1/2 relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <Logo size="lg" /> */}
            <Image src="/bird_2.jpg" alt="logo" width={150} height={150} />
          </div>
          {/* Vertical red line */}
          <div className="absolute right-0 h-full w-0.5 flex items-center justify-center">
            <div className="h-[90%] w-0.5 bg-brand relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-brand"></div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-brand"></div>
            </div>
          </div>
        </div>

        {/* Right side with form */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-sm">
            {children}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
