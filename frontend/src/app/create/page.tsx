"use client";

import { formToJSON } from "axios";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function CreateGoal() {
    const router = useRouter();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = formToJSON(event.target as HTMLFormElement) as any;

        localStorage.setItem(
            "goal",
            JSON.stringify({
                name: payload.name,
                goal: +payload.goal,
                progress: 0,
            })
        );

        router.push("/");
    };

    return (
        <>
            <div className="text-center pt-16 mb-8">
                <h1 className="text-3xl font-semibold text-pigky-text">
                    Create Goal
                </h1>
            </div>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="w-[300px]">
                    <div className="space-y-6 mb-8">
                        <div>
                            <p className="text-xs text-white mb-1">
                                Goal Name
                            </p>
                            <input
                                type="text"
                                name="name"
                                className="w-full px-4 py-2 rounded-lg"
                                placeholder="iPhone 15 Pro Max"
                                required
                            />
                        </div>
                        <div>
                            <p className="text-xs text-white mb-1">
                                Goal Price
                            </p>
                            <input
                                type="number"
                                name="goal"
                                className="w-full px-4 py-2 rounded-lg"
                                placeholder="48900"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-[140px] rounded-lg bg-pigky-main text-white p-2"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
