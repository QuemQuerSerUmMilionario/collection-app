import SideNav from "@components/SideNav";
import Nav from "@components/Nav";
const HomeLayout = ({ children }) => {
    return (
      <main className="w-full">
          <Nav />
          <div className="max-w-[80rem] w-full flex justify-between">
            <SideNav/>
            <div className="w-full flex flex-col justify-start items-center">
                {children}
            </div>
          </div>
      </main>
    );
  };
  
  export default HomeLayout;