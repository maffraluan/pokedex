import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

const WrapperSafeArea = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TitleContent = styled.View`
  width: 90%;
  height: 200px;
`;

const Title = styled.Text`
  margin-top: 20px;
  font-size: 32px;
  color: #17171b;
  font-weight: bold;
  line-height: 38.19px;
`;

const Paragraph = styled.Text`
  font-size: 16px;
  color: #747476;
  margin-top: 10px;
`;

const styles = StyleSheet.create({
  viewTitle: {
    paddingRight: 20,
  },
  scrollViewContent: {
    flex: 2,
    width: '90%',
  },
  cardView: {
    alignItems: 'center',
    marginBottom: 25,
  },
});

export {WrapperSafeArea, TitleContent, Title, Paragraph, styles};
