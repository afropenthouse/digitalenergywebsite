import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "@/context/SearchContext";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;