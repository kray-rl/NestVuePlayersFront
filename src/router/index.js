import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import PlayersComponent from '@/views/Players';

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/top', name: 'Top', component: PlayersComponent, props: { api: 'top'} },
    { path: '/full', name: 'Edit', component: PlayersComponent, props: { api: ''} },
  ]
});