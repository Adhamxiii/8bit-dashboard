"use client";

import { SidebarProvider } from "../ui/sidebar";
import DashboardContent from "./DashboardContent";
import DashboardSidebar  from "./DashboardSidebar";

const DashboardPage = () => {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <DashboardSidebar />
                <DashboardContent />
            </div>
        </SidebarProvider>
    );
}

export default DashboardPage