import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia.css";
import SearchResult from "../hooks/algolia";
import { SearchBox, InstantSearch, Configure } from "react-instantsearch-dom";

const algoliaSettings = {
  searchClient: algoliasearch(`JXD32XW6C6`, `cf86a070eb44ee82d3620a22dcaa99c8`),
  indexName: "kalo-navi!",
};

export default function Search(): JSX.Element {
  return (
    <>
      <InstantSearch
        searchClient={algoliaSettings.searchClient}
        indexName={algoliaSettings.indexName}
      >
        <Configure hitsPerPage={60} />
        <SearchBox translations={{ placeholder: "食材、または料理名を入力" }} />
        <SearchResult />
      </InstantSearch>
    </>
  );
}
