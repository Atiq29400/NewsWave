import React from 'react';

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source, theme } = props;

  const cardClass = theme === 'dark' ? 'card text-white bg-dark' : 'card customLight';

  return (
    <div className="my-3">
      <div className={cardClass} style={{ height: '31rem' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." style={{ objectFit: 'cover', height: '40%' }} />
        <div className="card-body" style={{ height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{description}</p>
          <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className={theme === 'dark' ? 'btn btn-sm btn-secondary' : 'btn btn-sm btn-dark'} style={{ marginTop: 'auto' }}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
