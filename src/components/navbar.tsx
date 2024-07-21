"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="h-[70px] absolute z-50 top-0 left-0 w-full flex justify-between items-center px-6">
                <div>
                    <Link href="/" className="text-white text-3xl">
                        <img
                            className="w-[60px]"
                            src="/images/logo.png"
                            alt="logo"
                        />
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/news" className="text-white text-3xl">
                        <i className="far fa-newspaper"></i>
                    </Link>
                    <Link href="/skins" className="text-white text-3xl">
                        <i className="far fa-tshirt"></i>
                    </Link>
                    <Link href="/calendar" className="text-white text-3xl">
                        <i className="far fa-calendar-alt"></i>
                    </Link>
                </div>
            </nav>
        </>
    );
}
