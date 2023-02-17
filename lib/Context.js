import React, { useState } from "react";

export const Context = React.createContext();
const links = [
  { name: "movie", icon: "film" },
  { name: "serie", icon: "tv" },
  { name: "game", icon: "gamepad" },
];
const ContextProvider = (props) => {
  const [state, setState] = useState({
    query: "",
    links: links,
    active: links[0],
  });
  const setActive = (link) => {
    setState({ ...state, active: link });
  };
  const setQuery = (input) => {
    setState({ ...state, query: input });
  };
  const value = React.useMemo(() => {
    return {
      state,
      setActive,
      setQuery,
    };
  }, [state.query, state.active]);
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default ContextProvider;
