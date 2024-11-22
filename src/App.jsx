import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <>
      <Header />
      <section className="flex justify-between ">
        <div className="w-64">
          <SideBar />
        </div>
        <div className="w-10/12 p-3 border-1 bg-[#f5f5f5]">
          <Layout />
        </div>
      </section>
    </>
  );
};

export default App;
