import { useAuth } from './auth';

type Permissions = Array<string> | string;

type Response = (permissions: Permissions) => boolean;

const useCan = (): Response => {
  const { user } = useAuth();

  const userPermissions = user?.permissions;

  return function can(permissions) {
    if (!userPermissions) {
      return false;
    }

    const permissionsArray = Array.isArray(permissions)
      ? permissions
      : [permissions];

    const hasPermissions = permissionsArray.every((permission) =>
      userPermissions.includes(permission),
    );

    return hasPermissions;
  };
};

export default useCan;
