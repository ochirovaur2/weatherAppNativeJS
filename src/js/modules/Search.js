import axios from "axios";

export default class Search {
	constructor(query){
		this.query = query;
	}
	async getResults(query){
		
		try {
			const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=c379d02dc4cc9d3763e60961e68ed11b`)
			this.result = res;

		} catch(error){
			console.log(error);
		}
	};
};