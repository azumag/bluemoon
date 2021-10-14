import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronDown,
  faMoon,
  faUserAlt,
  faGlobe,
  faSignOutAlt,
  faGuitar,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faChevronDown,
  faMoon,
  faUserAlt,
  faGlobe,
  faSignOutAlt,
  faGuitar,
  faMusic
);

export default (app) => {
  app.component('font-awesome-icon', FontAwesomeIcon);
};
