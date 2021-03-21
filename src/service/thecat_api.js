class CatFetch{
    constructor(){
        let myHeaders = new Headers();
        let catsApi = process.env.REACT_APP_THE_CATS_API_KEY;
        myHeaders.append("key", catsApi);

        this.requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
    }

    async cat(){
        const response = await fetch("https://api.thecatapi.com/v1/breeds", this.requestOptions)
        const result = await response.json();
        return result;
    }

    async pickCat(){
        const response = await fetch("https://api.thecatapi.com/v1/images/search?breed_ids=abys&limit=8", this.requestOptions)
        const result = await response.json();
        return result;
    }

    async pickChangeCat(query){
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${query}&limit=8`, this.requestOptions)
        const result = await response.json();
        return result;
    }

}

export default CatFetch;