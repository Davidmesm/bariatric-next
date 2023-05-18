import { ReactNode } from "react";
import {
  CircleStackIcon,
  CurrencyDollarIcon,
  HomeIcon,
  RectangleGroupIcon,
  ShoppingCartIcon,
  TagIcon,
  TruckIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export type route = {
  key: string;
  to: string;
  label?: string;
  icon?: ReactNode;
  children?: Array<route>;
};

const routesConfig = [
  {
    to: "/",
    label: "Panel Principal",
    key: "home",
    icon: <HomeIcon className="icon" />,
  },
  {
    to: "/sale",
    label: "Ventas",
    key: "sales",
    icon: <ShoppingCartIcon className="icon" />,
  },
  {
    to: "/delivery",
    label: "Envíos",
    key: "delivery",
    icon: <TruckIcon className="icon " />,
  },
  {
    to: "/client",
    label: "Clientes",
    key: "clients",
    icon: <UsersIcon className="icon " />,
  },
  {
    to: "/vendor",
    label: "Vendedores",
    key: "vendor",
    icon: <UserGroupIcon className="icon " />,
  },
  {
    to: "/commission",
    label: "Comisiones",
    key: "commission",
    icon: <CurrencyDollarIcon className="icon " />,
    children: [
      {
        to: "/client",
        label: "Clientes",
        key: "commissionClient",
      },
      {
        to: "/vendor",
        label: "Vendedores",
        key: "commissionVendor",
      },
    ],
  },
  {
    to: "/product",
    label: "Productos",
    key: "product",
    icon: <TagIcon className="icon " />,
  },
  {
    to: "/warehouse",
    label: "Inventario",
    key: "warehouse",
    icon: <CircleStackIcon className="icon " />,
  },
  {
    to: "/catalog",
    label: "Catalogo",
    key: "catalog",
    icon: <RectangleGroupIcon className="icon " />,
    children: [
      {
        to: "/contactChannel",
        label: "Canales de Contacto",
        key: "contactChannel",
      },
      {
        to: "/priceType",
        label: "Tipos de Precio",
        key: "priceType",
      },
      {
        to: "/banks",
        label: "Bancos",
        key: "banks",
      },
      {
        to: "/bankAccount",
        label: "Cuentas de Banco",
        key: "bankAccount",
      },
      {
        to: "/paymentType",
        label: "Formas de Pago",
        key: "paymentType",
      },
      {
        to: "/nutritionist",
        label: "Nutriólogos o Grupos",
        key: "nutritionist",
      },
      {
        to: "/surgery",
        label: "Cirugías",
        key: "surgery",
      },
      {
        to: "/parcelService",
        label: "Servicios de Paquetería",
        key: "parcelService",
      },
      {
        to: "/clientType",
        label: "Tipo de Cliente",
        key: "clientType",
      },
      {
        to: "/defaultAddress",
        label: "Dirección Default",
        key: "defaultAddress",
      },
    ],
  },
];

export default routesConfig
