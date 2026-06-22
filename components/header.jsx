'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
    { label: 'Thesis', href: '/#thesis' },
    { label: 'Vaults', href: '/#vaults' },
    { label: 'Truth Layer', href: '/#truth' },
    { label: 'Model', href: '/#model' },
    { label: 'Capital', href: '/#capital' }
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-colors duration-300 ${
                scrolled ? 'border-b border-soil-800 bg-soil-950/85 backdrop-blur-md' : 'border-b border-transparent'
            }`}
        >
            <div className="shell flex h-16 items-center justify-between gap-4">
                <Link href="/" className="group flex items-center gap-2.5 no-underline">
                    <Wordmark />
                </Link>

                <nav className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="rounded-full px-3.5 py-2 text-sm text-cream/80 no-underline transition hover:bg-soil-850 hover:text-cream"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <Link href="/#access" className="btn-primary hidden sm:inline-flex">
                        Request access
                    </Link>
                    <button
                        type="button"
                        aria-label="Toggle menu"
                        onClick={() => setOpen((v) => !v)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-soil-700 text-cream md:hidden"
                    >
                        <span className="relative block h-3 w-4">
                            <span
                                className={`absolute left-0 h-px w-4 bg-current transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
                            />
                            <span
                                className={`absolute left-0 top-1.5 h-px w-4 bg-current transition ${open ? 'opacity-0' : 'opacity-100'}`}
                            />
                            <span
                                className={`absolute left-0 h-px w-4 bg-current transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}
                            />
                        </span>
                    </button>
                </div>
            </div>

            {open && (
                <nav className="border-t border-soil-800 bg-soil-950/95 px-6 py-4 md:hidden">
                    <ul className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-lg px-3 py-2.5 text-cream/90 no-underline hover:bg-soil-850"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Link href="/#access" onClick={() => setOpen(false)} className="btn-primary w-full">
                                Request access
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

function Wordmark() {
    return (
        <span className="flex items-center gap-2.5">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                <path
                    d="M13 2c0 5-3 7-3 11a3 3 0 0 0 6 0c0-4-3-6-3-11Z"
                    fill="var(--color-grain)"
                />
                <path d="M13 14v9" stroke="var(--color-field)" strokeWidth="1.6" strokeLinecap="round" />
                <path
                    d="M13 17c-2.4-.4-4.2-2-5-4M13 20c2.4-.4 4.2-2 5-4"
                    stroke="var(--color-field)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                />
            </svg>
            <span className="font-display text-lg font-medium tracking-tight text-cream">AgStream</span>
        </span>
    );
}
