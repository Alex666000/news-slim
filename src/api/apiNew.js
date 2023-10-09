import axios from 'axios'

export const getNews = async () => {
    try {
        const response = await axios.get('https://api.currentsapi.services/v1/latest-news', {
            params: {
                apiKey: 'HvM0Wi9uuxXGeAeNvqKFBxRASYlBUmqcnGeZfNvF66XRrbd-'
            }
        })
        return response.data // Получили данные

    } catch (error) {
        console.log(error)
    }
}

