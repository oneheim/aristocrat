import orion from '../assets/project-orion.jpg'
import orion1 from '../assets/project-orion-1.jpg'
import orion2 from '../assets/project-orion-2.jpg'
import orion3 from '../assets/project-orion-3.jpg'
import orion4 from '../assets/project-orion-4.jpg'
import yandex1 from '../assets/project-yandex-1.jpg'
import yandex2 from '../assets/project-yandex-2.jpg'
import yandex3 from '../assets/project-yandex-3.jpg'
import yandex4 from '../assets/project-yandex-4.jpg'
import yandex5 from '../assets/project-yandex-5.jpg'
import m2030_08 from '../assets/project-moscow2030-01.jpg'
import m2030_09 from '../assets/project-moscow2030-02.jpg'
import m2030_10 from '../assets/project-moscow2030-03.jpg'
import m2030_11 from '../assets/project-moscow2030-04.jpg'
import m2030_12 from '../assets/project-moscow2030-05.jpg'
import m2030_13 from '../assets/project-moscow2030-06.jpg'
import m2030_14 from '../assets/project-moscow2030-07.jpg'
import m2030_15 from '../assets/project-moscow2030-08.jpg'
import m2030_16 from '../assets/project-moscow2030-09.jpg'
import m2030_17 from '../assets/project-moscow2030-10.jpg'
import m2030_18 from '../assets/project-moscow2030-11.jpg'
import m2030_19 from '../assets/project-moscow2030-12.jpg'
import m2030_20 from '../assets/project-moscow2030-13.jpg'
import m2030_21 from '../assets/project-moscow2030-14.jpg'
import m2030_22 from '../assets/project-moscow2030-15.jpg'
import m2030_23 from '../assets/project-moscow2030-16.jpg'
import m2030_24 from '../assets/project-moscow2030-17.jpg'
import m2030_25 from '../assets/project-moscow2030-18.jpg'
import m2030_26 from '../assets/project-moscow2030-19.jpg'
import m2030_27 from '../assets/project-moscow2030-20.jpg'
import m2030_main from '../assets/project-moscow2030-main.jpg'
import heroism1 from '../assets/project-heroism-01.jpg'
import heroism2 from '../assets/project-heroism-02.jpg'
import heroism3 from '../assets/project-heroism-03.jpg'
import heroism4 from '../assets/project-heroism-04.jpg'
import heroism5 from '../assets/project-heroism-05.jpg'
import heroism6 from '../assets/project-heroism-06.jpg'
import heroism7 from '../assets/project-heroism-07.jpg'
import heroism8 from '../assets/project-heroism-08.jpg'
import heroism9 from '../assets/project-heroism-09.jpg'
import boscoEvent1 from '../assets/project-bosco-expedition-01.jpg'
import boscoEvent2 from '../assets/project-bosco-expedition-02.jpg'
import boscoEvent3 from '../assets/project-bosco-expedition-03.jpg'
import boscoEvent4 from '../assets/project-bosco-expedition-04.jpg'
import boscoEvent5 from '../assets/project-bosco-expedition-05.jpg'
import boscoEvent7 from '../assets/project-bosco-expedition-07.jpg'
import boscoEvent8 from '../assets/project-bosco-expedition-08.jpg'
import boscoEvent9 from '../assets/project-bosco-expedition-09.jpg'
import boscoEvent10 from '../assets/project-bosco-expedition-10.jpg'
import atlantes1 from '../assets/project-gazprom-atlantes-01.jpg'
import atlantes2 from '../assets/project-gazprom-atlantes-02.jpg'
import atlantes3 from '../assets/project-gazprom-atlantes-03.webp'
import atlantes4 from '../assets/project-gazprom-atlantes-04.jpg'
import atlantes5 from '../assets/project-gazprom-atlantes-05.jpg'
import atlantes6 from '../assets/project-gazprom-atlantes-06.jpg'
import atlantes7 from '../assets/project-gazprom-atlantes-07.jpg'
import atlantes8 from '../assets/project-gazprom-atlantes-08.jpg'
import atlantes9 from '../assets/project-gazprom-atlantes-09.jpg'
import atlantes10 from '../assets/project-gazprom-atlantes-10.jpg'
import atlantesCover from '../assets/project-gazprom-atlantes-cover.webp'
import millennium1 from '../assets/project-millennium-01.webp'
import millennium2 from '../assets/project-millennium-02.jpg'
import millennium3 from '../assets/project-millennium-03.jpg'
import millennium4 from '../assets/project-millennium-04.jpg'
import millennium5 from '../assets/project-millennium-05.jpg'
import millennium6 from '../assets/project-millennium-06.jpg'
import troika1 from '../assets/project-troika-01.jpg'
import troika2 from '../assets/project-troika-02.jpg'
import troika3 from '../assets/project-troika-03.jpg'
import matryoshka1 from '../assets/project-matryoshka-01.jpg'
import matryoshka2 from '../assets/project-matryoshka-02.jpg'
import matryoshka3 from '../assets/project-matryoshka-03.jpg'
import matryoshka4 from '../assets/project-matryoshka-04.jpg'
import matryoshka5 from '../assets/project-matryoshka-05.jpg'

const moscow2030Gallery = [
  m2030_19,
  m2030_08,
  m2030_09,
  m2030_10,
  m2030_15,
  m2030_13,
  m2030_18,
  m2030_26,
  m2030_27,
  m2030_11,
  m2030_12,
  m2030_14,
  m2030_16,
  m2030_17,
  m2030_20,
  m2030_21,
  m2030_22,
  m2030_23,
  m2030_24,
  m2030_25,
  m2030_main,
]

const defaultFacts = [
  { value: '2', unit: 'months of installation', note: '4 locations were installed in record time.' },
  { value: '>1.5', unit: 'million people', note: 'people attended the festival' },
  { value: '>400', unit: 'people', note: 'are involved in the installation' },
]

function makeProject({
  slug,
  title,
  heroLines,
  subtitle,
  tag,
  year,
  place,
  city,
  venue,
  date,
  image,
  gallery,
  facts,
  copy,
}) {
  return {
    slug,
    title,
    heroLines,
    subtitle,
    tag,
    tagLabel: tag.replace('/', ''),
    year,
    place,
    city,
    venue,
    date,
    image,
    thumb: image,
    gallery,
    facts: facts ?? defaultFacts,
    copy,
  }
}

export const catalogProjects = [
  makeProject({
    slug: 'moscow-2030',
    title: 'Moscow 2030',
    heroLines: ['MOSCOW', '2030'],
    subtitle: 'MY DISTRICT PROGRAM, MOSCOW',
    tag: '/city festivals',
    year: '/2025',
    place: 'Park of the 50th Anniversary of October, Moscow',
    city: 'Moscow',
    venue: 'Park of the 50th Anniversary of October',
    date: '08.2025',
    image: m2030_main,
    gallery: moscow2030Gallery,
    copy: [
      'MOSCOW 2030 was a city festival stage within Moscow\'s "My District" program — a full production of the main stage, sound and lighting, built around a bold blue-and-silver identity that anchored the whole park.',
      'Around it we built an immersive pavilion trail: a mirrored tunnel with a floral, cushioned interior for quiet rest, an arched water channel for kayaking, and a space-themed zone with planet sculptures and astronaut figures.',
      'A dedicated science wall — "From bacteria to neural interfaces" — turned a timeline of evolution into an interactive installation, while chill-out tunnels with ball pits and bean bags gave families a place to slow down between activities.',
    ],
  }),
  makeProject({
    slug: 'orion-soft',
    title: 'Orion Digital Day',
    heroLines: ['Orion', 'Digital Day'],
    subtitle: 'LOFT#8, Moscow',
    tag: '/conferences',
    year: '/2024',
    place: 'LOFT#8, Moscow',
    city: 'Moscow',
    venue: 'LOFT#8',
    date: '10.2024',
    image: orion,
    gallery: [orion1, orion, orion2, orion3, orion4],
    copy: [
      'In October 2024, IT developer Orion soft held a flagship conference at the new LOFT#8 (formerly "Sickle and Hammer" Recreation Center), combining a business program with a rock aesthetic. We were responsible for the visual design of the space: booth designs, lightboxes, printed elements and navigation.',
      'Instead of the classic exhibition boxes, the partners\' stands have turned into informal areas in the spirit of a rehearsal base: chain-link mesh instead of partitions, brick wall decoration, barrels instead of tables, chains and neon lighting. Custom rock posters with IT punchlines and branded navigation for the three tracks of the event complemented the space.',
      'The result: the event grew almost 3 times in terms of the number of participants and 10 times in terms of coverage of publications compared to the previous year, and the guests separately noted the attention to detail in the design.',
    ],
  }),
  makeProject({
    slug: 'yandex-park-live',
    title: 'YANDEX Park Live',
    heroLines: ['YANDEX', 'Park Live'],
    subtitle: 'ALMATY, KAZAKHSTAN',
    tag: '/musical festivals',
    year: '/2024',
    place: 'Almaty, Kazakhstan',
    city: 'Almaty',
    venue: 'Kazakhstan',
    date: '07.2024',
    image: yandex3,
    gallery: [yandex3, yandex5, yandex1, yandex2, yandex4],
    copy: [
      'For YANDEX Park Live in Almaty we built the festival\'s food zone for Yandex Go Eda — an oversized, fully branded territory guests could spot from across the park.',
      'The centerpiece was a walk-in refrigerator installation with a working photo zone inside, surrounded by giant sculptures: a three-metre burger, a stack of frosted donuts and the brand\'s signature swirl. Every surface, from the tent canopy to the delivery bag graphics, carried the Yandex Go identity.',
      'Signage ran bilingually in Russian and Kazakh, and the zone doubled as a rest area with a bar counter and seating, keeping guests around the installation between festival sets.',
    ],
  }),
]

const museumOfHeroism = makeProject({
  slug: 'museum-of-heroism',
  title: 'Museum of Heroism',
  heroLines: ['MUSEUM', 'OF HEROISM'],
  tag: '/museums',
  year: '/2025',
  place: '59th Pavilion, VDNH, Moscow',
  city: 'Moscow',
  venue: '59th Pavilion, VDNH',
  date: '05.2025',
  image: heroism1,
  gallery: [heroism1, heroism6, heroism2, heroism3, heroism4, heroism5, heroism9, heroism7, heroism8],
  copy: [
    'The Museum of Heroism is a permanent exhibition inside Pavilion 59 at VDNH, Moscow — a full exhibition-design production combining immersive dioramas, lit display cases and sculptural installations across several rooms.',
    'We built layered dioramas with real foliage, terrain texture and suspended aircraft models, paired with illuminated glass cases for uniforms, equipment and personal artifacts — each lit and staged to read clearly at close range.',
    'The centerpiece room holds a bronze sculptural installation set against large-format LED screens, with reflective flooring and directional lighting used to give the space scale and quiet weight.',
  ],
})

const boscoExpedition = makeProject({
  slug: 'bosco-expedition',
  title: 'BOSCO Expedition',
  heroLines: ['BOSCO', 'Expedition'],
  tag: '/launches',
  year: '/2025',
  place: 'Petrovsky Passage, Moscow',
  city: 'Moscow',
  venue: 'Petrovsky Passage',
  date: '05.2025',
  image: boscoEvent7,
  gallery: [
    boscoEvent7,
    boscoEvent7,
    boscoEvent9,
    boscoEvent10,
    boscoEvent5,
    boscoEvent3,
    boscoEvent1,
    boscoEvent2,
    boscoEvent4,
    boscoEvent8,
  ],
  copy: [
    'BOSCO Expedition is an ethnic-themed launch dinner staged at Petrovsky Passage in Moscow — a full production combining traditional Uzbek textiles, ikat patterns and a market-style table setting.',
    'We dressed the space with hand-woven rugs, dried pampas and gold lantern towers, and built abundant fruit and dessert displays — pomegranates, stone fruit, dried apricots and nuts — styled as a living still life across every table.',
    'A dedicated BOSCO brand corner featured a mannequin in the new capsule collection against a brick-and-carpet backdrop, tying the fashion launch directly into the dinner\'s set design.',
  ],
})

const gazpromAtlantes = makeProject({
  slug: 'gazprom-atlantes',
  title: 'Gazprom Atlantes',
  heroLines: ['GAZPROM', 'ATLANTES'],
  tag: '/forums',
  year: '/2025',
  place: 'SPIEF 2025, St. Petersburg',
  city: 'St. Petersburg',
  venue: 'Gazprom Stand, SPIEF 2025',
  date: '06.2025',
  image: atlantesCover,
  gallery: [
    atlantes7,
    atlantes5,
    atlantes4,
    atlantes1,
    atlantes2,
    atlantes3,
    atlantes6,
    atlantes8,
    atlantes9,
    atlantes10,
  ],
  copy: [
    'Atlant is not a random image — it\'s a symbol of St. Petersburg itself: the atlantes of the New Hermitage hold up the building\'s portico. For the Gazprom stand at SPIEF, we reimagined this image — according to the company, the figures reflect the character and work of the people who extract and process gas. Our task was to bring this idea to life in metal and scale.',
    'We produced only the sculptures and pedestals — four figures, 4 metres tall, in a unified silver finish matching the stand\'s overall concept. Everything, from shaping the form to the final finish, was done in our own workshop. (The tubing, screen and the rest of the stand\'s design are not our part.)',
    'The Gazprom stand with the atlantes became one of the most memorable objects at SPIEF 2025 — a forum that in 2025 brought together 20,000 participants from 140 countries.',
  ],
})

const millenniumOfRussia = makeProject({
  slug: 'millennium-of-russia',
  title: 'Millennium of Russia',
  heroLines: ['MILLENNIUM', 'OF RUSSIA'],
  tag: '/forums',
  year: '/2026',
  place: 'SPIEF 2026, St. Petersburg',
  city: 'St. Petersburg',
  venue: 'Novgorod Region Stand, SPIEF 2026',
  date: '06.2026',
  image: millennium4,
  gallery: [millennium1, millennium4, millennium2, millennium3, millennium5, millennium6],
  copy: [
    'We recreated the legendary "Millennium of Russia" monument using 3D printing — cast in deep blue photopolymer resin, with jewel-like detail in every figure. The piece was made for the Novgorod Region\'s stand at SPIEF 2026, standing 3.5 metres tall.',
    'The original monument is a globe-orb on a bell-shaped pedestal with six sculptural groups, 128 figures across three tiers: an angel bearing a cross, seventeen "colossal figures", and a frieze of 109 relief portraits.',
    '21st-century technology meets 19th-century history — every line, every face is a precise copy of the original, cast in a noble blue resin glow.',
  ],
})

const russianTroika = makeProject({
  slug: 'russian-troika',
  title: 'Russian Troika',
  heroLines: ['RUSSIAN', 'TROIKA'],
  tag: '/forums',
  year: '/2026',
  place: 'Ekaterinburg, Russia',
  city: 'Ekaterinburg',
  venue: 'International Youth Festival 2026',
  date: '09.2026',
  image: troika3,
  gallery: [troika1, troika2, troika3],
  copy: [
    'Russian Troika is a set of three monumental horse sculptures made for the Russian Ministry of Culture\'s stand at the International Youth Festival 2026 in Ekaterinburg — a leaping troika mounted directly onto the stand wall.',
    'Each horse was hand-painted in the Gzhel tradition — cobalt-blue florals and ornament over a white ceramic-style finish — turning a folk craft motif into a large-scale sculptural installation.',
    'Mounted mid-gallop against a solid blue backdrop beside the Ministry\'s crest, the troika became a strong photo point for festival guests.',
  ],
})

const matryoshka = makeProject({
  slug: 'matryoshka',
  title: 'Matryoshka',
  heroLines: ['MATRYOSHKA', 'RUSSIAN FISH CO.'],
  tag: '/forums',
  year: '/2026',
  place: 'St. Petersburg, Russia',
  city: 'St. Petersburg',
  venue: 'Russian Fish Company Stand',
  date: '09.2026',
  image: matryoshka5,
  gallery: [matryoshka1, matryoshka5, matryoshka2, matryoshka3, matryoshka4],
  copy: [
    'Matryoshka is a monumental fish-market mascot built for the Russian Fish Company\'s stand at a trade show in St. Petersburg — a matryoshka-shaped figure in the company\'s signature orange and white.',
    'The body is finished in glossy orange with an all-over embossed fish pattern, topped with a white kokoshnik headdress carrying the same fish motif, a beaded collar and matching earrings.',
    'Placed at the entrance to the stand, the sculpture became a natural photo point and landmark for visitors navigating the exhibition hall.',
  ],
})

export const extraProjects = [
  museumOfHeroism,
  boscoExpedition,
  gazpromAtlantes,
  millenniumOfRussia,
  russianTroika,
  matryoshka,
]

export const allProjects = [...catalogProjects, ...extraProjects]

export function compareByDate(a, b) {
  const [aMonth, aYear] = a.date.split('.').map(Number)
  const [bMonth, bYear] = b.date.split('.').map(Number)
  return bYear - aYear || bMonth - aMonth
}

export function getProject(slug) {
  return allProjects.find((project) => project.slug === slug)
}

export function getRelevant(slug) {
  return [...catalogProjects, ...extraProjects]
    .filter((project) => project.slug !== slug)
    .slice(0, 3)
}
