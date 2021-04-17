const axios = require('axios').default;

module.exports = async (title) => {
    try{
        const movie = await axios.get(`http://www.omdbapi.com/`,{
            params:{
                t:title,
                apiKey:process.env.OMDB_API_KEY
            }
        })
        return movie.data.Poster
    } catch(err) {
        return err
    }
}