<template>
	<div id="app">
		<app-form />
		<app-posts />
	</div>
</template>
<script>
	import AppForm from '@/components/AppForm';
	import AppPosts from '@/components/AppPosts';

	export default {
		name: 'App',
		components: {
			AppForm,
			AppPosts,
		},
		data() {
			return {};
		},
		methods: {},
	};
</script>

<style>
	textarea {
		min-height: 50px;
	}

	.dashboard {
		position: relative;
		padding: 10px 54px 10px 10px;
	}

	.dashboard div {
		position: absolute;
		top: 10px;
		right: 10px;
	}

	.dashboard strong {
		font-size: 0.875rem;
	}

	.dashboard .fa {
		margin-right: 7px;
		cursor: pointer;
	}

	.dashboard .fa:last-child {
		margin-right: 0;
	}

	.fa {
		transition: all 0.3s ease-in-out;
	}

	.fa-pencil {
		color: #ccc;
	}

	.fa-pencil:hover {
		color: #00ea04;
	}

	.fa-times {
		color: #f30000;
	}

	.fa-times:hover {
		color: #db0000;
	}

	.edit-dashboard {
		padding: 10px;
	}
</style>
