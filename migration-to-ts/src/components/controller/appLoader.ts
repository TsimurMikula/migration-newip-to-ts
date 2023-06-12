import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: 'd4009ad3bf9e4afa9db01c104ef3bd0e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
