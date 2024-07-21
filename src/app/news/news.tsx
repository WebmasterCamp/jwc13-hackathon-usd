import Link from "next/link";

export default function News({ image, title, description, href }: { image: string; title: string; description: string; href: string; }) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <img src={image} alt="news_1" />
            <div className="p-4">
                <h1 className="font-semibold">
                    {title}
                </h1>
                <p className="truncate text-sm text-black/60 mb-4">
                    {description}
                </p>
                <Link
                    href={href}
                    className="bg-blue-100 text-blue-500 text-sm px-4 py-1 rounded-lg transition active:scale-95"
                >
                    <i className="far fa-chevron-right"></i> อ่านเพิ่มเติม
                </Link>
            </div>
        </div>
    );
}
