import fetch from "node-fetch";

import List from "../components/List";
function Serie({ results }) {
  console.log({ results });
  return (
    <>
      <List results={results} />
    </>
  );
}
Serie.getInitialProps = async ({
  req,
  res,
  match,
  history,
  location,
  ...ctx
}) => {
  const search = ctx?.query?.query ?? "";
  // Get external data from the file system, API, DB, etc.
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=158fe49&s=${search}&type=series`
  );
  const data = (await response.json()) ?? [];
  const results = data.Search ?? [];

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    results,
  };
};
export default Serie;
