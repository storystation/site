import Submenu from './submenu';

export default interface Menu {
  name: string;
  icon?: string;
  url?: string;
  submenu_ref?: string;
  submenu?: Submenu[];
}
