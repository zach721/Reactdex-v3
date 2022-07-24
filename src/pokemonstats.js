return(
  <div id="pokemon stats" >
  {post.abilities.map((abilities)=>{

   return(
     <div>
     <ul>
       <h1>12{abilities}</h1>
     </ul>
     </div>
   )
 })}
 
    </div>
)











let data = {"abilities" : [
  {
    "ability": {
      "name": "torrent",
      "url": "https://pokeapi.co/api/v2/ability/67/"
    },
    "is_hidden": false,
    "slot": 1
  },
  {
    "ability": {
      "name": "defiant",
      "url": "https://pokeapi.co/api/v2/ability/128/"
    },
    "is_hidden": true,
    "slot": 3
  }
]
         }



post.abilities.map((mapdata)=>{
console.log('ability: '+mapdata.ability.name)
})