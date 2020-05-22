import React from 'react';
import { FiPower } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import userAvatarDefault from '../../assets/user-avatar.png';
import { useAuth } from '../../hooks/auth';
import useCan from '../../hooks/useCan';
import { Container, Header, HeaderContent, Profile } from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const can = useCan();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url || userAvatarDefault} alt="Dhemes Mota" />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          {!can('has_logout') && (
            <button onClick={() => signOut()} type="button">
              <FiPower />
            </button>
          )}
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
