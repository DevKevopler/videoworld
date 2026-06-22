export function getBase(): string {
	const base = import.meta.env.BASE_URL;
	return base.endsWith('/') ? base : `${base}/`;
}
