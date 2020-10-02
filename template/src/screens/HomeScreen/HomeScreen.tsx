/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, ScrollView } from 'react-native'
import { Card, InputText } from '../../components'
import { getPokemons } from '../../services/services'
import {
    WrapperSafeArea,
    TitleContent,
    Title,
    Paragraph,
    styles,
} from './styles'

const HomeScreen: React.FC = () => {
    const [pokemonData, setPokemonData] = useState<Array<any>>([]);
    const navigator = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemons();
            setPokemonData(data);
            console.log(data);
        };
        fetchData();
    }, []);

    return (
        <WrapperSafeArea>
            <TitleContent>
                <View style={styles.viewTitle}>
                    <Title>Pokédex</Title>
                    <Paragraph>
                        Search for Pokémon by name or using the National Pokedex number.
          </Paragraph>
                </View>
                <View style={{ marginVertical: 10 }} >
                    <InputText />
                </View>
            </TitleContent>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollViewContent}>
                {pokemonData.map((pokemon: any, index: number) => {
                    //const orderId = Number(pokemon.id);
                    const resultTypes = pokemon.types;
                    const indexType = resultTypes.indexOf(',');
                    const type1 = resultTypes.substr(0, indexType);
                    const type2 = resultTypes.substr(indexType, 200).split(',');
                    const setColor = function (color: string) {
                        if (color === 'brown') return { backgroundColor: '#FFA756' };
                        if (color === 'green') return { backgroundColor: '#8BBE8A' };
                        if (color === 'purple') return { backgroundColor: '#9F6E97' };
                        if (color === 'yellow') return { backgroundColor: '#F2CB55' };
                        if (color === 'gray') return { backgroundColor: '#B5B9C4' };
                        if (color === 'blue') return { backgroundColor: '#58ABF6' };
                        if (color === 'pink') return { backgroundColor: '#EBA8C3' };
                        if (color === 'red') return { backgroundColor: '#EB4971' };
                    };
                    return (
                        <View key={index} style={styles.cardView}>
                            <Card
                                id={pokemon.id}
                                pokeName={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                weight={pokemon.weight}
                                pokeType1={indexType !== -1 ? type1 : resultTypes}
                                pokeType2={indexType !== -1 ? type2 : null}
                                avatar={pokemon.img}
                                typeColor={pokemon.color}
                                bgColor={setColor(pokemon.color)}
                                onPress={() => navigator.navigate('Stats', {
                                    pokemonName: pokemon.name,
                                    pokemonHp: pokemon.stats[5].base_stat,
                                    pokemonAtk: pokemon.stats[4].base_stat,
                                    pokemonDef: pokemon.stats[3].base_stat,
                                    pokemonSpAtk: pokemon.stats[2].base_stat,
                                    pokemonSpDef: pokemon.stats[1].base_stat,
                                    pokemonSpeed: pokemon.stats[0].base_stat,
                                    avatar: pokemon.img,
                                    bgColor: setColor(pokemon.color),
                                    pokemonEvolution: pokemon.evolution,
                                    pokemonEvolutionName1: pokemon.evolution[1]?.name,
                                    pokemonEvolutionName2: pokemon.evolution[2]?.name,
                                    pokemonEvolutionType1: pokemon.evolution[1]?.img,
                                    pokemonEvolutionType2: pokemon.evolution[2]?.img,
                                    pokemonEvolutionLevel1: pokemon.evolution[1]?.minLevel,
                                    pokemonEvolutionLevel2: pokemon.evolution[2]?.minLevel,
                                })}
                            />
                        </View>
                    );
                })}
            </ScrollView>
        </WrapperSafeArea>
    );
};

export { HomeScreen };
