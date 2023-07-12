'use client';

import React, { createContext, Dispatch, useContext, useState } from 'react';

export const UserContext = createContext<{
  userName: string|undefined;
  setUserName: Dispatch<string|undefined>;
}>({ userName: undefined, setUserName: () => null });

export const UserContextProvider = (
  {
    children,
  }: {
    children: React.ReactNode;
  }) => {
  const [userName, setUserName] = useState<string>();

  return (
    <UserContext.Provider value={ { userName, setUserName } }>
      { children }
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
}