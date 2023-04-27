import { Home, Profile, Pricing, Environment } from "@/pages";
import {
  HomeIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "主頁",
    path: "/home",
    element: <Home />,
  },
  {
    icon: BuildingLibraryIcon,
    name: "環境設施",
    path: "/environment",
    element: <Environment />,
  },
  {
    icon: CurrencyDollarIcon,
    name: "收費",
    path: "/pricing",
    element: <Pricing />,
  },
  {
    icon: InformationCircleIcon,
    name: "關於我們",
    path: "/about",
    element: <Profile />,
  },
];

export default routes;
