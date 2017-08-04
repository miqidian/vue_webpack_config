import home from './pages/home.vue'

import list from './pages/list.vue'

export default function(router) {
    router.map({
        '/': {
            name: 'home',
            component: home
        },
        '/list': {
            name: 'list',
            component: list
        },

    });

}
