const pokemonApi = 'https://api-pokemons.herokuapp.com/pokemons/';

export async function getPokemons() {
  const res = await fetch(pokemonApi);
  const data = await res.json();

  return data;
}
