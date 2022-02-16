import { HeaderComponents } from '../components/header.components';
import { NavigationComponents } from '../components/navigation.components';
import { PostsComponents } from '../components/posts.components';
import { CreateComponents } from '../components/create.components';
import { FavoriteComponents } from '../components/favorite.components';
import { apiService } from '../services/app.service';

// import { HomeButton } from '../components/homebutton.component';

//HomeButton
// const header = new HeaderComponents('header');
// const HOME = new HomeButton('home-btn', header);

new HeaderComponents('header');
localStorage.getItem('visited')
  ? document.querySelector('.todo').classList.remove('hide')
  : console.log('header is no visited');

const POSTS = new PostsComponents('posts');
const CREATE = new CreateComponents('create');
const FAVORITE = new FavoriteComponents('favorite');

//Собираем все компоненты страницы вместе
const TABS = new NavigationComponents('tabs');
TABS.registerTabs([
  {
    name: 'posts',
    component: POSTS,
  },
  {
    name: 'create',
    component: CREATE,
  },
  {
    name: 'favorite',
    component: FAVORITE,
  },
]);

// Табы для маленького экрана
const TABS_SMALLSCREEN = new NavigationComponents('tabs-sm');
TABS_SMALLSCREEN.registerTabs([
  {
    name: 'posts',
    component: POSTS,
  },
  {
    name: 'create',
    component: CREATE,
  },
  {
    name: 'favorite',
    component: FAVORITE,
  },
]);

console.log(TABS);
console.log(POSTS);
console.log(CREATE);
console.log(FAVORITE);
console.log(apiService);
