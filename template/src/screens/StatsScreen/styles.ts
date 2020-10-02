/* eslint-disable eol-last */
/* eslint-disable semi */
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

const Container = styled.View`
  height: 100%;
`;

const UpperContent = styled.View`
  height: 30%;
`;

const PokemonName = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

const LowerContent = styled.View`
  height: 70%;
  background-color: #fff;
  align-items: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

const TextStats = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  margin: 20px 0px;
`;

const DFlexView = styled.View`
  width: 90%;
  flex-direction: row;
  margin-top: 15px;
  padding-left: 40px;
  padding-right: 40px;
  justify-content: space-between;
`;

const TextContent = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const Evolution = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const EvolutionPokemon = styled.View`
`;

const TextEvolution = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const styles = StyleSheet.create({
  viewButtonContent: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewButtonBack: {
    position: 'absolute',
    left: 20,
    zIndex: 2,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  viewImage: {
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  evolutionImage: {
    width: 100,
    height: 100,
  },
});

export {
  styles,
  Container,
  UpperContent,
  PokemonName,
  LowerContent,
  TextStats,
  DFlexView,
  TextContent,
  Evolution,
  EvolutionPokemon,
  TextEvolution,
};
