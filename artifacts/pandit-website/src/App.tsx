import { Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import ServicePujaPage from "@/pages/ServicePujaPage";
import { SERVICE_PUJA_PAGES } from "@/data/servicePujaPages";
import { localBusinessJsonLd } from "@/data/localBusinessSchema";
import { useJsonLd } from "@/hooks/usePageMeta";
import { normalizePathname } from "@/lib/pathname";

const queryClient = new QueryClient();

function LocalBusinessSchema() {
  useJsonLd(localBusinessJsonLd, "schema-local-business");
  return null;
}

function Router() {
  const [location] = useLocation();
  const path = normalizePathname(location);

  if (path === "/") {
    return <Home />;
  }
  if (SERVICE_PUJA_PAGES[path]) {
    return <ServicePujaPage />;
  }
  return <NotFound />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <LocalBusinessSchema />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
