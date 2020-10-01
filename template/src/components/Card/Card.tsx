/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Color, styles, ViewColorType, BorderTypeView } from './styles';
import { Text, View, Image, TouchableOpacity } from 'react-native';

type CardProps = {
  id?: number;
  nationalNumber?: number;
  pokeName?: string;
  avatar?: string;
  pokeType1?: string;
  pokeType2?: string;
  weight?: number;
  typeColor?: object,
  bgColor?: object,
  onPress?: () => void,
};

const Card: React.FC<CardProps> = (props) => {
  return (
    <>
      <TouchableOpacity onPress={props.onPress}>
        <ViewColorType style={props.bgColor}>
          <Color>
            <Text style={styles.numberId}>{props.id}</Text>
            <Text style={styles.pokemonName}>{props.pokeName}</Text>
            <View style={styles.viewFlexD}>
              {props.pokeType2 !== null ? <BorderTypeView style={[props.typeColor, { marginRight: 4 }]}>
                <Text style={styles.borderText}>{props.pokeType2}</Text>
              </BorderTypeView> : null}
              <BorderTypeView style={props.typeColor}>
                <Text style={styles.borderText}>{props.pokeType1}</Text>
              </BorderTypeView>
            </View>
          </Color>

          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{ uri: props.avatar, height: 60, width: 60 }}
            />
          </View>
        </ViewColorType>
      </TouchableOpacity>
    </>
  );
};

export { Card };
