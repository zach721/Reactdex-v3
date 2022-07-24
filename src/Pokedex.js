/*
@Author: Zach721
@Version: 3.0 Improved
@Features:-
*/

import React from "react"
import axios from 'axios'
import Draggable from 'react-draggable';
import './Pokemon.css'
import pokelogo from './images/newpokeball.png'
import superball from './images/superball.png'
import left from './images/left.png'
import right from './images/right.png'
import ash from './images/ash.png'
import rotom from './images/search.png'
import sinnoh from './images/sinnoh.png'
import github from './images/github.png'
import javascript from './images/javascript.png'
import css from './images/css.png'
import html from './images/html.png'
import node from './images/nodejs.png'
import react from './images/react.png'
import vercel from './images/vercel.jpg'
import vscode from './images/vscode.png'
import npm from './images/npm.png'


function Pokedex(){

  const [api,setApi] = React.useState('https://pokeapi.co/api/v2/pokemon/1')
  const [apides, setApides] = React.useState('https://pokeapi.co/api/v2/pokemon-species/1')
  const [post, setPost] = React.useState(null); 
  const [descrpt, setDescrpt] = React.useState(null);         
  const [count,setCount] = React.useState(2)
  const [name, setName] = React.useState(null)
  const [img, setImg] = React.useState(null)
  const [list, setList] = React.useState(null)
  const [pokelist, setPokelist] = React.useState(false)
  const [pokedexmessage, setPokedexmessage] = React.useState(false)
  const [pokedexmessage2, setPokedexmessage2] = React.useState(false)
  const [pokestate, setPokestate] = React.useState(false)
  
  React.useEffect(()=>{

    axios.get(api).then((response) => {
      setPost(response.data)
      setImg(response.data.sprites.other['official-artwork'].front_default)

           
    })

  },[api])

      function Description() {

        React.useEffect(()=>{


        axios.get(apides).then((response)=>{
        setDescrpt(response.data)})

        },[api])

      }

      Description()

   

      const Showallpokemon = ()=>{
   
        React.useEffect(()=>{
   
         const api2 = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
         axios.get(api2).then((response)=>{
           setList(response.data.results)

          })
   
        },[])
        
       
       }
       Showallpokemon()
       
      


    if (!post) return null


    
  
    const Pluschangepokemon = ()=>{



  let api3 = 'https://pokeapi.co/api/v2/pokemon-species/'+ count.toString()   
  let api2 = 'https://pokeapi.co/api/v2/pokemon/'+ count.toString()
  setCount(count+1)
  setApi(api2)
  setApides(api3)
        
             
       }

       
    const Minuschangepokemon = ()=>{
     
     if (count!==0){

    let api3 = 'https://pokeapi.co/api/v2/pokemon-species/'+ count.toString()   
    let api2 = 'https://pokeapi.co/api/v2/pokemon/'+ count.toString()
      
    setCount(count-1)
    setApi(api2)
    setApides(api3)
  }
        
     
    
      
   }

   const Searchpokemon = ()=>{
  if(name!==""){

    

     
    let api3 = 'https://pokeapi.co/api/v2/pokemon-species/'+ name
    let api2 = 'https://pokeapi.co/api/v2/pokemon/'+ name
    axios.get(api2).then((response) => {
        setCount(response.data.game_indices[3].game_index)
        
       
      })
    setApi(api2)
    setApides(api3)
    
  }
   }  
  
   const showlist = ()=>{
    setPokelist(true)
    if(pokedexmessage==true){
      setPokedexmessage(false)
    }
    if (pokelist==true){
      setPokelist(false)
    }
   }

const showmessage = ()=>{
setPokedexmessage(true)

}



const hidemessage = ()=>{
  
  setPokedexmessage(false)
}
  

const showmessage2 = ()=>{
  setPokedexmessage2(true)
  
  }
  
  const hidemessage2 = ()=>{
    
    setPokedexmessage2(false)
  }
   
  const hidelist = ()=>{
    setPokelist(false)
  }
 const showpokestate = ()=>{
  setPokestate(true)
  if (pokestate==true){
    setPokestate(false)
  }
 }
 const hidepokestate = ()=>{
  setPokestate(false)
 }
 function namep(){
  document.title = 'Reactdex - '+ post.forms[0].name;
}
namep()
    return (
      <div id="pokedex">
     
     

{pokedexmessage ? <div id="pokedexmessage" >
     <p1>See all pokemon</p1>
     </div>: undefined}

     
{pokedexmessage2 ? <div id="pokedexmessage2" >
     <p1>Check {post.forms[0].name}'s stats</p1>
     </div>: undefined}
     
    
     <Draggable  >
     <div id="draggableindex">


     {pokelist ? <div id="listpoke" >
      <div id="toppokedex" >
      <h1 id="xclose" onClick={hidelist} >x</h1>
      <h1 id="toppokedextext">National Pokedex</h1>

      </div>
      <ul id="listofpokemon" >
      {
        list.map((list3)=>{
          let nurl = list3.url.replace(/\D/g, '').substring(1).toString()
          
          let api3_ = 'https://pokeapi.co/api/v2/pokemon-species/' + nurl.toString()
          let api_ = 'https://pokeapi.co/api/v2/pokemon/'
          let api__ = api_ + nurl
    let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+nurl +'.png'
    

          return(
            <div id="extendedlist"  tabindex="0" onClick={()=>{{setApi(api__)}{setApides(api3_)}{setCount(parseInt(nurl,10))}}} class="row" >
            <img src={url} />
            <h1>{list3.url.replace(/\D/g, '').substring(1)}º </h1>
            <h1 id={list3.name.toString()} > {list3.name.slice(0, 9)}</h1>
            
            </div>
         
          )
        })}

      </ul>
   
     
      </div>: undefined} </div></Draggable>
  
      

      <ul id="list">
       <h1>Name: {post.forms[0].name}</h1>
       <h1>Type: {post.types[0].type.name} </h1>
       <h1>Height: {post.height/10} m</h1> 
       <h1>Weight: {post.weight/10} kg</h1> 
       <h1>Description: {descrpt.flavor_text_entries[6].flavor_text.replace(//g, " ")}</h1>

      </ul>
      <div id="divpoke">
      <img id="pokemonimage" src={img} width="400" height="400"></img>
      </div>

      <div id="button">
        
      <img id="buttonleft" onClick={Minuschangepokemon} src={left} width="60" height="60" />
      <img id="buttonright" onClick={Pluschangepokemon} src={right} width="60" height="60" /> 

      </div>
      
      <div id="card" ></div>
  

      <div id="search">

      <input id="searchbox" placeholder="Search" autocomplete="off" onChange={e=>setName(e.target.value )} onKeyPress={Searchpokemon} /> 
      <img id="searchbutton" onClick={Searchpokemon} src={rotom} height="45" weight="45" />
 
 
 {pokestate ? <Draggable >
  <div id="draggableindex2">
  
  <div id="pokemonstats" >
  <div id="toppokedex" >
      <h1 id="xclose" onClick={hidepokestate} >x</h1>
      <h1 id="toppokedextext2">{post.forms[0].name}'s stats</h1>

      </div>
  <ul id="listofstates" >
  <h1>Abilities:</h1>
    {post.abilities.map((mapdata)=>{
return(
  <div>
  <ul>

  <h1>- {mapdata.ability.name}</h1>
  </ul>
  </div>
)
})}
<h1>Base experience: {post.base_experience}</h1>
<ul>
<h1>Moves can learn:</h1>
  {post.moves.map((mapmove)=>{
    return(
      <div>
      <ul>
        
      <h1>- {mapmove.move.name}</h1>
      </ul>
  
      </div>
    )
  })}</ul>
  <ul>
  <h1>Base stats:</h1>
    {post.stats.map((mapstats)=>{
      return(
        <div>
        <ul>

        <h1>- {mapstats.stat.name}: {mapstats.base_stat}</h1>
        </ul>
        </div>
      )
    })}
  </ul>
    </ul>
</div>
  </div>
 </Draggable> :undefined }   



      </div>
      <img id="ash" src={ash} width="160" height="160" />
      <h1 id="message" >This app was made with love using React</h1>
      <h1 id="message2">Created by Zach721</h1>
      <h1 id="message3" >All credit goes to PokeAPI and ThePokemonCompany</h1>
      <div>
      <a href="https://www.github.com/zach721" target="_blank">
      <img id="github" src={github} height="40" width="40"/><h1 id="author" >My github account</h1></a>
      
      </div>
      <img id="pokeball" src={pokelogo} weight='50' height='50' onMouseEnter={showmessage} onMouseLeave={hidemessage} onClick={showlist} />
      <img id="superball" src={superball} weight='50' height='50' onMouseEnter={showmessage2} onMouseLeave={hidemessage2} onClick={showpokestate} />
      <img id="sinnoh" src={sinnoh} />

      <div id="technologies" >
      <h1 id="technologiestext" >Used technologies</h1>
      <ul>

        <img src={html} id="imagetech" width="20" height="20" />
        <img src={css}  id="imagetech" width="20" height="20" />
        <img src={javascript} id="imagetech" width="20" height="20" />
        <img src={react}  id="imagetech" width="20" height="20" />
        <img src={node}  id="imagetech" width="20" height="20" />
        <img src={vscode}  id="imagetech" width="20" height="20" />
        <img src={vercel}  id="imagetech" width="20" height="20" />
        <img src={npm}  id="imagetech" width="20" height="20" />

      </ul>
      </div>
      </div>
      
    );

    
}




export default Pokedex
