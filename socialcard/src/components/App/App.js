import React, { Component } from 'react';
import './App.css';
import SocialCard from '../socialcard/socialcard';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        Card: {
        CardPoster:'Card Poster',
        CardPosterInfo: 'This is a great article for React.JS',
        CardPosterLink:'Card Poster Link',
        DatePosted: 'Date Posted',
        ArticleImgURL: 'https://reactjs.org/logo-og.png',
        ArticleHeader:'Learn React? Start Small.',
        ArticleParagraph:'Welcome to the React Workshop. Here I will make tiny experiment apps.',
        ArticleURL:'Article URL',
        ArticleAuthor: '@articleAuthor',
        ArticleAuthorLink: 'Author Link',
        ArticleLink: 'Article Link',
        }
    };
  }
  
  render() {
    return (
      <div className="App">
      
        <SocialCard poster={this.state.Card.CardPoster} posterInfo={this.state.Card.CardPosterInfo}
        posterLink={this.state.Card.CardPosterLink} date={this.state.Card.DatePosted} imgURL={this.state.Card.ArticleImgURL}
        articleHeader={this.state.Card.ArticleHeader} articleParagraph={this.state.Card.ArticleParagraph}
        articleURL={this.state.Card.ArticleURL} articleAuthor={this.state.Card.ArticleAuthor}
        authorLink={this.state.Card.ArticleAuthorLink} articleLink={this.state.Card.ArticleLink}
        />
        
        <SocialCard poster={this.state.Card.CardPoster} posterInfo={this.state.Card.CardPosterInfo}
        posterLink={this.state.Card.CardPosterLink} date={this.state.Card.DatePosted} imgURL={this.state.Card.ArticleImgURL}
        articleHeader={this.state.Card.ArticleHeader} articleParagraph={this.state.Card.ArticleParagraph}
        articleURL={this.state.Card.ArticleURL} articleAuthor={this.state.Card.ArticleAuthor}
        authorLink={this.state.Card.ArticleAuthorLink} articleLink={this.state.Card.ArticleLink}
        />
        
      </div>
    );
  }
}

export default App;
