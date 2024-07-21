"use client";

import { useState } from "react";

const skins = ["1", "2", "3", "4", "5"];

export default function SkinsPage() {
    const [skinIdx, setSkinIdx] = useState(0);
    return (
        <>
            <div className="text-center pt-36 mb-8 text-white">
                <h1 className="text-5xl font-bold">Dazzle Me!</h1>
                <p className="text-xl">pick my accessories</p>
            </div>
            <div className="flex justify-center items-center gap-8">
                <button
                    type="button"
                    className="text-white text-5xl"
                    onClick={(e) => {
                        e.preventDefault();
                        if (skinIdx === 0) {
                            return setSkinIdx(skins.length - 1);
                        }
                        setSkinIdx(skinIdx - 1);
                    }}
                >
                    <i className="fas fa-caret-left"></i>
                </button>
                <img
                    className={`max-h-[100px] max-w-[100px] object-cover`}
                    src={`/images/skin_${skins[skinIdx]}.png`}
                    alt="skin"
                />
                <button
                    type="button"
                    className="text-white text-5xl"
                    onClick={(e) => {
                        e.preventDefault();
                        if (skinIdx >= skins.length - 1) {
                            return setSkinIdx(0);
                        }
                        setSkinIdx(skinIdx + 1);
                    }}
                >
                    <i className="fas fa-caret-right"></i>
                </button>
            </div>
        </>
    );
}
