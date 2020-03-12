import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    {name:'Photography',price:'9.99',imageLink:''},
    {name:'All Apps',price:'52.99'},
    {name:'Photoshop',price:'20.99'},
    {name:'Illustrator',price:'20.99'}
     ]

 
  return (
    <div className="App">
      <header className="App-header">
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>
        
        
      </header>
    </div>
  );
}



function Product(props){

  const {name, price} = props.product;


  const productStyle={
    border:'1px solid gray',
    width:'290px',
    height:'300px',
    padding:'10px',
    textAlign:'left',
    font:'san-serif',
    background:'whitesmoke',
    borderRadius:'5px',
    color:'black',
    margin:'5px',
    float:'left'
  }


    return <div style={productStyle}>




      <img src="" alt="" height="25" width="25"/>



      <h4 style={{marginTop:'5px',marginBottom:'0px'}}>{name}</h4>
      <p  style={{marginTop:'10px', marginBottom:'0px'}}>US${price}<span style={{fontSize:'15px'}}>/mo</span></p>
      <p style={{fontSize:'15px', marginTop:'10px',marginBottom:'0px'}}>Get Lightroom, Lightroom Classic, Photoshop, and 20GB of cloud storage(1TB available).</p>
      <a style={{textDecoration:'none',fontSize:'15px'}} href="https://www.adobe.com/plans-fragments/modals/individual/photography/master.html">See plan & pricing details</a>
      <br/>

      <div style={{marginTop:'15px'}}>
      <input type="checkbox"></input>
      <label> <a style={{textDecoration:'none',fontSize:'12px'}} href="#">Add Adobe Stock. Get one moneth free.*</a></label>
      <button style={{ 
        backgroundColor: '#1473e6', 
        border: 'none', 
        color: 'white',
        padding:'10px 20px',
        borderRadius:'20px',
        textAlign:'center',
        display: "inline-block",
        textDecoration:'none',
        fontSize: '15px',
        marginTop:'10px'
        }}>Buy Now</button>

      </div>
     
      
    </div>

}




function Person(props){

  const personStyle = {
    border:'1px solid yellow',
    margin: '10px',
    padding: '10px'
  }

  return <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h4>Number {props.rank} Time Waster</h4>
  </div>
}

export default App;
