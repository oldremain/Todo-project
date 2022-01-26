import { HeaderComponents } from '../components/header.components';
import { NavigationComponents } from '../components/navigation.components.js';
import { PostsComponents } from '../components/posts.components.js';
import { CreateComponents} from '../components/create.components.js';
import { FavoriteComponents } from '../components/favorite.components';

new HeaderComponents('header');

const TABS = new NavigationComponents('tabs');
const NOTES = new PostsComponents('notes');
const CREATE = new CreateComponents('form');
const FAVORITE = new FavoriteComponents();


console.log(TABS);
console.log(NOTES);
console.log(CREATE);



