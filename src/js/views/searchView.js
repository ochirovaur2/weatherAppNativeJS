import { elements }from './base';

export const getInput = () => elements.cityName.value;

export const clearInput = () => {

	elements.cityName.value = "";

};

export const renderResults = (data) => {

	console.log(data.main)
	const markup = `
	<p>Today in ${data.name} is ${Math.floor(data.main.temp - 273)}&#176;
	</p> 
	
	`
	elements.weatherDiv.insertAdjacentHTML('beforeend', markup);

}
export const clearResults = () => {
	elements.weatherDiv.innerHTML = "";
}