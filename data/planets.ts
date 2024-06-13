import { CrewMenber, Planet, Technology } from "@/app/lib/definitions";

const destination: Planet[] = [
    {
        urlImage: '/planets/Moon.png',
        name: 'Moon',
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        travel: '3 days'
    },
    {
        urlImage: '/planets/Mars.png',
        name: 'Mars',
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 mil. km',
        travel: '9 months'
    },
    {
        urlImage: '/planets/Europa.png',
        name: 'Europa',
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 mil. km',
        travel: '3 years'
    },
    {
        urlImage: '/planets/Titan.png',
        name: 'Titan',
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 bil. km',
        travel: '7 years'
    }
]
const members: CrewMenber[] = [
    {
        id: 1,
        name: 'Douglas Hurley',
        images: '/members/Image-crew-02.png',
        role: 'Commander',
        bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    },
    {
        id: 2,
        name: 'Mark Shuttleworth',
        images: '/members/Image-crew-03.png',
        role: 'Mission Specialist',
        bio: 'The commander of the USS Discovery program, andocketed multiple launches to further his knowledge of the universe.'
    },
    {
        id: 3,
        name: 'Victor Glover',
        images: '/members/Image-crew-01.png',
        role: 'Pilot',
        bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. air force. '
    },
    {
        id: 4,
        name: 'Anousheh Ansari',
        images: '/members/Image-crew-04.png',
        role: 'Flight Engineer',
        bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded woman in the space industry. '
    }
]

const concepts: Technology[] = [
    {
        title: 'Launch vehicle',
        image: '/technology/Technology-Image-A.jpg',
        description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`
    },
    {
        title: 'Spaceport',
        image: '/technology/Technology Image - B.jpg',
        description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
    },
    {
        title: 'Space capsule',
        image: '/technology/Technology Image - C.jpg',
        description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth’s atmosphere without wings. Our capsule is where you can relax on your couch and receive a taste of our oceanwide adventure.'
    }
]
export const getDestinations = (time = 0): Promise<Planet[]> => new Promise(resolve => setTimeout(() => resolve(destination), time))
export const getDestinationByName = (name: string): Promise<Planet> => new Promise(resolve => {
    const planet = destination.find(planet => planet.name.toLowerCase() === name)
    if (planet) resolve(planet)
    else resolve(destination[0])
})
export const getMembers = (time = 0): Promise<CrewMenber[]> => new Promise(resolve => setTimeout(() => resolve(members), time))
export const getMemberById = (id: string): Promise<CrewMenber> => new Promise(resolve => {
    const member = members.find(member => Number(id) === member.id)
    if (member) resolve(member)
    else resolve(members[0])
})

export const getConceptByName = (name: string): Promise<Technology> => new Promise(resolve => {
    const concept = concepts.find(concept => concept.title.toLowerCase() === name)
    if (concept) resolve(concept)
    else resolve(concepts[0])
})