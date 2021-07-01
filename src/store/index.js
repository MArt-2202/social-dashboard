import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',

	state: {
		wallCount: 0,
		wallPosts: [],
		editPostData: {},
		editText: '',
		disabled: true,
	},
	mutations: {
		addWallPost(state, message) {
			state.editText = message.trim();

			if (state.editText) {
				state.wallPosts.push({
					id: state.wallCount,
					text: state.editText,
				});

				state.wallCount++;
				state.editText = '';
			}
		},
		deletePost(state, index) {
			if (state.wallPosts[index]) {
				state.wallPosts.splice(index, 1);
			}
		},
		editPost(state, post) {
			state.editPostData = post;
		},
		editFieldVisible(state, post) {
			return state.editPostData === post;
		},
		editValue(state, payload) {
			state.wallPosts[payload.index].text = payload.event;
			state.editText = payload.event;
		},
		editPostOnSubmit(state, payload) {
			if (
				state.wallPosts[payload.index] &&
				state.wallPosts[payload.index].text !== state.editText &&
				state.editText !== ''
			) {
				if (payload.event.previousElementSibling.tagName == 'TEXTAREA') {
					state.wallPosts[payload.index].text = payload.event.previousElementSibling.value;
				}
			}
			state.editText = '';
		},
	},
	actions: {},
	modules: {},
});
