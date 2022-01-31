import { HeaderComponents } from '../components/header.components';
import { NavigationComponents } from '../components/navigation.components.js';
import { PostsComponents } from '../components/posts.components.js';
import { CreateComponents } from '../components/create.components.js';
import { FavoriteComponents } from '../components/favorite.components';

new HeaderComponents('header');

const TABS = new NavigationComponents('tabs');
const POSTS = new PostsComponents('posts');
const CREATE = new CreateComponents('create');
const FAVORITE = new FavoriteComponents('favorite');

//Собираем все компоненты страницы вместе
TABS.registerTabs([
    {
        name: 'posts',
        component: POSTS
    },
    {
        name: 'create',
        component: CREATE
    },
    {
        name: 'favorite',
        component: FAVORITE
    }
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

console.log(TABS);
console.log(POSTS);
console.log(CREATE);
