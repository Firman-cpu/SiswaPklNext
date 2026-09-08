'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, LayoutGrid } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();

    const menu = [
        { path: '/', label: 'Home', Icon: Home },
        { path: '/about', label: 'About', Icon: Info },
        { path: '/tabel', label: 'Tabel', Icon: LayoutGrid },
    ];

    return (
        <div className="flex justify-center mt-6">
            <nav className="bg-[#010409] rounded-full border border-[#3d444d] p-1.5 shadow-lg">
                <div className="flex items-center gap-1">
                    {menu.map(({ path, label, Icon }) => {
                        const isActive = pathname === path;

                        return (
                            <Link
                                key={path}
                                href={path}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isActive
                                    ? 'bg-[#151b23] text-[#238636] border border-[#3d444d]'
                                    : 'text-[#f0f6fc] hover:bg-[#151b23]/50 hover:text-[#238636] border border-transparent'
                                    }`}
                            >
                                <Icon size={18} />
                                {isActive && (
                                    <span className="text-sm font-semibold">{label}</span>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}