export type IMenuItem = {
    name: string;
    icon?: string;
}

export const mainMenuItems = [
  { name: "Let's Chat", icon: "chat" },
  { name: "Calender", icon: "calendar" },
  { name: "Bank Files", icon: "clipboard" },
  { name: "QuickBooks", icon: "file-earmark" },
  { name: "Generate Ticket", icon: "ticket" },
  { name: "Ticket Status", icon: "calendar2-check" },
  { name: "Releases", icon: "arrow-counterclockwise" },
  { name: "Settings", icon: "gear-fill" },
  { name: "Logout", icon: "box-arrow-right" },
];
export const navItems = [
  { name: "Dashboard" },
  { name: "Setup" },
  { name: "Contacts" },
  { name: "Transactions" },
  { name: "Reports" },
  { name: "Graphs" },
  { name: "Payments Due" },
  { name: "Integrations" },
];

export const userMenuItems = [
  { name: "Profile" },
  { name: "Settings" },
  { name: "Logout" },
];