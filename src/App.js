import React, {Component} from 'react';
import './styles.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      topic: "overview"
    };
  }


  render(){
    return(
      <div className="App">
        <ul>
          <li><a href="#" onClick={() => this.setState({topic: "overview"})}>Overview</a></li>
          <li><a href="#" onClick={() => this.setState({topic: "coding"})}>Coding</a></li>
          <li><a href="#" onClick={() => this.setState({topic: "graphicdesign"})}>Graphic Design</a></li>
        </ul>
	<BioBar topic=this.state.topic />
	<BlogPostings topic=this.state.topic />
      </div>
    );
  }
}

export default App;
