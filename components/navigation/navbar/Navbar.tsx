'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    // Data dummy, ganti sendiri
    const menu = [
        { path: '/', label: 'Home', icon: '🏠' },
        { path: '/about', label: 'About', icon: '📖' },
    ];

    return (
        <nav className="flex gap-4 p-4 border-b">
            {menu.map((item) => {
                const isActive = pathname === item.path;

                return (
                    <Link key={item.path} href={item.path} className="flex items-center gap-2">
                        <span>{item.icon}</span>
                        {/* Triknya di sini anjir, teks muncul cuma pas aktif */}
                        {isActive && <span>{item.label}</span>}
                    </Link>
                );
            })}
        </nav>
    );
}