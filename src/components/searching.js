import {rules, createComparison} from "../lib/compare.js";

export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    const configuredSearch = rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false);
    rules.executeSearch = () => configuredSearch;
    const compare = createComparison(['skipEmptyTargetValues', 'executeSearch']);

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data.filter(item => compare(item, state));
    }
}
