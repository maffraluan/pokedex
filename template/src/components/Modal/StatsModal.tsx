/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Modal, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type ModalProps = {
  visible: boolean,
  onPress?: () => void,
  hideModal?: () => void,
}

const StatsModal: React.FC<ModalProps> = (props) => {
  return (
    <>
      <Modal visible={props.visible} animationType="slide" >
        <SafeAreaView style={{ flex: 1, alignItems: 'center'}}>
          <View style={styles.mainView}>
            <TouchableOpacity onPress={props.hideModal}>
              <Text style={styles.textGoBack}>Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mainStats}>
            <View style={styles.dFlexRow}>
              <Text style={styles.textStats}>HP</Text>
              <Text style={styles.textStats} />
            </View>

            <View style={styles.dFlexRow}>
              <Text style={styles.textStats}>Attack</Text>
              <Text style={styles.textStats} />
            </View>

            <View style={styles.dFlexRow}>
              <Text style={styles.textStats}>Defense</Text>
              <Text style={styles.textStats} />
            </View>

            <View style={styles.dFlexRow}>
              <Text style={styles.textStats}>SP.Atk</Text>
              <Text style={styles.textStats} />
            </View>

            <View style={styles.dFlexRow}>
              <Text style={styles.textStats}>Sp.Def</Text>
              <Text style={styles.textStats} />
            </View>

            <View style={styles.dFlexRow}>
              <Text style={styles.textStats}>Speed</Text>
              <Text style={styles.textStats} />
            </View>

            <View style={styles.dFlexRow}>
              <Text style={styles.textStats}>Total</Text>
              <Text style={styles.textStats} />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export { StatsModal };
