import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID Frl5N-XDLYVcCAZ0Cx9GcTgw2q7wp7p8NyebEKEjv0g'
    }
});