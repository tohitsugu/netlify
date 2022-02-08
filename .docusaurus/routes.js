
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/dashboard',
    component: ComponentCreator('/dashboard','3a4'),
    exact: true
  },
  {
    path: '/demo',
    component: ComponentCreator('/demo','041'),
    exact: true
  },
  {
    path: '/login',
    component: ComponentCreator('/login','61b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/register',
    component: ComponentCreator('/register','e49'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','676'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/','4fd'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/administration-console',
        component: ComponentCreator('/docs/administration-console','719'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/analytics',
        component: ComponentCreator('/docs/analytics','fb0'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/android-100',
        component: ComponentCreator('/docs/android-100','dd3'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/android-110',
        component: ComponentCreator('/docs/android-110','61a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/api',
        component: ComponentCreator('/docs/api','f43'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/api/ecdsa',
        component: ComponentCreator('/docs/api/ecdsa','82c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/api/ecdsa/keys',
        component: ComponentCreator('/docs/api/ecdsa/keys','df4'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/api/idverify',
        component: ComponentCreator('/docs/api/idverify','f1c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/api/otp',
        component: ComponentCreator('/docs/api/otp','89f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/auth0',
        component: ComponentCreator('/docs/auth0','2ca'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/authentication-modules',
        component: ComponentCreator('/docs/authentication-modules','92a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/authentication-scheme',
        component: ComponentCreator('/docs/authentication-scheme','a6b'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/blockid-admin-console-api',
        component: ComponentCreator('/docs/blockid-admin-console-api','989'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/blockid-android-sdk-141and142',
        component: ComponentCreator('/docs/blockid-android-sdk-141and142','d04'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/blockid-attributes',
        component: ComponentCreator('/docs/blockid-attributes','3b2'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/blockid-authentication-broker-user-guide',
        component: ComponentCreator('/docs/blockid-authentication-broker-user-guide','81a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/blockid-ios-sdk-141and142',
        component: ComponentCreator('/docs/blockid-ios-sdk-141and142','d97'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/blockid-mobile-application-user-guide',
        component: ComponentCreator('/docs/blockid-mobile-application-user-guide','bef'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/broker-installation',
        component: ComponentCreator('/docs/broker-installation','501'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/community-management',
        component: ComponentCreator('/docs/community-management','149'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/core-configurations',
        component: ComponentCreator('/docs/core-configurations','7ca'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/create-native-user',
        component: ComponentCreator('/docs/create-native-user','bfc'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/customizing-the-branding-of-your-blockid-login-page',
        component: ComponentCreator('/docs/customizing-the-branding-of-your-blockid-login-page','b78'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/datastore-configuration-1',
        component: ComponentCreator('/docs/datastore-configuration-1','e14'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/deploying-smart-contract',
        component: ComponentCreator('/docs/deploying-smart-contract','2bb'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/directory',
        component: ComponentCreator('/docs/directory','3f0'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/ecdsa/shared-key',
        component: ComponentCreator('/docs/ecdsa/shared-key','e05'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/end-user-guide',
        component: ComponentCreator('/docs/end-user-guide','fc7'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/generic-saml-application',
        component: ComponentCreator('/docs/generic-saml-application','fbc'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/getting-started',
        component: ComponentCreator('/docs/getting-started','98d'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/glossary',
        component: ComponentCreator('/docs/glossary','ced'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/gsuite',
        component: ComponentCreator('/docs/gsuite','e91'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/installing-blockid-admin-console',
        component: ComponentCreator('/docs/installing-blockid-admin-console','3dd'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/installing-blockid-authentication-broker',
        component: ComponentCreator('/docs/installing-blockid-authentication-broker','321'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/installing-blockid-credential-provider',
        component: ComponentCreator('/docs/installing-blockid-credential-provider','2fb'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/integration-pingfederate',
        component: ComponentCreator('/docs/integration-pingfederate','229'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/integration-with-adfs',
        component: ComponentCreator('/docs/integration-with-adfs','085'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/integration-with-arcon',
        component: ComponentCreator('/docs/integration-with-arcon','499'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/integration-with-cisco-check-point',
        component: ComponentCreator('/docs/integration-with-cisco-check-point','3ee'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/integration-with-citrix-netscaler',
        component: ComponentCreator('/docs/integration-with-citrix-netscaler','e28'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/integration-with-cyberark',
        component: ComponentCreator('/docs/integration-with-cyberark','e94'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/integration-with-cyberark-idaptive-identity',
        component: ComponentCreator('/docs/integration-with-cyberark-idaptive-identity','471'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/integration-with-forgerock',
        component: ComponentCreator('/docs/integration-with-forgerock','239'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/integration-with-gsuite',
        component: ComponentCreator('/docs/integration-with-gsuite','b5f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/integration-with-oracle-idcs-identity-cloud-service',
        component: ComponentCreator('/docs/integration-with-oracle-idcs-identity-cloud-service','d0b'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/integration-with-salesforce',
        component: ComponentCreator('/docs/integration-with-salesforce','696'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/integration-with-windows',
        component: ComponentCreator('/docs/integration-with-windows','878'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/integration-with-zscaler',
        component: ComponentCreator('/docs/integration-with-zscaler','ae6'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/intergration-with-okta',
        component: ComponentCreator('/docs/intergration-with-okta','3a3'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/introduction-to-athena-admin-portal',
        component: ComponentCreator('/docs/introduction-to-athena-admin-portal','366'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/introduction-to-blockid-admin-console',
        component: ComponentCreator('/docs/introduction-to-blockid-admin-console','01c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/ios-100',
        component: ComponentCreator('/docs/ios-100','14d'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/ios-110',
        component: ComponentCreator('/docs/ios-110','630'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/license-keys',
        component: ComponentCreator('/docs/license-keys','8ca'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/login-with-mfa',
        component: ComponentCreator('/docs/login-with-mfa','005'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/office365-integration',
        component: ComponentCreator('/docs/office365-integration','e2c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/okta',
        component: ComponentCreator('/docs/okta','599'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/otp',
        component: ComponentCreator('/docs/otp','480'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/otp/request',
        component: ComponentCreator('/docs/otp/request','a43'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/otp/verify',
        component: ComponentCreator('/docs/otp/verify','d8a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/profile',
        component: ComponentCreator('/docs/profile','256'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/radius-configuration',
        component: ComponentCreator('/docs/radius-configuration','64e'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/role-management',
        component: ComponentCreator('/docs/role-management','f3d'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/salesforce',
        component: ComponentCreator('/docs/salesforce','a49'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/saml-configuration',
        component: ComponentCreator('/docs/saml-configuration','53a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/samlv2',
        component: ComponentCreator('/docs/samlv2','0bd'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/scep-configuration',
        component: ComponentCreator('/docs/scep-configuration','813'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/software-and-hardware-otp-support',
        component: ComponentCreator('/docs/software-and-hardware-otp-support','d14'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/tenant-management',
        component: ComponentCreator('/docs/tenant-management','a48'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/univeral-web-login-guide',
        component: ComponentCreator('/docs/univeral-web-login-guide','178'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/upgrading-blockid-authentication-broker',
        component: ComponentCreator('/docs/upgrading-blockid-authentication-broker','2b3'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/user-management',
        component: ComponentCreator('/docs/user-management','96c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/user-onboarding-process-guide',
        component: ComponentCreator('/docs/user-onboarding-process-guide','d3a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/uwl',
        component: ComponentCreator('/docs/uwl','bed'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/android',
        component: ComponentCreator('/docs/v1/android','aed'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/android-2',
        component: ComponentCreator('/docs/v1/android-2','5b4'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/ios',
        component: ComponentCreator('/docs/v1/ios','360'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/ios-2',
        component: ComponentCreator('/docs/v1/ios-2','4af'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/release-notes-20211103',
        component: ComponentCreator('/docs/v1/release-notes-20211103','668'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v2/blockid-release-notes',
        component: ComponentCreator('/docs/v2/blockid-release-notes','ff6'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v2/faqs-related-to-the-blockid-product-suite',
        component: ComponentCreator('/docs/v2/faqs-related-to-the-blockid-product-suite','600'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v2/frequently-asked-questions-faq',
        component: ComponentCreator('/docs/v2/frequently-asked-questions-faq','a2f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v2/internal-faq-guide-for-blockid-product-suite',
        component: ComponentCreator('/docs/v2/internal-faq-guide-for-blockid-product-suite','9f4'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v2/release-notes-r102',
        component: ComponentCreator('/docs/v2/release-notes-r102','fc1'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v2/release-notes-r10300',
        component: ComponentCreator('/docs/v2/release-notes-r10300','34b'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v2/release-notes-v3',
        component: ComponentCreator('/docs/v2/release-notes-v3','6fc'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/webauthn',
        component: ComponentCreator('/docs/webauthn','170'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/white-label-templates',
        component: ComponentCreator('/docs/white-label-templates','c8f'),
        exact: true,
        'sidebar': "mySidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
