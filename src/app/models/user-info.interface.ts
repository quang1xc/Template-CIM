// import { IPartnerBranch } from './partner-branch.interface';

export class IUserInfo {
  avatar: string | undefined = undefined;
  admin: boolean ;
  // partner_branches: IPartnerBranch[];
  partner_branch: any | null;
  partner_branch_id: string | null;
  partner_name: string;
  amount_balance: number;
  is_partner_branch: boolean;
  is_partner_branch_admin: boolean;
  partner_id: string | undefined;
}

