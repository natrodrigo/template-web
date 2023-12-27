import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <div className="min-h-screen flex bg-zinc-800 text-zinc-50">
        <div className="flex flex-1">
          <SideBar/>
          <main className="flex-1 flex flex-col">
            <Header />
            <Content />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
