"use client";

import { useState } from "react";

const skins = ["1", "2", "3", "4", "5"];

export default function SkinsPage() {
    const [skinIdx, setSkinIdx] = useState(0);
    return (
        <>
            <div className="h-full flex flex-col pt-36 pb-32 justify-between">
                <div>
                    <div className="text-center mb-8 text-white">
                        <h1 className="text-5xl font-bold">Dazzle Me!</h1>
                        <p className="text-xl">pick my accessories</p>
                    </div>
                    <div className="h-[100px] w-[300px] mx-auto flex justify-between items-center gap-8">
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
                </div>
                <div>
                    <div className="flex justify-center">
                        <div className="relative">
                            {skins[skinIdx] === "1" && (
                                <img
                                    className="absolute top-1/2 left-1/2 -translate-y-[10px] -translate-x-1/2 w-[100px]"
                                    src="/images/skin_1.png"
                                    alt="skin"
                                />
                            )}
                            {skins[skinIdx] === "2" && (
                                <img
                                    className="absolute top-1/2 left-1/2 -translate-y-[20px] -translate-x-1/2 w-[100px]"
                                    src="/images/skin_2.png"
                                    alt="skin"
                                />
                            )}
                            {skins[skinIdx] === "3" && (
                                <img
                                    className="absolute top-1/2 left-1/2 -translate-y-[130px] -translate-x-[90px] -rotate-12 w-[100px]"
                                    src="/images/skin_3.png"
                                    alt="skin"
                                />
                            )}
                            {skins[skinIdx] === "4" && (
                                <img
                                    className="absolute top-1/2 left-1/2 -translate-y-[200px] -translate-x-1/2 w-[100px]"
                                    src="/images/skin_4.png"
                                    alt="skin"
                                />
                            )}
                            {skins[skinIdx] === "5" && (
                                <img
                                    className="absolute top-1/2 left-1/2 translate-y-[60px] -translate-x-1/2 h-[100px]"
                                    src="/images/skin_5.png"
                                    alt="skin"
                                />
                            )}
                            <img
                                className="w-[250px]"
                                src="/images/pigky.png"
                                alt="pigky"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
