import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-soil-800 bg-soil-900">
            <div className="shell py-16">
                <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
                    <div>
                        <div className="flex items-center gap-2.5">
                            <svg width="24" height="24" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                                <path d="M13 2c0 5-3 7-3 11a3 3 0 0 0 6 0c0-4-3-6-3-11Z" fill="var(--color-grain)" />
                                <path d="M13 14v9" stroke="var(--color-field)" strokeWidth="1.6" strokeLinecap="round" />
                                <path
                                    d="M13 17c-2.4-.4-4.2-2-5-4M13 20c2.4-.4 4.2-2 5-4"
                                    stroke="var(--color-field)"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className="font-display text-lg text-cream">AgStream</span>
                        </div>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                            A perpetual agricultural production and land-backed tokenization vehicle, scaling Saskatchewan
                            grain into an institutional-grade cash-flow asset. Operated by FarmGates Group.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-grain-700">Platform</h4>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li><Link href="/#thesis" className="text-cream/80 no-underline hover:text-cream">The thesis</Link></li>
                            <li><Link href="/#vaults" className="text-cream/80 no-underline hover:text-cream">Farmer vaults</Link></li>
                            <li><Link href="/#truth" className="text-cream/80 no-underline hover:text-cream">The Truth Layer</Link></li>
                            <li><Link href="/#model" className="text-cream/80 no-underline hover:text-cream">Five-year model</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-grain-700">Capital</h4>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li><Link href="/#capital" className="text-cream/80 no-underline hover:text-cream">Allocation framework</Link></li>
                            <li><Link href="/#structure" className="text-cream/80 no-underline hover:text-cream">Legal structure</Link></li>
                            <li><Link href="/#access" className="text-cream/80 no-underline hover:text-cream">Request access</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 border-t border-soil-800 pt-8">
                    <p className="text-xs leading-relaxed text-muted/80">
                        All forecasts are directional institutional planning estimates and should be validated through
                        independent agronomic, legal, securities, tax and operational diligence. Nothing on this page is
                        an offer to sell or a solicitation to buy any security. AgStream operates a 100% Canadian-owned
                        SPV to comply with the Saskatchewan Farm Security Act.
                    </p>
                    <p className="mt-6 font-mono text-xs text-muted/60">
                        © {new Date().getFullYear()} AgStream SPV · Saskatchewan, Canada
                    </p>
                </div>
            </div>
        </footer>
    );
}
