"use client";

import Goal from "@/interfaces/goal";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const coins = ["1", "2", "5", "10", "null"];

export default function Home() {
    const [goal, setGoal] = useState<Goal | null>(null);
    // const [goal, setGoal] = useState<Goal | null>({
    //     name: "iPhone",
    //     goal: 9999,
    //     progress: 0,
    // });
    const [coinIdx, setCoinIdx] = useState(0);
    const [coinAnimate, setCoinAnimate] = useState("");
    const [pigAnimate, setPigAnimate] = useState("");
    const [customValue, setCustomValue] = useState(1);

    async function insertCoin(_coinIdx: number) {
        if (!goal) return;
        if (coins[_coinIdx] === "null") {
            if (!customValue) {
                return alert("Please enter custom amount");
            }
            setCoinAnimate("coin_down_longer");
        } else {
            setCoinAnimate("coin_down");
        }
        setPigAnimate("pig_eatcoin");
        let amount = customValue;
        if (coins[_coinIdx] !== "null") {
            amount = +coins[_coinIdx];
        }
        goal.progress += amount;
        setGoal({ ...goal });
        localStorage.setItem("goal", JSON.stringify(goal));
        await new Promise((r) => setTimeout(r, 2000));
        setCoinAnimate("");
        setPigAnimate("");
    }

    useEffect(() => {
        const goalStr = localStorage.getItem("goal");
        if (!goalStr) return;
        console.log(goalStr);
        setGoal(JSON.parse(goalStr));
    }, []);

    if (goal) console.log((goal.progress / goal.goal) * 100);

    return (
        <>
            <div
                className={`h-full flex flex-col justify-between ${
                    coins[coinIdx] === "null" ? "pt-24" : "pt-24"
                } pb-16`}
            >
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
                            <button
                                type="button"
                                className="bg-white rounded-lg py-2 px-6 shadow-md transition active:scale-95"
                                onClick={(e) => {
                                    e.preventDefault();
                                    insertCoin(coinIdx);
                                }}
                            >
                                Deposit (
                                {coins[coinIdx] === "null"
                                    ? customValue.toLocaleString()
                                    : coins[coinIdx]}{" "}
                                ฿)
                            </button>
                        </div>
                        <div className="flex justify-center items-center gap-8">
                            <button
                                type="button"
                                className="text-white text-5xl"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (coinIdx === 0) {
                                        return setCoinIdx(coins.length - 1);
                                    }
                                    setCoinIdx(coinIdx - 1);
                                }}
                            >
                                <i className="fas fa-caret-left"></i>
                            </button>
                            <img
                                className={`w-[113px] drop-shadow-lg ${coinAnimate}`}
                                src={`/images/coin_${coins[coinIdx]}.png`}
                                alt="coin"
                            />
                            <button
                                type="button"
                                className="text-white text-5xl"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (coinIdx >= coins.length - 1) {
                                        return setCoinIdx(0);
                                    }
                                    setCoinIdx(coinIdx + 1);
                                }}
                            >
                                <i className="fas fa-caret-right"></i>
                            </button>
                        </div>
                        {coins[coinIdx] === "null" && (
                            <div className="flex justify-center mt-6">
                                <div>
                                    <p className="text-center text-xs text-white mb-1.5">
                                        Please enter custom amount
                                    </p>
                                    <input
                                        type="number"
                                        className="bg-white/10 px-4 py-2 rounded-lg text-white"
                                        defaultValue={1}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            const amount = +e.target.value;
                                            if (amount < 0) return;
                                            setCustomValue(amount);
                                        }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}
                <div className="relative">
                    <div className="flex justify-center items-center gap-4 mb-24">
                        <img
                            className={`w-[232px] ${pigAnimate}`}
                            src="/images/pigky.png"
                            alt="pigky"
                        />
                    </div>

                    {!goal && (
                        <div className="flex justify-center">
                            <Link
                                href="/create"
                                className="w-[140px] text-center rounded-lg bg-pigky-main text-white p-2 transition active:scale-95"
                            >
                                Create Goal
                            </Link>
                        </div>
                    )}
                    {!!goal && (
                        <div className="flex justify-center">
                            <div>
                                <div className="flex justify-center items-center gap-3">
                                    <h1 className="text-center text-xl font-semibold text-pigky-text mb-4">
                                        {goal.name}
                                    </h1>
                                    <button
                                        type="button"
                                        className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-md font-semibold mb-3 transition active:scale-95"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setGoal(null);
                                            localStorage.removeItem("goal");
                                        }}
                                    >
                                        <i className="fas fa-trash"></i> Clear
                                    </button>
                                </div>
                                <div className="relative mx-auto w-[257px] border-2 border-pigky-main p-1 rounded-[15px] bg-white">
                                    <div
                                        className="h-[22px] bg-gradient-to-r from-[#FFA9A9] to-[#FF4286] text-white px-2 py-1 rounded-lg"
                                        style={{
                                            width: `${
                                                (goal.progress / goal.goal) *
                                                100
                                            }%`,
                                        }}
                                    >
                                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-pigky-text whitespace-nowrap">
                                            {goal.progress.toLocaleString()} /{" "}
                                            {goal.goal.toLocaleString()} {"("}
                                            {(
                                                (goal.progress / goal.goal) *
                                                100
                                            ).toFixed(2)}
                                            %{")"}
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
