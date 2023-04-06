import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import {Route, Routes} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API;
  pagesize=5;
  state={progress:0}
  setProgress=(progress)=>{
    this.setState({progress:progress})
    
  }
  render() {
    return (       
      <div>
        
        <Navbar/>
        <LoadingBar color="#f11946" progress={this.state.progress}  />
        <Routes>
          <Route exact path="/" element={<News setPorgress={this.setProgress} apikey={this.apikey} key="general" pagesize={this.pagesize} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News setPorgress={this.setProgress} apikey={this.apikey} key="business" pagesize={this.pagesize} country="in" category="business"/>}/>
          <Route exact path="/general" element={<News setPorgress={this.setProgress} apikey={this.apikey} key="general" pagesize={this.pagesize} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News setPorgress={this.setProgress} apikey={this.apikey} key="health" pagesize={this.pagesize} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News setPorgress={this.setProgress} apikey={this.apikey} key="science" pagesize={this.pagesize} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News setPorgress={this.setProgress} apikey={this.apikey} key="sports" pagesize={this.pagesize} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News setPorgress={this.setProgress} apikey={this.apikey} key="technology" pagesize={this.pagesize} country="in" category="technology"/>}/>
        </Routes>
        </div>

        
      
    )
  }
}
