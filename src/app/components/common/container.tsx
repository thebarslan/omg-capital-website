import React, { ReactNode } from "react";

type ContainerProps = {
   children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
   return (
      <div className="w-full max-w-[1350px] mx-auto h-auto flex xl:px-0 px-6">
         {children}
      </div>
   );
};

export default Container;
