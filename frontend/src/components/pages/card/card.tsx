// ServerCard.tsx
import React from "react";

interface Server {
  serverId: string;
  serverName: string;
  ip: string;
  companyName: string;
  status: "Active" | "Inactive"; //
  creationTime: string;
  companyId: string;
}

interface CardProps {
  server: Server;
}

const ServerCard: React.FC<CardProps> = ({ server }) => {
  return (
    <div className="Card">
      <h2>{server.serverName}</h2>
      <p>ip{server.ip}</p>
      <p> Status:{server.status}</p>
      <p>Company:{server.companyName}</p>
      <p>Company id:{server.companyId}</p>
      <p>Created at:{server.creationTime}</p>
    </div>
  );
};

export default ServerCard;
