import { ReactNode } from "react";

interface IMainProps {
  children: ReactNode;
}

export function Main({ children} : IMainProps ) {
  return (
    <main>
      <div className="container">
        {children}
      </div>
    </main>
  )
}
