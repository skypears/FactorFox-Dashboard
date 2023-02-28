export type IMenuItem = {
    name: string;
  icon?: string;
  action?: () => void;
}

export const mainMenuItems: IMenuItem[] = [
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
export const navItems: IMenuItem[] = [
  { name: "Dashboard" },
  { name: "Setup" },
  { name: "Contacts" },
  { name: "Transactions" },
  { name: "Reports" },
  { name: "Graphs" },
  { name: "Payments Due" },
  { name: "Integrations" },
];

export const userMenuItems: IMenuItem[] = [
  { name: "Profile", icon: "person" },
  { name: "Settings", icon: "gear"},
  
];