import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return window.location.pathname === "/" ? <Home /> : <NotFound />;
}
