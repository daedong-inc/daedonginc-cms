import { createRoot } from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

//로딩 라이브러리
import "nprogress/nprogress.css";

import App from "./App";
import { SidebarProvider } from "./contexts/SidebarContext";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <HelmetProvider>
    <SidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarProvider>
  </HelmetProvider>
);
