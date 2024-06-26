export type Page = 'home' | 'destination' | 'crew' | 'technology'
export type Destination = 'moon' | 'mars' | 'europa' | 'titan'
export type Route<T> ={ route: T, url: string }

export interface Planet {
    urlImage: string
    name: string
    description: string
    distance: string
    travel: string
}

export interface CrewMenber {
    id: number
    name: string
    images: string
    role: string
    bio: string
}

export interface Technology {
    title: string
    image: string
    description: string
}