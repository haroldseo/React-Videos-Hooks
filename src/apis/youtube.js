import axios from 'axios'

const KEY = 'AIzaSyD3Fa48P5lKvadLvZzBQ0OhDXHwcaPZJQE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})