export interface IAccount {
    token: string;
    user_id: string;
    username: string;
    full_name: string;
    avatar: string;
    email: string;
    phone: string;
    is_partner: boolean;
    is_partner_admin: boolean;
    partner_id: string;
    is_manage_user: boolean;
    is_add_point_permission: boolean;
    is_change_point_permission: boolean;
    is_have_secure_code: boolean;
    is_review: boolean;
    send_Notification: boolean;
    send_Popup: boolean;
    SMS_addPointSave: boolean;
    SMS_addPointUse: boolean;
}
