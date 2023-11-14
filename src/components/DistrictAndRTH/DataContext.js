import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [showDetail, setShowDetail] = useState(false);

  const showDetailCard = () => {
    setShowDetail(true);
  };

  const hideDetailCard = () => {
    setShowDetail(false);
  };
};