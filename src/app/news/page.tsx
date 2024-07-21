import { useState } from "react";
import News from "./news";

const news = [
    {
        image: "/images/news_1.png",
        title: "บอกต่อ! 5 ทริคเก็บเงินวัยเรียนให้มีเงินก้อนก่อนเรียนจบ",
        description:
            "อยากมีเงินก้อนก่อนเรียนจบ ต้องทำยังไง สำหรับน้อง ๆ ที่มีความคิดว่าก่อนเรียนจบอยากมีเงินเก็บสักก้อน เพื่อใช้ในการเริ่มต้นสร้างเนื้อสร้างตัว และก้าวสู่บทใหม่ของชีวิตได้อย่างมั่นใจ แต่ยังมีความลังเลสงสัยว่าเป็นนักเรียนเก็บเงินยังไง เรามี 8 ทริคเก็บเงินวัยเรียน พร้อมตัวช่วยในการออมเงินมาแนะนำ ตามไปดูกันเลย",
        href: "/news/trick"
    },
];

export default function NewsPage() {
    return (
        <>
            <h1 className="text-center pt-32 mb-16 text-5xl font-bold text-white">
                The
                <br />
                Piggy Post
            </h1>

            <div className="space-y-4">
                <News {...news[0]} />
            </div>
        </>
    );
}
