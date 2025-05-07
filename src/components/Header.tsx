import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/uncode" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/uncode/text" class={url == '/text' && 'active'}>
					Base64encode
				</a>
				<a href="/uncode/404" class={url == '/404' && 'active'}>
					404
				</a>
			</nav>
		</header>
	);
}
