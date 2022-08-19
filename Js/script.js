const  poke_name = document.querySelector(".pokemon_name");
const  poke_number = document.querySelector(".pokemon_number");
const poke_image = document.querySelector(".pokemon_image");
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const btn_prev = document.querySelector(".btn-prev");
const btn_next = document.querySelector(".btn-next");
let search_pokemon = 1;



const fetchPokemon = async (pokemon) => {
    //async é pra função ser assincrona e o await é pra esperar o fetch retornar
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if(APIResponse.status == 200){
        //tem que transformar em json pra ficar legível
        const data = await APIResponse.json();
        return data;
    }
    
    console.log(data)
}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon)
    if(data){
        poke_name.textContent = data.name;
        poke_number.textContent = data.id;
        poke_image.src = data.sprites.versions['generation-viii']['icons']['front_default']
        search_pokemon = data.id;
    }else{
        alert("não encontramos esse pokemon")
    }
}

renderPokemon(search_pokemon.toString())

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("enviado o formulário...")
    renderPokemon(input.value.toLowerCase())
    input.value = ""
})

btn_prev.addEventListener('click', (event) => {
    // alert('btn prev')
    search_pokemon--;
    renderPokemon(search_pokemon.toString())
})

btn_next.addEventListener('click', (event) => {
    search_pokemon++;
    renderPokemon(search_pokemon.toString())
    // alert("btn next");
    // console.log('teste')
})