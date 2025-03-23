import type { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
  className?: string;
}

export function CardContainer({
  children,
  className = "",
}: CardContainerProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm p-8 ${className}`}>
      {children}
    </div>
  );
}
