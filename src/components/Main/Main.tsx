import { ReactNode } from "react";

interface IMainProps {
  children: ReactNode;
}

export function Main({ children} : IMainProps ) {
  return (
    <main>
      <div className="o-container">
        {children}
      </div>
    </main>
  )
}
