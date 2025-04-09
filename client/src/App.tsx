import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import HomePage from "@/pages/HomePage";
import FlightsPage from "@/pages/FlightsPage";
import HotelsPage from "@/pages/HotelsPage";
import TrainsPage from "@/pages/TrainsPage";
import CabsPage from "@/pages/CabsPage";
import BusesPage from "@/pages/BusesPage";
import LogisticsPage from "@/pages/LogisticsPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";
import AIChatbot from "@/components/chat/AIChatbot";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/flights" component={FlightsPage} />
        <Route path="/hotels" component={HotelsPage} />
        <Route path="/trains" component={TrainsPage} />
        <Route path="/cabs" component={CabsPage} />
        <Route path="/buses" component={BusesPage} />
        <Route path="/logistics" component={LogisticsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
      
      <AIChatbot />
      <Toaster />
    </>
  );
}

export default App;
