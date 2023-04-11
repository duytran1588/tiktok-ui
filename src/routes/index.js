import { HeaderOnly } from '~/components/Layout';
//pages
import configRoutes from '~/config/routes';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

const { home, following, profile, upload, search } = configRoutes;
//Những router ko cần đăng nhập vẫn vào được
const publicRoutes = [
  {
    path: home,
    component: Home,
  },
  {
    path: following,
    component: Following,
  },
  {
    path: profile,
    component: Profile,
  },
  {
    path: upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: search,
    component: Search,
    layout: null,
  },
];

//Những router phải đăng nhập mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
