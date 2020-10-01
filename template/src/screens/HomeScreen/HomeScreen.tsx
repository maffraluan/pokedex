/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, StatsModal } from '../../components';
import { getPokemons } from '../../services/services';
import {
    WrapperSafeArea,
    TitleContent,
    Title,
    Paragraph,
    styles,
} from './styles';

const HomeScreen: React.FC = () => {
    const [pokemonData, setPokemonData] = useState<Array<any>>([]);
    const [visibleModal, setVisibleModal] = useState<boolean>(false);

    const showModal = () => setVisibleModal(true);
    const hideModal = () => setVisibleModal(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemons();
            console.log(data);
            setPokemonData(data);
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
            </TitleContent>
            {/* INPUT */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollViewContent}>
                {pokemonData.map((pokemon: any, index: number) => {
                    //const orderId = Number(pokemon.id);
                    const resultTypes = pokemon.types;
                    const indexType = resultTypes.indexOf(',');
                    const type1 = resultTypes.substr(0, indexType);
                    const type2 = resultTypes.substr(indexType, 200).split(',');
                    const setColor = function(color: string) {
                        if (color === 'brown') return {backgroundColor:  '#FFA756'};
                        if (color === 'green') return {backgroundColor: '#8BBE8A'};
                        if (color === 'purple') return {backgroundColor: '#9F6E97'};
                        if (color === 'yellow') return {backgroundColor: '#F2CB55'};
                        if (color === 'gray') return {backgroundColor: '#B5B9C4'};
                        if (color === 'blue') return {backgroundColor: '#58ABF6'};
                        if (color === 'pink') return {backgroundColor: '#EBA8C3'};
                        if (color === 'red') return {backgroundColor: '#EB4971'};
                    };
                    return (
                        <View key={index} style={styles.cardView}>
                            <StatsModal
                                visible={visibleModal}
                                hideModal={hideModal}
                            />
                            <Card
                                id={pokemon.id}
                                pokeName={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                weight={pokemon.weight}
                                pokeType1={indexType !== -1 ? type1 : resultTypes}
                                pokeType2={indexType !== -1 ? type2 : null }
                                avatar={pokemon.img}
                                typeColor={pokemon.color}
                                bgColor={setColor(pokemon.color)}
                                onPress={showModal}
                            />
                        </View>
                    );
                })}
            </ScrollView>
        </WrapperSafeArea>
    );
};

export { HomeScreen };
