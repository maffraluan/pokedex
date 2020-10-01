/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';




const ViewColorType = styled.View`
  width: 100%;
  height: 115px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
`;

const BorderTypeView = styled.View`
    justify-content: flex-start;
    padding: 5px;
    border-radius: 3px;
    border: 1px;
    border-color: #fff; 
`;

const Color = styled.View`
    margin-left: 20px;
    width: 50%;
    align-items: flex-start;
`;

const styles = StyleSheet.create({
  viewFlexD: {
    flexDirection: 'row',
  },
  numberId: {
      fontSize: 14,
      fontWeight: '500',
      color: '#17171B',
  },
  pokemonName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  borderText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '500',
  },
  viewImage: {
      width: '40%',
  },
  image: {
      width: 120,
      height: 120,
      marginTop: -20,
  },
});

export {Color, styles, ViewColorType, BorderTypeView};
