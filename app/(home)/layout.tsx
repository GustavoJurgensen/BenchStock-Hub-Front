"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import Sider from "@/components/main/navigation/sider/Sider";
import Header from "@/components/main/navigation/Header";
import { useState } from "react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsedSideBar, setCollapsedSideBar] = useState(false);
  return (
    <SidebarProvider
      open={collapsedSideBar}
      onOpenChange={(open) => setCollapsedSideBar(open)}
    >
      <Sider />
      <main className="flex flex-col w-full h-full divide-y">
        <Header className="p-3 w-full" collapsedSideBar={collapsedSideBar} />
        <div className="p-3 w-full flex-1">{children}</div>
      </main>
    </SidebarProvider>
  );
}
