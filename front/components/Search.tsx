import algoliasearch from "algoliasearch/lite";
import SearchResult from "../hooks/algolia/algolia";
import { SearchBox, InstantSearch, Configure } from "react-instantsearch-dom";
import "instantsearch.css/themes/algolia.css";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ""
);

const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX || "";

export default function Search(): JSX.Element {
  return (
    <>
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <Configure hitsPerPage={60} />
        <SearchBox translations={{ placeholder: "食材、または料理名を入力" }} />
        <SearchResult />
      </InstantSearch>
    </>
  );
}
