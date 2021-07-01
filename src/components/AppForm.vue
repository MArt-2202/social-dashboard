<template>
	<form class="dashboard-form" @submit.prevent="addWallPost">
		<div class="form-group">
			<label for="dashboard-form__message">Стена:</label>
			<textarea
				@input="checkDisabled($event)"
				ref="textarea"
				class="form-control"
				id="dashboard-form__message"
				placeholder="Что нового ?"
			></textarea>
			<button :disabled="disabled" type="submit" class="btn btn-success mt-4">
				Опубликовать
			</button>
		</div>
	</form>
</template>
<script>
	export default {
		name: 'AppForm',
		data() {
			return {
				disabled: true,
			};
		},
		methods: {
			addWallPost() {
				this.$store.commit('addWallPost', this.$refs.textarea.value);
				this.$refs.textarea.value = '';
				this.disabled = true;
			},
			checkDisabled(e) {
				if (e.target.value) {
					this.disabled = false;
				} else {
					this.disabled = true;
				}
			},
		},
	};
</script>
