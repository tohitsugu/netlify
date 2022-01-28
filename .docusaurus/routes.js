
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
    component: ComponentCreator('/docs','a58'),
    routes: [
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
        path: '/docs/api/otp',
        component: ComponentCreator('/docs/api/otp','89f'),
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
        path: '/docs/index',
        component: ComponentCreator('/docs/index','29c'),
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
        path: '/docs/uwl',
        component: ComponentCreator('/docs/uwl','bed'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/1kmodule',
        component: ComponentCreator('/docs/v1/1kmodule','df9'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/active-directory-or-ldap-server-configuration',
        component: ComponentCreator('/docs/v1/active-directory-or-ldap-server-configuration','158'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/administration-console',
        component: ComponentCreator('/docs/v1/administration-console','2ad'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/analytics',
        component: ComponentCreator('/docs/v1/analytics','a99'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/android',
        component: ComponentCreator('/docs/v1/android','0f8'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/android-1',
        component: ComponentCreator('/docs/v1/android-1','63a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/android-2',
        component: ComponentCreator('/docs/v1/android-2','45d'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/applications',
        component: ComponentCreator('/docs/v1/applications','479'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/auth0',
        component: ComponentCreator('/docs/v1/auth0','0c4'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/authenticaition-modules-configuration',
        component: ComponentCreator('/docs/v1/authenticaition-modules-configuration','91a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/authentication-modules',
        component: ComponentCreator('/docs/v1/authentication-modules','34e'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/authentication-scheme',
        component: ComponentCreator('/docs/v1/authentication-scheme','e09'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/authentication-scheme-configuration',
        component: ComponentCreator('/docs/v1/authentication-scheme-configuration','d96'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/block-id-proof-of-concept-poc-guide',
        component: ComponentCreator('/docs/v1/block-id-proof-of-concept-poc-guide','29f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/blockid-attributes',
        component: ComponentCreator('/docs/v1/blockid-attributes','6b2'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/blockid-authentication-broker-user-guide',
        component: ComponentCreator('/docs/v1/blockid-authentication-broker-user-guide','78b'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/blockid-connector-module',
        component: ComponentCreator('/docs/v1/blockid-connector-module','5b6'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/blockid-mobile-application-user-guide',
        component: ComponentCreator('/docs/v1/blockid-mobile-application-user-guide','261'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/blockid-sdk',
        component: ComponentCreator('/docs/v1/blockid-sdk','de7'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/blockid-solutions',
        component: ComponentCreator('/docs/v1/blockid-solutions','749'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/blockid-templates',
        component: ComponentCreator('/docs/v1/blockid-templates','d53'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/blockid-user-interface-templates',
        component: ComponentCreator('/docs/v1/blockid-user-interface-templates','cbe'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/blockid-user-journey',
        component: ComponentCreator('/docs/v1/blockid-user-journey','3bb'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/blockid-workforce-mobile-application-user-guide-1',
        component: ComponentCreator('/docs/v1/blockid-workforce-mobile-application-user-guide-1','b38'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/blockid-workforce-mobile-application-user-guideold',
        component: ComponentCreator('/docs/v1/blockid-workforce-mobile-application-user-guideold','516'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/broker-installation',
        component: ComponentCreator('/docs/v1/broker-installation','2ff'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/community-management',
        component: ComponentCreator('/docs/v1/community-management','42f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/core-concepts-of-blockid-credential-provider-guide',
        component: ComponentCreator('/docs/v1/core-concepts-of-blockid-credential-provider-guide','08f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/core-configurations',
        component: ComponentCreator('/docs/v1/core-configurations','1ad'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/create-native-user',
        component: ComponentCreator('/docs/v1/create-native-user','05d'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/customizing-the-branding-of-your-blockid-login-page',
        component: ComponentCreator('/docs/v1/customizing-the-branding-of-your-blockid-login-page','517'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/dashboard',
        component: ComponentCreator('/docs/v1/dashboard','324'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/datastore-configuration',
        component: ComponentCreator('/docs/v1/datastore-configuration','903'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/datastore-configuration-1',
        component: ComponentCreator('/docs/v1/datastore-configuration-1','54a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/deploying-smart-contract',
        component: ComponentCreator('/docs/v1/deploying-smart-contract','556'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/directory',
        component: ComponentCreator('/docs/v1/directory','7a8'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/email-templates',
        component: ComponentCreator('/docs/v1/email-templates','9d4'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/end-user-guide',
        component: ComponentCreator('/docs/v1/end-user-guide','b22'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/forgerock',
        component: ComponentCreator('/docs/v1/forgerock','caa'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/generic-saml-application',
        component: ComponentCreator('/docs/v1/generic-saml-application','66e'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/getting-started-with-videos',
        component: ComponentCreator('/docs/v1/getting-started-with-videos','727'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/glossary',
        component: ComponentCreator('/docs/v1/glossary','990'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/google-cloud-platform-kubernetes-architecture-guide-for-blockid-platform',
        component: ComponentCreator('/docs/v1/google-cloud-platform-kubernetes-architecture-guide-for-blockid-platform','7d3'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/gsuite',
        component: ComponentCreator('/docs/v1/gsuite','268'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/idp-configuration',
        component: ComponentCreator('/docs/v1/idp-configuration','267'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/installing-blockid-admin-console',
        component: ComponentCreator('/docs/v1/installing-blockid-admin-console','fb7'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/installing-blockid-authentication-broker',
        component: ComponentCreator('/docs/v1/installing-blockid-authentication-broker','45e'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/installing-blockid-credential-provider',
        component: ComponentCreator('/docs/v1/installing-blockid-credential-provider','15d'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-pingfederate',
        component: ComponentCreator('/docs/v1/integration-pingfederate','c38'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-adfs',
        component: ComponentCreator('/docs/v1/integration-with-adfs','4b2'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-appgate',
        component: ComponentCreator('/docs/v1/integration-with-appgate','682'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-arcon',
        component: ComponentCreator('/docs/v1/integration-with-arcon','4cb'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-auth0',
        component: ComponentCreator('/docs/v1/integration-with-auth0','1fa'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-beyondtrust',
        component: ComponentCreator('/docs/v1/integration-with-beyondtrust','765'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-broadcom',
        component: ComponentCreator('/docs/v1/integration-with-broadcom','648'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-cisco-check-point',
        component: ComponentCreator('/docs/v1/integration-with-cisco-check-point','d9f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-citrix-netscaler',
        component: ComponentCreator('/docs/v1/integration-with-citrix-netscaler','03d'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-cyberark',
        component: ComponentCreator('/docs/v1/integration-with-cyberark','f2a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-cyberark-idaptive-identity',
        component: ComponentCreator('/docs/v1/integration-with-cyberark-idaptive-identity','9f4'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-forgerock',
        component: ComponentCreator('/docs/v1/integration-with-forgerock','c55'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-gsuite',
        component: ComponentCreator('/docs/v1/integration-with-gsuite','7e9'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-oracle-idcs-identity-cloud-service',
        component: ComponentCreator('/docs/v1/integration-with-oracle-idcs-identity-cloud-service','e64'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-pingfederate',
        component: ComponentCreator('/docs/v1/integration-with-pingfederate','67c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-salesforce',
        component: ComponentCreator('/docs/v1/integration-with-salesforce','e48'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-thycotic',
        component: ComponentCreator('/docs/v1/integration-with-thycotic','c9a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-vmware',
        component: ComponentCreator('/docs/v1/integration-with-vmware','5a8'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-windows',
        component: ComponentCreator('/docs/v1/integration-with-windows','9b8'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/integration-with-zscaler',
        component: ComponentCreator('/docs/v1/integration-with-zscaler','62a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/intergration-with-okta',
        component: ComponentCreator('/docs/v1/intergration-with-okta','793'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/internal-doc-blockid-authentication-broker',
        component: ComponentCreator('/docs/v1/internal-doc-blockid-authentication-broker','2b3'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/internal-guide-blockid-credential-provider',
        component: ComponentCreator('/docs/v1/internal-guide-blockid-credential-provider','5d6'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/internal-process',
        component: ComponentCreator('/docs/v1/internal-process','396'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/introduction-to-athena-admin-portal',
        component: ComponentCreator('/docs/v1/introduction-to-athena-admin-portal','bc4'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/introduction-to-blockid',
        component: ComponentCreator('/docs/v1/introduction-to-blockid','c39'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/introduction-to-blockid-admin-console',
        component: ComponentCreator('/docs/v1/introduction-to-blockid-admin-console','caf'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/ios',
        component: ComponentCreator('/docs/v1/ios','c99'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/ios-1',
        component: ComponentCreator('/docs/v1/ios-1','c25'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/ios-2',
        component: ComponentCreator('/docs/v1/ios-2','53a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/item-1',
        component: ComponentCreator('/docs/v1/item-1','7cb'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/item-2',
        component: ComponentCreator('/docs/v1/item-2','bd5'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/item-3',
        component: ComponentCreator('/docs/v1/item-3','408'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/item-4',
        component: ComponentCreator('/docs/v1/item-4','cd0'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/license-keys',
        component: ComponentCreator('/docs/v1/license-keys','0b7'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/login-with-mfa',
        component: ComponentCreator('/docs/v1/login-with-mfa','0f0'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/office365-integration',
        component: ComponentCreator('/docs/v1/office365-integration','2de'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/okta',
        component: ComponentCreator('/docs/v1/okta','4a6'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/one-time-passcode-module-configuration',
        component: ComponentCreator('/docs/v1/one-time-passcode-module-configuration','f74'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/profile',
        component: ComponentCreator('/docs/v1/profile','6a1'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/radius-configuration',
        component: ComponentCreator('/docs/v1/radius-configuration','9cd'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/radius-integration-backup',
        component: ComponentCreator('/docs/v1/radius-integration-backup','3e9'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/release-notes',
        component: ComponentCreator('/docs/v1/release-notes','e31'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/release-notes-20211103',
        component: ComponentCreator('/docs/v1/release-notes-20211103','65c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/reports',
        component: ComponentCreator('/docs/v1/reports','8b8'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/role-management',
        component: ComponentCreator('/docs/v1/role-management','21a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/salesforce',
        component: ComponentCreator('/docs/v1/salesforce','4a0'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/saml-configuration',
        component: ComponentCreator('/docs/v1/saml-configuration','02e'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/samlv2',
        component: ComponentCreator('/docs/v1/samlv2','94f'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/scep-configuration',
        component: ComponentCreator('/docs/v1/scep-configuration','32b'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/scep-integration',
        component: ComponentCreator('/docs/v1/scep-integration','001'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/software-and-hardware-otp-support',
        component: ComponentCreator('/docs/v1/software-and-hardware-otp-support','d4a'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/technical-guide-for-liveid-driving-license-and-passport-scan-support',
        component: ComponentCreator('/docs/v1/technical-guide-for-liveid-driving-license-and-passport-scan-support','7b6'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/tenant-management',
        component: ComponentCreator('/docs/v1/tenant-management','a75'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/test',
        component: ComponentCreator('/docs/v1/test','107'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/upgrading-blockid-authentication-broker',
        component: ComponentCreator('/docs/v1/upgrading-blockid-authentication-broker','92c'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/user-management',
        component: ComponentCreator('/docs/v1/user-management','6e4'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/user-onboarding-process-guide',
        component: ComponentCreator('/docs/v1/user-onboarding-process-guide','c80'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/users',
        component: ComponentCreator('/docs/v1/users','b04'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/webauthn',
        component: ComponentCreator('/docs/v1/webauthn','44e'),
        exact: true,
        'sidebar': "mySidebar"
      },
      {
        path: '/docs/v1/white-label-templates',
        component: ComponentCreator('/docs/v1/white-label-templates','86f'),
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
