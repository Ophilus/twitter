import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form action="get_tweets" method="POST">
     		<h1>Search tweets!</h1>
    		<input type="text" name="handle" placeholder="Enter name user!" />
    		<br />
    		<input type="submit" value="Get Tweets!" />
  		</form>
      </div>
    );
  }
}

export default App;
