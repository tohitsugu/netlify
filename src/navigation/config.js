export const links = Object.freeze({
  root: "/devportal/",
  login: "/devportal/login",
  register: "/devportal/register",
  sso: "sso",
  notFound: "404",
  default: "default",
});

export const routes = Object.freeze({
  root: "/:communityName",
  rootEntity: "/:communityName/:entity?",
  requestInvite: `/:communityName/${links.requestInvite}`,
  login: `/:communityName/${links.login}`,
  sso: `/:communityName/${links.sso}`,
  slo: `/:communityName/${links.slo}`,
});

export const sidebarConfig = {
  menu: [
    {
      name: "Home",
      link: "/home",
      icon: "img/home.png",
      isAuth: true,
    },
  ],
};
