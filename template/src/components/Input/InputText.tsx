import React, {useState} from 'react';
import {View, Image, TextInput} from 'react-native';
import {styles} from './styles';

const search = require('../../assets/search.png');
const InputText: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(true);

  const toggleEditing = () => setIsEditing(false);

  return (
    <>
      <View style={styles.searchSection}>
        {isEditing ? <Image source={search} style={styles.iconImage} /> : true}
        <TextInput
          onFocus={toggleEditing}
          style={styles.input}
          placeholder={'What Pokémon are you looking for?'}
          placeholderTextColor={'#747476'}
        />
      </View>
    </>
  );
};

export {InputText};
