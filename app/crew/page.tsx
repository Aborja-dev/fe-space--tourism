import CrewCard from "@/app/ui/crew/CrewCard";
import CrewNavMenu from "@/app/ui/crew/CrewNavMenu";
import { getMemberById } from "@/data/planets";

import Image from "next/image";

export default async function Page ({ searchParams }: { searchParams: { member: string} }) {
    const { member: crewID } = searchParams
    const member = await getMemberById(crewID);
    return (
        < >
            <div className="col-span-1">
                <CrewCard {...member}/>
            </div>
            <div className="col-span-1">
                <Image src={member.images} alt="" width={1920} height={1080} className="w-full"/>
            </div>
            <CrewNavMenu active={crewID} />
        </>
    )
}