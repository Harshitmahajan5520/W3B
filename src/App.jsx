import BlurBackground from "./components/BlurBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TeamMembers from "./components/TeamMembers";
import EventPage from "./components/Event";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import About from "./components/About";
import MissionVision from "./components/Mission";
import Tech from "./components/Tech";
import ContactUs from "./components/Contact";
import CustomCursor from "./customCursor";

function App() {
  return (
    <MantineProvider>
      <CustomCursor/>
      <main className="antialiased overflow-hidden max-w-7xl mx-auto relative z-10">
        <BlurBackground />
        <Navbar />
        <div id="Home">
        <Hero />
        <MissionVision/>
        <Tech />
        </div>
        <div id="TeamMembers" className="mt-5">
          <TeamMembers />
        </div>
        <div id="EventPage" className="mt-auto">
        <EventPage />
        </div>
       <div id="About">
        <About />
       </div>
       <div id="Contact">
        <ContactUs/>
       </div>
      </main>
    </MantineProvider>
  );
}

export default App;
