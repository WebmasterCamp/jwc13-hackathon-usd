"use client";

import { getCalendarMonth, getDatesArray } from "@/utils/time";
import { useEffect } from "react";

export default function CalendarPage() {
    const date = new Date();
    date.setMonth(date.getMonth());

    const days = getCalendarMonth();

    return (
        <>
            <div className="pt-20 text-center mb-8">
                <p className="text-xl text-white">{date.getFullYear()}</p>
                <h1 className="text-6xl font-semibold text-pigky-text">
                    {date.toLocaleString("default", { month: "long" })}
                </h1>
            </div>
            <div className="p-6 bg-white shadow-lg">
                <div className="grid grid-cols-7 gap-3 text-center text-xs">
                    <p>Sun</p>
                    <p>Mon</p>
                    <p>Tue</p>
                    <p>Wed</p>
                    <p>Thu</p>
                    <p>Fri</p>
                    <p>Sat</p>
                    {days.map((day, idx) => {
                        const isMoreThan =
                            day.month === date.getMonth() + 1 &&
                            day.date > date.getDate();

                        const random = Math.floor(Math.random() * 100);
                        let pigIdx = "1";
                        if (!isMoreThan && day.isCurrentMonth) {
                            if (random >= 71 && random <= 90) {
                                pigIdx = "2";
                            }
                            if (random >= 91 && random <= 100) {
                                pigIdx = "3";
                            }
                        }

                        return (
                            <img
                                key={idx}
                                className={`w-full h-auto ${
                                    isMoreThan || !day.isCurrentMonth
                                        ? "opacity-20"
                                        : ""
                                }`}
                                src={`/images/pig_${pigIdx}.png`}
                                alt="pig"
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
