import { Platform } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  color: #f4ede8;
  margin: 24px 0 24px;
  text-align: left;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;
