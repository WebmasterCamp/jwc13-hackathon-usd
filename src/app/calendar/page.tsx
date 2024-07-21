import { getDatesArray } from "@/utils/time";

export default function CalendarPage() {
    return (
        <>
            <div className="pt-12 text-center mb-16">
                <p className="text-xl">2024</p>
                <h1 className="text-6xl font-semibold text-pigky-main">July</h1>
            </div>
            <div className="grid grid-cols-5 gap-4">
                <div className="w-full aspect-[1/1] bg-pink-200"></div>
                <div className="w-full aspect-[1/1] bg-pink-200"></div>
                <div className="w-full aspect-[1/1] bg-pink-200"></div>
                <div className="w-full aspect-[1/1] bg-pink-200"></div>
                <div className="w-full aspect-[1/1] bg-pink-200"></div>
                <div className="w-full aspect-[1/1] bg-pink-200"></div>
                <div className="w-full aspect-[1/1] bg-pink-200"></div>
                <div className="w-full aspect-[1/1] bg-pink-200"></div>
                <div className="w-full aspect-[1/1] bg-pink-200"></div>
                <div className="w-full aspect-[1/1] bg-pink-200"></div>

                <div className="w-full aspect-[1/1] bg-pink-200"></div>
            </div>
        </>
    );
}
