"use client";

import Goal from "@/interfaces/goal";
import Link from "next/link";
import { useEffect, useState } from "react";

const coins = ["1", "2", "5", "10", "?"]

export default function Home() {
    // const [goal, setGoal] = useState<Goal | null>(null);
    const [goal, setGoal] = useState<Goal | null>({
        name: "iPhone",
        goal: 9999,
        progress: 0
    });
    const [coin, setCoin] = useState(coins[0]);

    useEffect(() => {
        const goalStr = localStorage.getItem("goal");
        if (!goalStr) return;
        console.log(goalStr);
        setGoal(JSON.parse(goalStr));
    }, []);

    return (
        <>
            <div className="h-full flex flex-col justify-between pt-24 pb-16">
                {!goal && (
                    <div className="flex justify-center">
                        <img
                            className="w-[227px]"
                            src="/images/logo.png"
                            alt="logo"
                        />
                    </div>
                )}
                {!!goal && (
                    <div>
                        <div className="flex justify-center mb-8">
                            <button type="button" className="bg-white rounded-lg py-2 px-6 shadow-md">
                                Deposit (1 ฿)
                            </button>
                        </div>
                        <div className="flex justify-center items-center gap-8">
                            <button
                                type="button"
                                className="text-white text-5xl"
                            >
                                <i className="fas fa-caret-left"></i>
                            </button>
                            <img
                                className="w-[113px] coin_down"
                                src="/images/coin_1.png"
                                alt="coin"
                            />
                            <button
                                type="button"
                                className="text-white text-5xl"
                            >
                                <i className="fas fa-caret-right"></i>
                            </button>
                        </div>
                    </div>
                )}
                <div className="relative">
                    <div className="flex justify-center items-center gap-4 mb-24">
                        <img
                            className="w-[232px] pig_eatcoin"
                            src="/images/pigky.png"
                            alt="pigky"
                        />
                    </div>

                    {!goal && (
                        <div className="flex justify-center">
                            <Link
                                href="/create"
                                className="w-[140px] text-center rounded-lg bg-pigky-main text-white p-2"
                            >
                                Create Goal
                            </Link>
                        </div>
                    )}
                    {!!goal && (
                        <div className="flex justify-center">
                            <div>
                                <h1 className="text-center text-xl font-semibold text-pigky-text mb-4">
                                    {goal.name}
                                </h1>
                                <div className="w-[257px] border-2 border-pigky-main p-1 rounded-[15px] bg-white">
                                    <div className="h-full w-[50%] bg-gradient-to-r from-[#FFA9A9] to-[#FF4286] text-white px-2 py-1 rounded-lg overflow-hidden">
                                        <p className="font-semibold text-pigky-text whitespace-nowrap">
                                            {goal.progress.toLocaleString()} /{" "}
                                            {goal.goal.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
