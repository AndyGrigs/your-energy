import packageData from '../../../package.json' assert { type: 'json' };

const baseUrl = `${window.location.origin}${packageData.homepage || ''}`;

const interanlLinks = document.querySelectorAll('a[href^="/"]');

export function changeInteranlLinksBaseURL() {
	if (baseUrl) {
		interanlLinks.forEach(anchor => {
			const relativeHref = anchor.getAttribute('href');
			const url = `${baseUrl}${relativeHref}`;
			anchor.href = new URL(url);
		});
	}
}
