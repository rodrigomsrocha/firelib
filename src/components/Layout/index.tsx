import { FunctionComponent } from "react";
import { Navbar } from "../Navbar";

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      {children}
    </div>
  );
};
