import Header from "./components/Header";
// import AboutGrid from "./components/AboutGrid";
import ClientsGrid from "./components/ClientsGrid";
import ContactBlock from "./components/ContactBlock";
// import Services from "./components/Services";
// import Projects from "./components/Projects";
import AboutLine from "./components/AboutLine";
import ServicesBlock from "./components/ServicesBlock";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen max-w-screen bg-black flex  ">
      <div className="flex flex-col items-center bg-black">
        <div className="flex flex-col items-center gap-y-4  w-[95%] md:w-[85%] lg:w-[75%] bg-black">
          <Header className="" />
          <AboutLine />
          <ServicesBlock className="" />
          {/* <AboutGrid className="md:py-8" /> */}
          <ContactBlock className="" />
          {/* <Services className="py-8" /> */}
          <ClientsGrid className="" />
        </div>
        {/* <div className="md:max-w-[85%] w-[95%]">
          <Projects id="Projects" />
        </div> */}

        {/* <div id="Projects">test</div> */}
      </div>
    </div>
  );
}
