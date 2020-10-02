/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, SafeAreaView, Image, TouchableWithoutFeedback } from 'react-native';
import { styles, Container, UpperContent, PokemonName, LowerContent, TextStats, DFlexView, TextContent, Evolution, EvolutionPokemon, TextEvolution } from './styles';

const arrowBack = require('../../assets/back.png');

const StatsScreen: React.FC = ({ route }) => {
  const navigation = useNavigation();
  const { pokemonName, pokemonHp, pokemonAtk, pokemonDef, pokemonSpAtk, pokemonSpDef, pokemonSpeed, avatar, bgColor, pokemonEvolution, pokemonEvolutionName1, pokemonEvolutionName2, pokemonEvolutionType1, pokemonEvolutionType2, pokemonEvolutionLevel1, pokemonEvolutionLevel2 } = route.params;

  console.log(pokemonEvolution);

  return (
    <SafeAreaView>
      <Container style={bgColor}>
        <UpperContent>
          <View style={styles.viewButtonContent}>
            <View style={styles.viewButtonBack}>
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Image source={arrowBack} style={styles.iconImage} />
              </TouchableWithoutFeedback>
            </View>
            <PokemonName>
              {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
            </PokemonName>
          </View>

          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{ uri: avatar, height: 60, width: 60 }}
            />
          </View>
        </UpperContent>
        <LowerContent>
          <TextStats>Base Stats</TextStats>
          <DFlexView>
            <View >
              <TextContent>HP</TextContent>
            </View>
            <View >
              <TextContent>{pokemonHp}</TextContent>
            </View>
          </DFlexView>

          <DFlexView>
            <View>
              <TextContent>Attack</TextContent>
            </View>
            <View>
              <TextContent>{pokemonAtk}</TextContent>
            </View>
          </DFlexView>

          <DFlexView>
            <View>
              <TextContent>Defense</TextContent>
            </View>
            <View>
              <TextContent>{pokemonDef}</TextContent>
            </View>
          </DFlexView>

          <DFlexView>
            <View>
              <TextContent>Sp.Atk</TextContent>
            </View>
            <View>
              <TextContent>{pokemonSpAtk}</TextContent>
            </View>
          </DFlexView>

          <DFlexView>
            <View>
              <TextContent>Sp.Def</TextContent>
            </View>
            <View>
              <TextContent>{pokemonSpDef}</TextContent>
            </View>
          </DFlexView>

          <DFlexView>
            <View>
              <TextContent>Speed</TextContent>
            </View>
            <View>
              <TextContent>{pokemonSpeed}</TextContent>
            </View>
          </DFlexView>

          {pokemonEvolution.length !== 0
            ? <Evolution>
              <EvolutionPokemon>
                <Image source={{ uri: pokemonEvolutionType1, height: 60, width: 60 }}
                  style={styles.evolutionImage} />
                <TextEvolution>{pokemonEvolutionName1.charAt(0).toUpperCase() + pokemonEvolutionName1.slice(1)}</TextEvolution>
                <TextEvolution>MinLevel: {pokemonEvolutionLevel1}</TextEvolution>
              </EvolutionPokemon>

              {pokemonEvolution.length !== 2 ? <EvolutionPokemon>
                <Image source={{ uri: pokemonEvolutionType2, height: 60, width: 60 }}
                  style={styles.evolutionImage} />
                <TextEvolution>{pokemonEvolutionName2.charAt(0).toUpperCase() + pokemonEvolutionName2.slice(1)}</TextEvolution>
                <TextEvolution>MinLevel: {pokemonEvolutionLevel2}</TextEvolution>
              </EvolutionPokemon> : null}
            </Evolution> : null}
        </LowerContent>
      </Container>
    </SafeAreaView>
  );
};

export { StatsScreen };
