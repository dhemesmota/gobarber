import React from 'react';

import { useAuth } from '../../hooks/auth';
import useCan from '../../hooks/useCan';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const can = useCan();

  return (
    <Container>
      <h1>Dashboard</h1>
      {can('has_logout') && (
        <button onClick={() => signOut()} type="button">
          Sair do sistema
        </button>
      )}
    </Container>
  );
};

export default Dashboard;
