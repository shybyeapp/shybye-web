import { createContext, useContext, useState } from "react";

const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <ChallengeContext.Provider value={{ data, setData }}>
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallengeContext = () => {
  return useContext(ChallengeContext);
};
