import axios from 'axios';

const instance=axios.create({
    baseURL:'https://react-my-burger-a5b34.firebaseio.com/'
});

export default instance;