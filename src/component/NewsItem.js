import React, { Component } from "react";

export class NewsItem extends Component {
    

  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="my-4">
        <div className="card">
          <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2022/05/Bill-Ackman-770x433.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
