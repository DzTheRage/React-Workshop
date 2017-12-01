import React from 'react';
import './socialcard.css';

class SocialCard extends React.Component{
    
    render(){
       return (
        <div className="CardContainer">
          <div className="CardInfo">
            <h2>
              <a href={this.props.posterLink}>{this.props.poster}</a>
            <span> @{this.props.poster} - {this.props.date}</span>
            </h2>
            <p>{this.props.posterInfo}</p>
            <p>
                <a href={this.props.authorLink} className="authorLink">{this.props.author}</a>
            </p>
          </div>
        <a href={this.props.articleLink}>
          <div className="CardImgCaption">
            <div className="CardMaterials">
                <img className="ImgCss" src={this.props.imgURL} />
                <h2>{this.props.articleHeader}</h2>
                <p>{this.props.articleParagraph}</p>
                <p>
                  <span>
                    {this.props.articleURL}
                  </span>
                </p>
            </div>
          </div>
        </a>
          <div className="CardStats">
            <div className="StatDiv">
              <a href="#">
                <p className="Stat">
                    <i className="fa fa-comment-o" aria-hidden="true">
                         <span className="iconNumber">2</span>
                    </i>
                </p>
              </a>
            </div>
            <div className="StatDiv">
             <a href="#2">
              <p className="Stat">
                <i className="fa fa-retweet" aria-hidden="true">
                    <span className="iconNumber">47</span>
                </i>
              </p>
             </a>
            </div>
            <div className="StatDiv">
             <a href="#3">
              <p className="Stat">
                <i className="fa fa-heart" aria-hidden="true">
                    <span className="iconNumber">190</span>
                </i>
              </p>
             </a>
            </div>
            <div className="StatDiv">
             <a href="#4">
              <p className="Stat">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </p>
             </a>
            </div>
          </div>
        </div>
       )
    }
}

export default SocialCard