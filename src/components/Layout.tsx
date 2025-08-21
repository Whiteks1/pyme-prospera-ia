import { ReactNode } from "react";
import ChatbotWidget from "./ChatbotWidget";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <main>{children}</main>
      <ChatbotWidget />
    </div>
  );
}