export async function load(
	serverLoadEvent
): Promise<{ title: string; content: string; userResponse: any }> {
	console.log('Load function called in page.server.js');
	const { fetch, params, url, route } = serverLoadEvent;
	// console.log( 'params:', params, 'url:', url, 'route:', route);
	const { username } = params;
	const title = 'Page';
	const content = 'This is the page content';
	const response = await fetch('http://localhost:5173/api/' + username);
	const userResponse = await response.json();

	return {
		title,
		content,
		userResponse
	};
}
