interface BaseNavLink {
  label: string;
}

interface NavDropDown extends BaseNavLink {
  submenu: NavDropDownItem[];
}

interface NavDropDownItem extends BaseNavLink {
  submenu?: NavDropDownItem[];
}

interface NavLink extends BaseNavLink {
  href: string;
}

export type MenuLink = NavDropDown | NavLink;
