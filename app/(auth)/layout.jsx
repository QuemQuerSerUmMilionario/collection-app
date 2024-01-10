const AuthLayout = ({ children }) => {
    return (
      <main className="app w-full h-full">
         <div className="max-w-[80rem] m-auto w-full flex justify-between">
            {children}
          </div>
      </main>
    );
  };
  
  export default AuthLayout;