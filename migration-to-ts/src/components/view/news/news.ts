import './news.css';
import { IArticle } from '../../../types/index';

class News {
  draw(data: IArticle[]) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment() as DocumentFragment;
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as HTMLDivElement;

      if (idx % 2) (newsClone.querySelector('.news__item') as HTMLDivElement).classList.add('alt');

      (newsClone.querySelector('.news__meta-photo') as HTMLDivElement).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      (newsClone.querySelector('.news__meta-author') as HTMLDivElement).textContent = item.author || item.source.name;
      (newsClone.querySelector('.news__meta-date') as HTMLDivElement).textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      (newsClone.querySelector('.news__description-title') as HTMLDivElement).textContent = item.title;
      (newsClone.querySelector('.news__description-source') as HTMLDivElement).textContent = item.source.name;
      (newsClone.querySelector('.news__description-content') as HTMLDivElement).textContent = item.description;
      (newsClone.querySelector('.news__read-more a') as HTMLDivElement).setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    (document.querySelector('.news') as HTMLDivElement).innerHTML = '';
    (document.querySelector('.news') as HTMLDivElement).appendChild(fragment);
  }
}

export default News;
