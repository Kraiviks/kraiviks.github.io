export default class GoTService {
	constructor(){
		this._apiBase = 'https://www.anapioficeandfire.com/api';
	}

	async getResourse(url){
			const res = await fetch(`${this._apiBase}${url}`);

			if (!res.ok){
				throw new Error(`Could not fetch ${url}, status: ${res.status}`);
			}	
			return await res.json();;
		};
	
    async getAllCharacters(){
        const res = await this.getResourse('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacters);
	}
	async getCharacter(id){
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacters(character);
    }
    getAllHouses(){
        return this.getResourse('/houses');
    }
    getHous(id){
        return this.getResourse(`/houses/${id}`);
    }
    getBooks(){
        return this.getResourse('/books');
    }
    getBook(id){
        return this.getResourse(`/books/${id}`);
    }

    _transformCharacters(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}