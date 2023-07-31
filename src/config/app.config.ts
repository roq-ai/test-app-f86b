interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Nutzer', 'Controller'],
  tenantName: 'Organization',
  applicationName: 'test app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
