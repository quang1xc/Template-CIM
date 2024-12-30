// import { IPartnerBranch } from './partner-branch.interface';

export class IUserInfo {
  avatar: string | undefined = undefined;
  allpermissions: string | undefined;
  full_name: string | undefined;
  group_id: string | undefined;
  is_admin: boolean | undefined;
  is_sysadmin: false | undefined;
  refresh_token: false | undefined;
  token: string | undefined;
  user_id: string | undefined;
  user_permissions:UserPermissions[] | undefined;
}


export class UserPermissions {
  id: string | undefined = undefined;
  actions: [] | undefined;
  function_code: string | undefined;
  function_name: string | undefined;
  path: string | undefined;


}
