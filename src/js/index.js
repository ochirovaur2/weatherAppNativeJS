
import Search from './modules/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';
const state = {};

const controlSearch = async () => {
	// 1. Get query from UI
	const query = searchView.getInput();

	if(query) {
		// 2. New Search object and add to the state

		state.search = new Search(query);
		
		// Prepare UI

		searchView.clearInput();
		searchView.clearResults();

		// Do search

		await state.search.getResults();
		console.log(state.search.result)

		//Render results

		searchView.renderResults(state.search.result.data);

	}
}


elements.searchBtn.addEventListener('click', function(){
	controlSearch();
});
