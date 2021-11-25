import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Contentstack from 'contentstack';

interface HomeContextProviderProps {
  children: ReactNode;
}

interface IHomeData {
  title: string;
  heading_1: string;
  description: string;
  modular_blocks: any[];
}

const Stack = Contentstack.Stack('blte54cc2953fcedc33', 'cs90c1b26251f7c1bfbe249ef4', 'dev');

const HomeContext = createContext<IHomeData>({} as IHomeData);

export function HomeContextProvider({ children }: HomeContextProviderProps) {
  const [homeData, setHomeData] = useState<IHomeData>({} as IHomeData);

  useEffect(() => {
    Stack.ContentType("homepage")
      .Query()
      .includeReference(['modular_blocks.featured_news.news'])
      .toJSON()
      .find()
      .then((result) => {
        setHomeData(result[0][0]);
        // console.log(result[0][0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <HomeContext.Provider value={homeData}>
      {children}
    </HomeContext.Provider>
  )
}

export function useHomeData() {
  const context = useContext(HomeContext);

  return context;
}