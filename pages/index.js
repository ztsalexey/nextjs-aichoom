import Image from "next/image"
import one from "../public/images/1.png"
import two from "../public/images/2.png"
import three from "../public/images/3.png"
import four from "../public/images/4.png"
import five from "../public/images/5.png"

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen space-y-8 lg-flex-row">
            <h1 className="text-3xl">AI Choom</h1>
            <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-lime-500 ring-offset-4">
                <Image
                    objectFit="cover"
                    src={one}
                    alt="Picture of the future runner"
                    layout="fill"
                    priority
                />
            </div>
            <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-lime-500 ring-offset-4">
                <Image
                    objectFit="cover"
                    src={two}
                    alt="Picture of the future runner"
                    layout="fill"
                    priority
                />
            </div>
            <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-lime-500 ring-offset-4">
                <Image
                    objectFit="cover"
                    src={three}
                    alt="Picture of the future runner"
                    layout="fill"
                    priority
                />
            </div>
            <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-lime-500 ring-offset-4">
                <Image
                    objectFit="cover"
                    src={four}
                    alt="Picture of the future runner"
                    layout="fill"
                    priority
                />
            </div>
            <div className="relative w-32 h-32 overflow-hidden rounded-full ring-2 ring-lime-500 ring-offset-4">
                <Image
                    objectFit="cover"
                    src={five}
                    alt="Picture of the future runner"
                    layout="fill"
                    priority
                />
            </div>
        </div>
    )
}
