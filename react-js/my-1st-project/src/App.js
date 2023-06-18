import React from "react";

// functional component
class App extends React.Component {
  print = () => {
    console.log(this);
  };
  render() {
    return (
      <>
        <center>
          <h1>Hello</h1>
          <button onClick={this.print}>Button</button>
        </center>
      </>
    );
  }
}
// function App() {
//   let print = () => {
//     console.log(this);
//   };
//   return (
//     <>
//       <center>
//         <h1>Hello</h1>
//         <button onClick={print}>Button</button>
//       </center>
//     </>
//   );
// }

// import React from "react";

// class App extends React.Component {
//   render() {
//     return <h1>Hello</h1>;
//   }
// }

export default App;
