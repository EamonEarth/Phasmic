import Header from "./components/Header";
import ClientsGrid from "./components/ClientsGrid";
import ContactBlock from "./components/ContactBlock";
import AboutLine from "./components/AboutLine";
import ServicesBlock from "./components/ServicesBlock";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen max-w-screen bg-black flex  ">
      <div className="flex flex-col items-center bg-black">
          <Header className="" />
          <div className="flex flex-col items-center gap-y-4 my-auto w-[95%] md:w-[85%] lg:w-[75%] bg-black">
            <AboutLine />
            <ServicesBlock className="" />
            <ContactBlock className="" />
            <ClientsGrid className="" />
          </div>
      </div>
    </div>
  );
}
