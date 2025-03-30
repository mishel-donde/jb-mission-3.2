import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import List from "../../pages/list/List";
import ServerStatus from "../../pages/list/List";

export default function Routing(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/servers/list" />} />
      <Route path="/servers/list" element={<List />} />
      <Route path="/servers/status/:serverId" element={<ServerStatus />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
