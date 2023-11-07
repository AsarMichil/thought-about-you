<script>
	import { page } from '$app/stores';
	const user_name = $page.url.pathname.split('/').slice(-1)[0];
	export let data;
	const user = JSON.stringify(data.userResponse);
	const title = data.title;
	const content = data.content;
</script>

<p>This is {user_name}</p>
<p>{user}</p>
<p>{title}</p>
<p>{content}</p>
<p />
