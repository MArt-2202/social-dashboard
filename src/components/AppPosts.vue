<template>
	<div>
		<div class="card mt-3" v-for="(post, index) in this.$store.state.wallPosts" :key="post.id">
			<div class="cart-body">
				<div class="dashboard">
					<strong>{{ post.text }}</strong>
					<div>
						<i @click="editPost(post)" class="fa fa-pencil"></i>
						<i @click="deletePost(index)" class="fa fa-times"></i>
					</div>
				</div>
				<div v-if="editFieldVisible(post)" class="edit-dashboard mt-2">
					<textarea
						:value="post.text"
						class="form-control"
						@change="editValue($event, index)"
					></textarea>
					<button @click="editPostOnSubmit($event, index)" class="btn btn-success mt-2">
						Отредактировать
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'AppPosts',
		data() {
			return {};
		},
		methods: {
			editPost(post) {
				this.$store.commit('editPost', post);
			},
			deletePost(index) {
				this.$store.commit('deletePost', index);
			},
			editPostOnSubmit(e, index) {
				this.$store.commit('editPostOnSubmit', { event: e.target, index });
			},
			editValue(e, index) {
				this.$store.commit('editValue', { event: e.target.value, index });
			},
			editFieldVisible(post) {
				this.$store.commit('editFieldVisible', post);
				return this.$store.state.editPostData === post;
			},
		},
		computed: {
			disabled() {
				return this.$store.state.disabled;
			},
		},
	};
</script>
