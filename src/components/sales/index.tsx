import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { CircleDollarSign, DollarSign, Users2 } from "lucide-react";


export function Sales() {
    return (

        <Card className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-kg sm:text-xl text-gray-800">
                        Ultimos clientes
                    </CardTitle>
                    <Users2 className="ml:auto h-4 w-4" />
                </div>
                <CardDescription>
                    Clientes mais recentes:
                </CardDescription>
            </CardHeader>
            <CardContent>
                <article className="flex items-center gap-2 border-b py-2"> 
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/rictoni.png" className="w-15 rounded-full"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Ricardo Tonholli</p>
                        <span className="text-[15px] text-gray-400">ricardotonholli@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2"> 
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/rictoni.png" className="w-15 rounded-full"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Ricardo Tonholli</p>
                        <span className="text-[15px] text-gray-400">ricardotonholli@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2"> 
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/rictoni.png" className="w-15 rounded-full"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Ricardo Tonholli</p>
                        <span className="text-[15px] text-gray-400">ricardotonholli@gmail.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2"> 
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/rictoni.png" className="w-15 rounded-full"/>
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">Ricardo Tonholli</p>
                        <span className="text-[15px] text-gray-400">ricardotonholli@gmail.com</span>
                    </div>
                </article>
            </CardContent>

        </Card>

    )
}