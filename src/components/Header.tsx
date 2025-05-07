import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/uncode" class={url == '/uncode' && 'active'}>
					Home
				</a>
				<a href="/uncode/text" class={url == '/uncode/text' && 'active'}>
					Base64encode
				</a>
			</nav>
		</header>
	);
}
