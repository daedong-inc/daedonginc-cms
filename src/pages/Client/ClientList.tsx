import { Card } from "@mui/material";
import { Client } from "src/types/client";
import ClientCard from "./ClientCard";

const ClientList = () => {
  const clients: Client[] = [
    {
      name: "페리페라",
      image: "https://picsum.photos/300/150?random=${Math.random()}",
    },
    {
      name: "데이지크",
      image: "https://picsum.photos/300/150?random=${Math.random()}",
    },
  ];

  return <ClientCard clients={clients} />;
};

export default ClientList;
