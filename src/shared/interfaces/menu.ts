import Submenu from './submenu';

export default interface Menu {
  name: string;
  icon?: string;
  url?: string;
  slug: string;
  display_when_logged: boolean;
  display_when_not_logged: boolean;
  submenu_ref?: string;
  submenu?: Submenu[];
}
