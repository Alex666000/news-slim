import axios from 'axios'

export const getNews = async () => {
    try {
        const response = await axios.get('https://api.currentsapi.services/v1/latest-news', {
            params: {
                apiKey: 'cXj1vjsoa167Qqlq6mqxwdCdVZlbkID3L-M36s9hKv3SJqXY'
            }
        })
        return response.data

    } catch (error) {
        console.log(error)
    }
}
