
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/devportal/',
    component: ComponentCreator('/devportal/','b92'),
    exact: true
  },
  {
    path: '/devportal/__docusaurus/debug',
    component: ComponentCreator('/devportal/__docusaurus/debug','4ed'),
    exact: true
  },
  {
    path: '/devportal/__docusaurus/debug/config',
    component: ComponentCreator('/devportal/__docusaurus/debug/config','6a2'),
    exact: true
  },
  {
    path: '/devportal/__docusaurus/debug/content',
    component: ComponentCreator('/devportal/__docusaurus/debug/content','8ef'),
    exact: true
  },
  {
    path: '/devportal/__docusaurus/debug/globalData',
    component: ComponentCreator('/devportal/__docusaurus/debug/globalData','059'),
    exact: true
  },
  {
    path: '/devportal/__docusaurus/debug/metadata',
    component: ComponentCreator('/devportal/__docusaurus/debug/metadata','b3a'),
    exact: true
  },
  {
    path: '/devportal/__docusaurus/debug/registry',
    component: ComponentCreator('/devportal/__docusaurus/debug/registry','d0b'),
    exact: true
  },
  {
    path: '/devportal/__docusaurus/debug/routes',
    component: ComponentCreator('/devportal/__docusaurus/debug/routes','923'),
    exact: true
  },
  {
    path: '/devportal/blog/archive',
    component: ComponentCreator('/devportal/blog/archive','5b5'),
    exact: true
  },
  {
    path: '/devportal/dashboard',
    component: ComponentCreator('/devportal/dashboard','489'),
    exact: true
  },
  {
    path: '/devportal/demo',
    component: ComponentCreator('/devportal/demo','4e1'),
    exact: true
  },
  {
    path: '/devportal/login',
    component: ComponentCreator('/devportal/login','108'),
    exact: true
  },
  {
    path: '/devportal/markdown-page',
    component: ComponentCreator('/devportal/markdown-page','40d'),
    exact: true
  },
  {
    path: '/devportal/register',
    component: ComponentCreator('/devportal/register','8ff'),
    exact: true
  },
  {
    path: '/devportal/docs',
    component: ComponentCreator('/devportal/docs','7a0'),
    routes: [
      {
        path: '/devportal/docs/',
        component: ComponentCreator('/devportal/docs/','d6e'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/administration-console',
        component: ComponentCreator('/devportal/docs/administration-console','d3f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/analytics',
        component: ComponentCreator('/devportal/docs/analytics','937'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/android-100',
        component: ComponentCreator('/devportal/docs/android-100','30c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/android-110',
        component: ComponentCreator('/devportal/docs/android-110','a85'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/api',
        component: ComponentCreator('/devportal/docs/api','364'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/api/ecdsa',
        component: ComponentCreator('/devportal/docs/api/ecdsa','96c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/api/ecdsa/keys',
        component: ComponentCreator('/devportal/docs/api/ecdsa/keys','75a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/api/idverify',
        component: ComponentCreator('/devportal/docs/api/idverify','4d9'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/api/otp',
        component: ComponentCreator('/devportal/docs/api/otp','b56'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/auth0',
        component: ComponentCreator('/devportal/docs/auth0','042'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/authentication-modules',
        component: ComponentCreator('/devportal/docs/authentication-modules','02a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/authentication-scheme',
        component: ComponentCreator('/devportal/docs/authentication-scheme','574'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/blockid-admin-console-api',
        component: ComponentCreator('/devportal/docs/blockid-admin-console-api','8db'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/blockid-android-sdk-141and142',
        component: ComponentCreator('/devportal/docs/blockid-android-sdk-141and142','8a1'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/blockid-attributes',
        component: ComponentCreator('/devportal/docs/blockid-attributes','503'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/blockid-authentication-broker-user-guide',
        component: ComponentCreator('/devportal/docs/blockid-authentication-broker-user-guide','c87'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/blockid-ios-sdk-141and142',
        component: ComponentCreator('/devportal/docs/blockid-ios-sdk-141and142','718'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/blockid-mobile-application-user-guide',
        component: ComponentCreator('/devportal/docs/blockid-mobile-application-user-guide','783'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/blockid-release-notes',
        component: ComponentCreator('/devportal/docs/blockid-release-notes','7c4'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/broker-installation',
        component: ComponentCreator('/devportal/docs/broker-installation','082'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/community-management',
        component: ComponentCreator('/devportal/docs/community-management','282'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/core-configurations',
        component: ComponentCreator('/devportal/docs/core-configurations','2de'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/create-native-user',
        component: ComponentCreator('/devportal/docs/create-native-user','70e'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/customizing-the-branding-of-your-blockid-login-page',
        component: ComponentCreator('/devportal/docs/customizing-the-branding-of-your-blockid-login-page','1f6'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/datastore-configuration-1',
        component: ComponentCreator('/devportal/docs/datastore-configuration-1','46f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/deploying-smart-contract',
        component: ComponentCreator('/devportal/docs/deploying-smart-contract','a21'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/directory',
        component: ComponentCreator('/devportal/docs/directory','37e'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/ecdsa/shared-key',
        component: ComponentCreator('/devportal/docs/ecdsa/shared-key','0c6'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/end-user-guide',
        component: ComponentCreator('/devportal/docs/end-user-guide','e0e'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/faqs-related-to-the-blockid-product-suite',
        component: ComponentCreator('/devportal/docs/faqs-related-to-the-blockid-product-suite','163'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/frequently-asked-questions-faq',
        component: ComponentCreator('/devportal/docs/frequently-asked-questions-faq','0ad'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/generic-saml-application',
        component: ComponentCreator('/devportal/docs/generic-saml-application','189'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/getting-started',
        component: ComponentCreator('/devportal/docs/getting-started','44e'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/glossary',
        component: ComponentCreator('/devportal/docs/glossary','463'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/gsuite',
        component: ComponentCreator('/devportal/docs/gsuite','1e3'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/installing-blockid-admin-console',
        component: ComponentCreator('/devportal/docs/installing-blockid-admin-console','6fb'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/installing-blockid-authentication-broker',
        component: ComponentCreator('/devportal/docs/installing-blockid-authentication-broker','643'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/installing-blockid-credential-provider',
        component: ComponentCreator('/devportal/docs/installing-blockid-credential-provider','6d2'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/integration-pingfederate',
        component: ComponentCreator('/devportal/docs/integration-pingfederate','74e'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/integration-with-adfs',
        component: ComponentCreator('/devportal/docs/integration-with-adfs','b32'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/integration-with-arcon',
        component: ComponentCreator('/devportal/docs/integration-with-arcon','f3c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/integration-with-cisco-check-point',
        component: ComponentCreator('/devportal/docs/integration-with-cisco-check-point','6fb'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/integration-with-citrix-netscaler',
        component: ComponentCreator('/devportal/docs/integration-with-citrix-netscaler','4cd'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/integration-with-cyberark',
        component: ComponentCreator('/devportal/docs/integration-with-cyberark','df6'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/integration-with-cyberark-idaptive-identity',
        component: ComponentCreator('/devportal/docs/integration-with-cyberark-idaptive-identity','868'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/integration-with-forgerock',
        component: ComponentCreator('/devportal/docs/integration-with-forgerock','105'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/integration-with-gsuite',
        component: ComponentCreator('/devportal/docs/integration-with-gsuite','3ba'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/integration-with-oracle-idcs-identity-cloud-service',
        component: ComponentCreator('/devportal/docs/integration-with-oracle-idcs-identity-cloud-service','dd5'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/integration-with-salesforce',
        component: ComponentCreator('/devportal/docs/integration-with-salesforce','1fd'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/integration-with-windows',
        component: ComponentCreator('/devportal/docs/integration-with-windows','990'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/integration-with-zscaler',
        component: ComponentCreator('/devportal/docs/integration-with-zscaler','0e7'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/intergration-with-okta',
        component: ComponentCreator('/devportal/docs/intergration-with-okta','49f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/internal-faq-guide-for-blockid-product-suite',
        component: ComponentCreator('/devportal/docs/internal-faq-guide-for-blockid-product-suite','499'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/introduction-to-athena-admin-portal',
        component: ComponentCreator('/devportal/docs/introduction-to-athena-admin-portal','31c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/introduction-to-blockid-admin-console',
        component: ComponentCreator('/devportal/docs/introduction-to-blockid-admin-console','b21'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/ios-100',
        component: ComponentCreator('/devportal/docs/ios-100','9a6'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/ios-110',
        component: ComponentCreator('/devportal/docs/ios-110','5e8'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/license-keys',
        component: ComponentCreator('/devportal/docs/license-keys','96d'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/login-with-mfa',
        component: ComponentCreator('/devportal/docs/login-with-mfa','b17'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/office365-integration',
        component: ComponentCreator('/devportal/docs/office365-integration','a1b'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/okta',
        component: ComponentCreator('/devportal/docs/okta','291'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/otp',
        component: ComponentCreator('/devportal/docs/otp','11b'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/otp/request',
        component: ComponentCreator('/devportal/docs/otp/request','c5f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/otp/verify',
        component: ComponentCreator('/devportal/docs/otp/verify','343'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/profile',
        component: ComponentCreator('/devportal/docs/profile','ae4'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/radius-configuration',
        component: ComponentCreator('/devportal/docs/radius-configuration','bf0'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/release-notes-r102',
        component: ComponentCreator('/devportal/docs/release-notes-r102','b17'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/release-notes-r10300',
        component: ComponentCreator('/devportal/docs/release-notes-r10300','39d'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/release-notes-v3',
        component: ComponentCreator('/devportal/docs/release-notes-v3','16b'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/role-management',
        component: ComponentCreator('/devportal/docs/role-management','983'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/salesforce',
        component: ComponentCreator('/devportal/docs/salesforce','6ad'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/saml-configuration',
        component: ComponentCreator('/devportal/docs/saml-configuration','80e'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/samlv2',
        component: ComponentCreator('/devportal/docs/samlv2','ecb'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/scep-configuration',
        component: ComponentCreator('/devportal/docs/scep-configuration','ec2'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/software-and-hardware-otp-support',
        component: ComponentCreator('/devportal/docs/software-and-hardware-otp-support','e4d'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/tenant-management',
        component: ComponentCreator('/devportal/docs/tenant-management','e7a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/univeral-web-login-guide',
        component: ComponentCreator('/devportal/docs/univeral-web-login-guide','487'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/upgrading-blockid-authentication-broker',
        component: ComponentCreator('/devportal/docs/upgrading-blockid-authentication-broker','4b3'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/user-management',
        component: ComponentCreator('/devportal/docs/user-management','13d'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/user-onboarding-process-guide',
        component: ComponentCreator('/devportal/docs/user-onboarding-process-guide','e6d'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/uwl',
        component: ComponentCreator('/devportal/docs/uwl','77b'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/v1/android',
        component: ComponentCreator('/devportal/docs/v1/android','e34'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/v1/android-2',
        component: ComponentCreator('/devportal/docs/v1/android-2','43f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/v1/ios',
        component: ComponentCreator('/devportal/docs/v1/ios','4f1'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/v1/ios-2',
        component: ComponentCreator('/devportal/docs/v1/ios-2','cde'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/v1/release-notes-20211103',
        component: ComponentCreator('/devportal/docs/v1/release-notes-20211103','d9b'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/webauthn',
        component: ComponentCreator('/devportal/docs/webauthn','345'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/devportal/docs/white-label-templates',
        component: ComponentCreator('/devportal/docs/white-label-templates','91b'),
        exact: true,
        'sidebar': "mySidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
