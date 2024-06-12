
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";

export const bellefair = Bellefair({ 
    subsets: ["latin"], 
    weight: ['400'],
    variable: "--font-bellefair", 
})
export const barlow = Barlow({ subsets: ["latin"], weight: ['400'], variable: "--font-barlow" })
export const barlowCondensed = Barlow_Condensed({ 
    subsets: ["latin"], 
    weight: ['400', '700'], 
    variable: "--font-barlow-condensed" 
})