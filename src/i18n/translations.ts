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
			testimonials: 'Arvustused',
			equipment: 'Tehnika',
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
			filterAll: 'Kõik',
			items: [
				{ title: 'Pulm — Mari & Jaan', category: 'Pulmavideograafia', categoryKey: 'wedding', videoId: '' },
				{
					title: 'Brändivideo — kohalik ettevõte',
					category: 'Äriklipp',
					categoryKey: 'corporate',
					videoId: '',
				},
				{ title: 'Vaade ülevalt', category: 'Drooni videograafia', categoryKey: 'drone', videoId: '' },
				{ title: 'Suvefestival 2025', category: 'Sündmuse filmimine', categoryKey: 'event', videoId: '' },
				{
					title: 'Pulm — Liisa & Markus',
					category: 'Pulmavideograafia',
					categoryKey: 'wedding',
					videoId: '',
				},
				{ title: 'Tootevideo — e-pood', category: 'Äriklipp', categoryKey: 'corporate', videoId: '' },
			],
		},
		equipment: {
			title: 'Tehnika',
			subtitle: 'Kvaliteetne tehnika, mis tagab terava pildi ja sujuva liikumise igas projektis.',
			items: [
				{
					icon: 'camera',
					image: '/sony-a7-iii-body.jpg',
					name: 'Sony A7 III',
					description:
						'Täisformaadi peegelvaba kaamera 24.2MP sensori ja 4K videoga — terav pilt ka hämaras valguses.',
				},
				{
					icon: 'gimbal',
					image: '/djirs4 ini.webp',
					name: 'DJI RS4 Mini',
					description: '3-teljeline elektrooniline stabilisaator, mis tagab sujuvad ja professionaalsed kaadrid igas olukorras.',
				},
				{
					icon: 'drone',
					image: '/dji-mini-3.jpg',
					name: 'DJI Mini 3',
					description: 'Kompaktne droon alla 249g, mis filmib 4K kvaliteedis ja toob projekti täiesti uue perspektiivi.',
				},
			],
		},
		testimonials: {
			title: 'Mida kliendid ütlevad',
			subtitle: 'Tagasiside inimestelt, kelle lugusid on mul olnud rõõm jäädvustada.',
			items: [
				{
					quote: 'Lõpptulemus ületas kõik ootused — video on emotsionaalne ja samas väga professionaalne.',
					name: 'Mari K.',
					role: 'Pulmaklient',
					rating: 5,
				},
				{
					quote: 'Kiire, paindlik ja väga hea suhtlemine kogu projekti vältel. Soovitan soojalt!',
					name: 'Tanel R.',
					role: 'Ettevõtte juht',
					rating: 5,
				},
				{
					quote: 'Drooni kaadrid andsid meie sündmusele täiesti uue mõõtme. Tulemus oli muljetavaldav.',
					name: 'Kristiina O.',
					role: 'Sündmuse korraldaja',
					rating: 5,
				},
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
			testimonials: 'Testimonials',
			equipment: 'Equipment',
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
			filterAll: 'All',
			items: [
				{
					title: 'Wedding — Mari & Jaan',
					category: 'Wedding Videography',
					categoryKey: 'wedding',
					videoId: '',
				},
				{
					title: 'Brand film — local business',
					category: 'Corporate Video',
					categoryKey: 'corporate',
					videoId: '',
				},
				{ title: 'View from above', category: 'Drone Videography', categoryKey: 'drone', videoId: '' },
				{ title: 'Summer Festival 2025', category: 'Event Coverage', categoryKey: 'event', videoId: '' },
				{
					title: 'Wedding — Liisa & Markus',
					category: 'Wedding Videography',
					categoryKey: 'wedding',
					videoId: '',
				},
				{
					title: 'Product film — online store',
					category: 'Corporate Video',
					categoryKey: 'corporate',
					videoId: '',
				},
			],
		},
		equipment: {
			title: 'Equipment',
			subtitle: 'Quality gear that keeps every project sharp and the motion smooth.',
			items: [
				{
					icon: 'camera',
					image: '/sony-a7-iii-body.jpg',
					name: 'Sony A7 III',
					description:
						'Full-frame mirrorless camera with a 24.2MP sensor and 4K video — sharp in low light and built for cinematic work.',
				},
				{
					icon: 'gimbal',
					image: '/djirs4 ini.webp',
					name: 'DJI RS4 Mini',
					description: '3-axis electronic stabilizer that delivers smooth, professional footage in any situation.',
				},
				{
					icon: 'drone',
					image: '/dji-mini-3.jpg',
					name: 'DJI Mini 3',
					description: 'Compact drone under 249g, filming in 4K and bringing a whole new aerial perspective to every project.',
				},
			],
		},
		testimonials: {
			title: 'What clients say',
			subtitle: "Feedback from people whose stories I've had the pleasure of capturing.",
			items: [
				{
					quote: 'The final result exceeded every expectation — emotional and very professional at once.',
					name: 'Mari K.',
					role: 'Wedding client',
					rating: 5,
				},
				{
					quote: 'Fast, flexible, and great communication throughout the whole project. Highly recommend!',
					name: 'Tanel R.',
					role: 'Business owner',
					rating: 5,
				},
				{
					quote: 'The drone footage gave our event a whole new dimension. The result was impressive.',
					name: 'Kristiina O.',
					role: 'Event organizer',
					rating: 5,
				},
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
