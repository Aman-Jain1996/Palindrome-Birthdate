import { useState } from 'react';
import './App.css';
import {validateDate} from "./palindrome.js"

function App() {

  const [date,setDate] =useState("");
  const[result,setResult]=useState();
  const[clr,setColor]=useState("");

  function resetHandler() {
    setDate("");
    setResult("");
    setColor("");
    document.querySelector(".input").value="";
    document.querySelector(".result-div").style.display="none" ;    
  }

  function onClickHandler(){
    document.querySelector(".result-div").style.display="block" ;
    setResult(<img alt="" style={{width:"200px" , heigth:"80px"}} src="https://media.giphy.com/media/MEiZ5h8lOkM7rwideE/giphy.gif"></img>)
    setTimeout( () => { 
  
      document.querySelector(".result-div").style.border = "3px solid var(--primary-color)" ; 
      document.querySelector(".result-div").style.padding = "1rem" ;
    if(res.err===0) {
      setResult("Date field can't be empty");
      setColor("red");
    }
    
  else if(res.err===1){
    setResult("Wrong Input! Birthdate can't be future date");
    setColor("red");
    }
  else {
    if(res.err!==2){
      setResult("Hurray!! '" + res.data + "' is a palindrome date using format '" + res.format + " '");
      setColor("");
    }
    else{
      // console.log(res);
      setColor("");
      setResult(`Opps!! DOB entered is not palindrome  ,  Nearest palindrome date is :- '${res.next[0].data}' , you missed it by ${res.next[1]} days`);
    }
  } } ,3000)

    let res = validateDate(date);
  }

  function onChangeHandler(e){
    setDate(e.target.value);
  }

  return (
    <div className="App">
      <header className="header-container">
        <div className = "hero-container" >
          <div className="repo">
            <a href="https://github.com/Aman-Jain1996/Palindrome-Birthdate" target="_blank" rel="noreferrer" title="Github Repository"><i className="fa fa-github fa-3x"></i></a> Github link to this project repository
          </div>
        </div>
        <section className="content-img-container">
        <div className="content-div">
          <h1>Check out if your <span>Birthdate</span> is <span>Palindrome</span> .</h1>
          <p>A palindrome is a word/number which reads the same backward as forward</p>
          <button><a href="#mainContent-section">Click here to Check</a></button>
        </div>
        <div className="image-container">
          <img alt=""src="https://media.istockphoto.com/photos/calendar-concept-picture-id698058468"></img>
        </div>
        </section>
      </header>
      <section id="mainContent-section">
        <h1>
        Enter your birthdate and relax, we will tell you if your birthdate is a palindrome or not
        </h1>
        <p>
        This app checks your birthdate in 4 formats yyyy-mm-dd, dd-mm-yyyy, mm-dd-yy, m-dd-yyyy
e.g. if your birthdate is 01 Aug 1995, then app will check for 19950801, 01081995, 080195, 8011995
        </p>
        <input type="date" className="input" onChange={onChangeHandler} />
        <button className="ok-button" onClick={onClickHandler}>Check</button>
        <button id= "reset-button" onClick={resetHandler}>Reset</button>
        <div className="result-div" style={{color:clr}}>{result}</div>
      </section>
      <footer>
        <span className="footer-span">Connect me at :</span>
        <div className="flex">
          <a
            href="https://www.instagram.com/ajain8479"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa fa-instagram fa-lg" title="Instagram"></i>
          </a>
          <a
            href="https://twitter.com/ajain84791"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa fa-twitter fa-lg" title="Twitter"></i>
          </a>
          <a
            href="https://portfolio-amanjain.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-briefcase fa-lg" title="Portfolio"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aman-jain-8082b510a/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin fa-lg" title="LinkedIn"></i>
          </a>
        </div>
        <p>
          Made with{" "}
          <span role="img" aria-label="">
            💛
          </span>{" "}
          by @AJ-Creations
        </p>
      </footer>
    </div>
  );
}

export default App;
