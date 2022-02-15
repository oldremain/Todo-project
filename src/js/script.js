import { HeaderComponents } from '../components/header.components';
import { NavigationComponents } from '../components/navigation.components';
import { PostsComponents } from '../components/posts.components';
import { CreateComponents } from '../components/create.components';
import { FavoriteComponents } from '../components/favorite.components';

import { apiService } from '../services/app.service';



//HomeButton
// import { HomeButton } from '../components/homebutton.component';
// let header = new HeaderComponents('header');

new HeaderComponents('header');

const TABS = new NavigationComponents('tabs');
const POSTS = new PostsComponents('posts');
const CREATE = new CreateComponents('create');
const FAVORITE = new FavoriteComponents('favorite');

//Собираем все компоненты страницы вместе
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
// const TABS_SMALLSCREEN = new NavigationComponents('tabs-sm');
// TABS_SMALLSCREEN.registerTabs([
//     {
//         name: 'posts',
//         component: POSTS
//     },
//     {
//         name: 'create',
//         component: CREATE
//     },
//     {
//         name: 'favorite',
//         component: FAVORITE
//     }
// ]);
// const HOME = new HomeButton('home-btn', header);

console.log(TABS);
console.log(POSTS);
console.log(CREATE);
console.log(FAVORITE);
console.log(apiService);