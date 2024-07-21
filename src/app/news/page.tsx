import { useState } from "react";

export default function NewsPage() {
    return (
        <>
            <div className="text-center pt-20 mb-8">
                <h1 className="text-3xl font-semibold text-white">News</h1>
            </div>

            <div className="space-y-4">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <img src="/images/news_1.png" alt="news_1" />
                    <div className="p-4">
                        <h1 className="font-semibold">
                            บอกต่อ! 8
                            ทริคเก็บเงินวัยเรียนให้มีเงินก้อนก่อนเรียนจบ
                        </h1>
                        <p className="truncate text-sm text-black/60">
                            อยากมีเงินก้อนก่อนเรียนจบ ต้องทำยังไง สำหรับน้อง ๆ
                            ที่มีความคิดว่าก่อนเรียนจบอยากมีเงินเก็บสักก้อน
                            เพื่อใช้ในการเริ่มต้นสร้างเนื้อสร้างตัว
                            และก้าวสู่บทใหม่ของชีวิตได้อย่างมั่นใจ
                            แต่ยังมีความลังเลสงสัยว่าเป็นนักเรียนเก็บเงินยังไง
                            เรามี 8 ทริคเก็บเงินวัยเรียน
                            พร้อมตัวช่วยในการออมเงินมาแนะนำ ตามไปดูกันเลย
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
