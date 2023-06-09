import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {

  articles= [
    {
        "source": {
            "id": "abc-news-au",
            "name": "ABC News (AU)"
        },
        "author": "Hamish Cole",
        "title": "How cricket hopes to inspire the next generation of Indigenous stars",
        "description": "Only eight Indigenous people have represented Australia in international cricket. An Aboriginal pathways program launched in central New South Wales is hoping to change that.",
        "url": "http://www.abc.net.au/news/2023-02-13/indigenous-cricketers-visit-orange-to-inspire-next-generation/101956794",
        "urlToImage": "https://live-production.wcms.abc-cdn.net.au/4273843cf270710bb72e589d6c8581b3?impolicy=wcms_crop_resize&cropH=1458&cropW=2592&xPos=0&yPos=243&width=862&height=485",
        "publishedAt": "2023-02-12T22:09:00Z",
        "content": "Only four First Nations people have represented Australia in Test cricket, but an Indigenous pathways program launched in regional New South Wales is hoping to change that. \r\nKey points:\r\n<ul><li>Mor… [+3937 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
]
 
  capitalized=(string)=>{
    string=(string.charAt(0).toUpperCase())+string.slice(1);
    return string;
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalarticle: this.totalarticle,
      totalResult: 0
    };
      document.title=`NewsMonkey-${this.capitalized(this.props.category)}`
  }

  async componentDidMount(){
    this.updatePage();
  }

  async updatePage(){
    this.props.setPorgress(0);
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.props.setPorgress(30);
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedata = await data.json(data);
    this.props.setPorgress(60);
    this.setState({articles : parsedata.articles,
    loading: false,
    totalResult: parsedata.totalResults})
    this.props.setPorgress(100);
    }

  fetchMoreData = async() => {
  this.setState({page: this.state.page+1})
  const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
  let data = await fetch(url);
  let parsedata = await data.json(data);
  this.setState({
  articles : this.state.articles.concat(parsedata.articles),
  totalResult: parsedata.totalResults})
  };

  render() {
    return (
      <>
        <h1 className="my-2 text-center">NewsMonkey-Top {this.capitalized(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResult}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          { this.state.articles.map((e)=>{
            return <div className="col-md-4" key={e.url}>
            <NewsItem title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt}/>
          </div>
          })}
          
        </div>
        </div>
        </InfiniteScroll>
      </>
    );
  } 
}

export default News;
