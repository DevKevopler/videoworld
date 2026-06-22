export const languages = ['et', 'en'] as const;
export type Lang = (typeof languages)[number];

export const translations = {
	et: {
		meta: {
			title: 'Videomaailm | Videograafia teenused',
			description:
				'Videomaailm pakub professionaalset videograafiat pulmadele, ettevõtetele ja sündmustele. Küsi pakkumist juba täna.',
		},
		nav: {
			home: 'Avaleht',
			services: 'Teenused',
			portfolio: 'Portfoolio',
			about: 'Minust',
			contact: 'Kontakt',
			cta: 'Küsi pakkumist',
		},
		hero: {
			eyebrow: 'Videograafia teenused',
			title: 'Lood, mis jäävad ekraanile ja meelde',
			subtitle:
				'Filmin pulmi, ettevõtte videoid ja sündmusi üle Eesti — südamega tehtud kaadrid, mida tasub uuesti vaadata.',
			ctaPrimary: 'Küsi pakkumist',
			ctaSecondary: 'Vaata portfoolio',
		},
		services: {
			title: 'Teenused',
			subtitle: 'Igale projektile oma lähenemine — alates ideest kuni valmis videoni.',
			items: [
				{
					icon: 'rings',
					title: 'Pulmavideograafia',
					description:
						'Teie pulmapäev tervikliku lugu kujul — ettevalmistusest kuni viimase tantsuni.',
					price: 'alates 800 €',
				},
				{
					icon: 'briefcase',
					title: 'Äriklipid',
					description: 'Brändivideod, tutvustusklipid ja sotsiaalmeedia sisu ettevõtetele.',
					price: 'alates 300 €',
				},
				{
					icon: 'drone',
					title: 'Drooni videograafia',
					description: 'Õhust filmitud kaadrid, mis annavad projektile uue mõõtme.',
					price: 'alates 150 €',
				},
				{
					icon: 'calendar',
					title: 'Sündmuste filmimine',
					description: 'Konverentsid, kontserdid ja erasündmused professionaalselt jäädvustatud.',
					price: 'alates 250 €',
				},
			],
		},
		portfolio: {
			title: 'Portfoolio',
			subtitle: 'Mõned viimased tööd — lisandub pidevalt.',
			placeholderBadge: 'Video lisamisel',
			items: [
				{ title: 'Pulm — Mari & Jaan', category: 'Pulmavideograafia', videoId: '' },
				{ title: 'Brändivideo — kohalik ettevõte', category: 'Äriklipp', videoId: '' },
				{ title: 'Vaade ülevalt', category: 'Drooni videograafia', videoId: '' },
				{ title: 'Suvefestival 2025', category: 'Sündmuse filmimine', videoId: '' },
			],
		},
		about: {
			title: 'Minust',
			body: [
				'Tere! Olen videograaf, kelle jaoks iga projekt on uus lugu, mis ootab jutustamist. Töötan üle Eesti ning toon igale kaadrile kaasa tähelepanu detailidele ja kire oma töö vastu.',
				'Kasutan kaasaegset filmitehnikat ja droone, et iga video tunduks kvaliteetne ja ajatu — olgu see pulm, ettevõtte tutvustus või suursündmus.',
			],
			highlights: [
				{ title: 'Kogemus', description: 'Aastatepikkune kogemus erinevate videoprojektidega.' },
				{ title: 'Tehnika', description: 'Kaasaegsed kaamerad, stabilisaatorid ja droonid.' },
				{ title: 'Lähenemine', description: 'Personaalne ja paindlik koostöö igal etapil.' },
			],
		},
		contact: {
			title: 'Kontakt',
			subtitle: 'Räägime teie projektist — saada sõnum või võta otse ühendust.',
			phoneLabel: 'Telefon',
			phone: '+372 5000 0000',
			emailLabel: 'E-mail',
			email: 'info@videomaailm.ee',
			locationLabel: 'Asukoht',
			location: 'Tallinn, Eesti',
			form: {
				name: 'Nimi',
				email: 'E-mail',
				message: 'Sõnum',
				submit: 'Saada sõnum',
			},
		},
		footer: {
			tagline: 'Lood, mis jäävad meelde.',
			rights: 'Kõik õigused kaitstud.',
		},
	},
	en: {
		meta: {
			title: 'Videomaailm | Videography Services',
			description:
				'Videomaailm offers professional videography for weddings, businesses, and events across Estonia. Get a quote today.',
		},
		nav: {
			home: 'Home',
			services: 'Services',
			portfolio: 'Portfolio',
			about: 'About',
			contact: 'Contact',
			cta: 'Get a quote',
		},
		hero: {
			eyebrow: 'Videography services',
			title: 'Stories that stay on screen and in mind',
			subtitle:
				'I film weddings, corporate videos, and events across Estonia — footage made with heart, worth watching again.',
			ctaPrimary: 'Get a quote',
			ctaSecondary: 'View portfolio',
		},
		services: {
			title: 'Services',
			subtitle: 'Every project gets its own approach — from idea to finished film.',
			items: [
				{
					icon: 'rings',
					title: 'Wedding Videography',
					description: 'Your wedding day as a complete story — from getting ready to the last dance.',
					price: 'from 800 €',
				},
				{
					icon: 'briefcase',
					title: 'Corporate Videos',
					description: 'Brand films, promo clips, and social media content for businesses.',
					price: 'from 300 €',
				},
				{
					icon: 'drone',
					title: 'Drone Videography',
					description: 'Aerial footage that gives your project a whole new perspective.',
					price: 'from 150 €',
				},
				{
					icon: 'calendar',
					title: 'Event Coverage',
					description: 'Conferences, concerts, and private events captured professionally.',
					price: 'from 250 €',
				},
			],
		},
		portfolio: {
			title: 'Portfolio',
			subtitle: 'A few recent projects — more added regularly.',
			placeholderBadge: 'Video coming soon',
			items: [
				{ title: 'Wedding — Mari & Jaan', category: 'Wedding Videography', videoId: '' },
				{ title: 'Brand film — local business', category: 'Corporate Video', videoId: '' },
				{ title: 'View from above', category: 'Drone Videography', videoId: '' },
				{ title: 'Summer Festival 2025', category: 'Event Coverage', videoId: '' },
			],
		},
		about: {
			title: 'About',
			body: [
				"Hi! I'm a videographer who treats every project as a new story waiting to be told. I work across Estonia, bringing attention to detail and a passion for craft to every shot.",
				'I use modern filming gear and drones so every video feels polished and timeless — whether it’s a wedding, a company intro, or a major event.',
			],
			highlights: [
				{ title: 'Experience', description: 'Years of experience across many kinds of video projects.' },
				{ title: 'Gear', description: 'Modern cameras, stabilizers, and drones.' },
				{ title: 'Approach', description: 'Personal, flexible collaboration at every stage.' },
			],
		},
		contact: {
			title: 'Contact',
			subtitle: "Let's talk about your project — send a message or reach out directly.",
			phoneLabel: 'Phone',
			phone: '+372 5000 0000',
			emailLabel: 'Email',
			email: 'info@videomaailm.ee',
			locationLabel: 'Location',
			location: 'Tallinn, Estonia',
			form: {
				name: 'Name',
				email: 'Email',
				message: 'Message',
				submit: 'Send message',
			},
		},
		footer: {
			tagline: 'Stories worth remembering.',
			rights: 'All rights reserved.',
		},
	},
} as const;

export function getTranslations(lang: Lang) {
	return translations[lang];
}
