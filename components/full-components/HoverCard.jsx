import { VolleyballIcon } from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function () {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <a
                    type="button"
                    className="text-white bg-yellow-500 cursor-pointer hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-bold rounded-lg text-sm px-4 py-2 transition-all"
                    href="/Contacto"
                >
                    Contacto
                </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW5hdmlnYXRpb24taWNvbiBsdWNpZGUtbmF2aWdhdGlvbiI+PHBvbHlnb24gcG9pbnRzPSIzIDExIDIyIDIgMTMgMjEgMTEgMTMgMyAxMSIvPjwvc3ZnPg==" />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Gabow: Ve por buen camino</h4>
                        <p className="text-sm">
                            ¡Ponte en contacto con nostros dejando un mensaje!
                        </p>
                        <div className="flex items-center pt-2">
                            <VolleyballIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                Hack the goal
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
