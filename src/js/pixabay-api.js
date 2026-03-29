import axios from "axios";

export const serverApi = axios.create({
    baseURL: 'https://pixabay.com/api/',
      params: {
        key: '55176910-b129664d9c533e9cf4d6ff537',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 15
    }
});


export const getImagesByQuery = async (query, page) => {
    try {
        const serverRequest = await serverApi.get('', { params: { q: query, page: page } });
        return serverRequest.data;
    } catch(error) {console.error(error); throw error;
        
    }
};