import { usePathname, useSearchParams, useRouter } from "next/navigation"


export const useURLRoute = () => {
    const { replace } = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const setParams = (param: string, key: string) => { 
        const params = new URLSearchParams(searchParams)
        if (param) {
            params.set(key, param)
        } else {
            params.delete(key)
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return { setParams }
}