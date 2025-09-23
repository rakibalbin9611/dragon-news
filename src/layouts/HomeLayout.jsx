import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/LeftAside";
import RightAside from "../components/homeLayout/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      {/* Header */}
      <header>
        <Header />
        {/* latest news react fast marquee */}
        <section className="w-11/12 mx-auto my-3">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto mt-8">
          <Navbar />
        </nav>
      </header>

      {/* Main section */}
      <main className="w-11/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Left Sidebar → hidden on small, visible on large */}
        <aside className="hidden lg:block lg:col-span-3 top-0 h-fit sticky">
          <LeftAside />
        </aside>

        {/* Main Content → full width on mobile, half on desktop */}
        <section className="col-span-1 md:col-span-8 lg:col-span-6">
          {state == "loading" ? <Loading></Loading> : <Outlet />}
        </section>

        {/* Right Sidebar */}
        <aside className="hidden md:block md:col-span-4 lg:col-span-3 top-0 h-fit sticky">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
