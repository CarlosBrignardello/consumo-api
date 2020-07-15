$(document).ready(function(){

  /* CARGAMOS LAS IMAGENES DESDE UNA API */
  const URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  // for (let i = 1; i < 150; i++) {
  //   $('#pokemones').append(`
  //   <div class="col-2">
  //     <img src="${URL}${i}.png"/>
  //   </div>
  //   `)
  // }



  for (let i = 1; i < 51; i++) {
    $('#pokemones').append(`
      <div class="col-2 poke-container">
        <a>
          <img src="${URL}${i}.png" />
          <p class="text-capitalize text-center">${i}</p>
        </a>
      </div>
    `)
  }

  $(document).on("click", "a", function(){
    let id = $(this).find('p').text()
    $.get(
      `https://pokeapi.co/api/v2/pokemon/${id}/`, function(pokemon){
        $('.pokemon-detail').html(`
          <div class='text-center'>
            <img src="${pokemon.sprites.front_default}"/>
            <h3>${pokemon.id}. ${pokemon.name}</h3>
          </div>
        `);
      }
    )
  })

})