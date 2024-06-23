import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;


// import React from "react";
// import Cookies from "universal-cookie";
// import Login from './components/Login';
// import Register from './components/Register';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// // Instantiating Cookies class by creating cookies object
// const cookies = new Cookies();

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       password: "",
//       error: "",
//       isAuthenticated: false,
//     };
//   }

//   componentDidMount = () => {
//     this.getSession();
//   }

//   // Get Session Method
//   getSession = () => {
//     fetch("/api/session/", {
//       credentials: "same-origin",
//     })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       if (data.isAuthenticated) {
//         this.setState({isAuthenticated: true});
//       } else {
//         this.setState({isAuthenticated: false});
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }

//   // Who Am I method
//   whoami = () => {
//     fetch("/api/whoami/", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "same-origin",
//     })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("You are logged in as: " + data.username);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }

//   handlePasswordChange = (event) => {
//     this.setState({password: event.target.value});
//   }

//   handleUserNameChange = (event) => {
//     this.setState({username: event.target.value});
//   }

//   isResponseOk(response) {
//     if (response.status >= 200 && response.status <= 299) {
//       return response.json();
//     } else {
//       throw Error(response.statusText);
//     }
//   }

//   // Login Method
//   login = (event) => {
//     event.preventDefault();
//     fetch("/api/login/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-CSRFToken": cookies.get("csrftoken"),
//       },
//       credentials: "same-origin",
//       body: JSON.stringify({username: this.state.username, password: this.state.password}),
//     })
//     .then(this.isResponseOk)
//     .then((data) => {
//       console.log(data);
//       this.setState({isAuthenticated: true, username: "", password: "", error: ""});
//     })
//     .catch((err) => {
//       console.log(err);
//       this.setState({error: "Wrong username or password."});
//     });
//   }

//   // Logout Method
//   logout = () => {
//     fetch("/api/logout", {
//       credentials: "same-origin",
//     })
//     .then(this.isResponseOk)
//     .then((data) => {
//       console.log(data);
//       this.setState({isAuthenticated: false});
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }

//   // UI Rendering using bootstrap
//   render() {
//     if (!this.state.isAuthenticated) {
//       return (
//         <Router>
//           <div className="container mt-3">
//             <Switch>
//               <Route path="/register" component={Register} />
//               <Route path="/login" component={Login} />
//               <Route path="/" render={() => (
//                 <div>
//                   <h1>Sepapp Auth</h1>
//                   <br />
//                   <h2>Login</h2>
//                   <form onSubmit={this.login}>
//                     <div className="form-group">
//                       <label htmlFor="username">Username</label>
//                       <input type="text" className="form-control" id="username" name="username" value={this.state.username} onChange={this.handleUserNameChange} />
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="password">Password</label>
//                       <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
//                       <div>
//                         {this.state.error && <small className="text-danger">{this.state.error}</small>}
//                       </div>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Login</button>
//                   </form>
//                 </div>
//               )} />
//             </Switch>
//           </div>
//         </Router>
//       );
//     }
//     return (
//       <div className="container mt-3">
//         <h1>Sepapp Auth</h1>
//         <p>You are logged in!</p>
//         <button className="btn btn-primary mr-2" onClick={this.whoami}>WhoAmI</button>
//         <button className="btn btn-danger" onClick={this.logout}>Log out</button>
//       </div>
//     )
//   }
// }

// export default App;
