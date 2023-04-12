import { HeaderOnly } from '~/layouts';
//pages
import config from '~/config';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';
import LiveStream from '~/pages/LiveStream';

//Những router ko cần đăng nhập vẫn vào được
export const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.routes.search,
    component: Search,
    layout: null,
  },
  {
    path: config.routes.live,
    component: Live,
  },
  {
    path: config.routes.livestream,
    component: LiveStream,
  },
];

//Những router phải đăng nhập mới vào được
export const privateRoutes = [];
