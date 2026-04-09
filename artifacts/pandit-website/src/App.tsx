import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import SatyanarayanPujaNagpur from "@/pages/SatyanarayanPujaNagpur";
import { localBusinessJsonLd } from "@/data/localBusinessSchema";
import { useJsonLd } from "@/hooks/usePageMeta";

const queryClient = new QueryClient();

function LocalBusinessSchema() {
  useJsonLd(localBusinessJsonLd, "schema-local-business");
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route
        path="/satyanarayan-puja-nagpur"
        component={SatyanarayanPujaNagpur}
      />
      <Route component={NotFound} />
    </Switch>
  );
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
