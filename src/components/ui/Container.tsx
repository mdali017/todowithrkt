import { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
};

const Container = ({ children }: TContainer) => {
  return <div className="h-screen  max-w-7xl mx-auto">{children}</div>;
};

export default Container;
