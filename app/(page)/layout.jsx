import Nav from "@components/Nav";
const PageLayout = ({ children }) => {
    return (
      <main className="w-full">
          <Nav />
          <div className="max-w-[80rem] w-full flex justify-between">
            <div className="w-full flex flex-col justify-start items-center">
                {children}
            </div>
          </div>
      </main>
    );
  };
  
  export default PageLayout;