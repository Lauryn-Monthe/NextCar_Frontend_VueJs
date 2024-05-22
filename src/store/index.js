import { Vuex } from 'vuex';
import { Vue } from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        memories: [
            {
                id: "m1",
                title: "A trip into the mountains",
                image: "https://www.exoticca.com/uk/magazine/wp-content/uploads/2021/06/matterhorn-BLOG-mountains.png",
                description: "It was a really nice trip!",
            },
            {
                id: "m2",
                title: "Surfing the sea side",
                image: "https://i.ytimg.com/vi/zjedr_QrWlo/maxresdefault.jpg",
                description: "Feelig the cool breeze!",
            },
            {
                id: "m3",
                title: "Good eating",
                image: "https://teepservice.com/wp-content/uploads/2021/09/FB_IMG_15307324283946846-1-min-2.jpg",
                description: "Really tasty!",
            },
        ]
    },

    getters: {
        memories(state) {
            return state.memories;
        }
    }
});

export default store;