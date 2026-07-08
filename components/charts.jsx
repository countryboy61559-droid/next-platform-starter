// Hand-built SVG data visualizations — no chart library, pure server-rendered SVG.

// Vertical bars for land-base scale-up (acres by year).
export function GrowthBars({ data }) {
    const max = Math.max(...data.map((d) => d.acres));
    return (
        <div className="grid grid-cols-5 items-end gap-2 sm:gap-4" style={{ minHeight: 200 }}>
            {data.map((d, i) => {
                const h = Math.round((d.acres / max) * 160) + 8;
                return (
                    <div key={d.year} className="flex flex-col items-center gap-3">
                        <span className="font-mono text-[0.65rem] text-muted">{(d.acres / 1000).toFixed(0)}k</span>
                        <div
                            className="w-full rounded-t-sm"
                            style={{
                                height: h,
                                background: `linear-gradient(to top, var(--color-grain-700), var(--color-grain))`,
                                opacity: 0.55 + (i / (data.length - 1)) * 0.45
                            }}
                        />
                        <span className="font-mono text-[0.6rem] uppercase tracking-wider text-muted/70">{d.year.replace('Year ', 'Y')}</span>
                    </div>
                );
            })}
        </div>
    );
}

// Grouped bars: GPV vs EBITDA vs Token pool ($M) per year.
export function RevenueChart({ data }) {
    const max = Math.max(...data.map((d) => d.gpv));
    const series = [
        { key: 'gpv', label: 'Gross production value', color: 'var(--color-grain)' },
        { key: 'ebitda', label: 'EBITDA equivalent', color: 'var(--color-field)' },
        { key: 'tokenPool', label: 'Token pool (20%)', color: 'var(--color-clay)' }
    ];
    return (
        <div>
            <div className="grid grid-cols-5 items-end gap-3 sm:gap-6" style={{ minHeight: 220 }}>
                {data.map((d) => (
                    <div key={d.year} className="flex h-full flex-col items-center justify-end gap-2">
                        <div className="flex w-full items-end justify-center gap-1" style={{ height: 180 }}>
                            {series.map((s) => (
                                <div
                                    key={s.key}
                                    title={`${s.label}: $${d[s.key]}M`}
                                    className="w-1/3 max-w-3 rounded-t-sm transition-opacity hover:opacity-80"
                                    style={{ height: Math.max((d[s.key] / max) * 180, 2), background: s.color }}
                                />
                            ))}
                        </div>
                        <span className="font-mono text-[0.62rem] uppercase tracking-wider text-muted/70">{d.year}</span>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {series.map((s) => (
                    <span key={s.key} className="flex items-center gap-2 text-xs text-muted">
                        <span className="h-2.5 w-2.5 rounded-sm" style={{ background: s.color }} />
                        {s.label}
                    </span>
                ))}
            </div>
        </div>
    );
}

// Line chart for treasury coverage ratio.
export function CoverageLine({ data }) {
    const w = 520;
    const h = 160;
    const pad = 28;
    const max = Math.max(...data.map((d) => d.coverage)) + 1;
    const min = Math.min(...data.map((d) => d.coverage)) - 1;
    const x = (i) => pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = (v) => h - pad - ((v - min) / (max - min)) * (h - pad * 2);
    const path = data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(d.coverage)}`).join(' ');
    const area = `${path} L ${x(data.length - 1)} ${h - pad} L ${x(0)} ${h - pad} Z`;
    return (
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img" aria-label="Treasury coverage ratio by year">
            <defs>
                <linearGradient id="covfill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-grain)" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="var(--color-grain)" stopOpacity="0" />
                </linearGradient>
            </defs>
            <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="var(--color-soil-700)" strokeWidth="1" />
            <path d={area} fill="url(#covfill)" />
            <path d={path} fill="none" stroke="var(--color-grain)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {data.map((d, i) => (
                <g key={d.year}>
                    <circle cx={x(i)} cy={y(d.coverage)} r="4" fill="var(--color-soil-950)" stroke="var(--color-grain)" strokeWidth="2" />
                    <text x={x(i)} y={y(d.coverage) - 12} textAnchor="middle" fontSize="11" fill="var(--color-cream)" fontFamily="var(--font-mono)">
                        {d.coverage}×
                    </text>
                    <text x={x(i)} y={h - 8} textAnchor="middle" fontSize="10" fill="var(--color-muted)" fontFamily="var(--font-mono)">
                        {d.year}
                    </text>
                </g>
            ))}
        </svg>
    );
}

// Donut for capital / treasury allocation.
export function Donut({ data }) {
    const radius = 60;
    const stroke = 22;
    const circ = 2 * Math.PI * radius;
    let offset = 0;
    const palette = ['var(--color-grain)', 'var(--color-field)', 'var(--color-clay)', 'var(--color-bone-300)'];
    return (
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
            <svg width="160" height="160" viewBox="0 0 160 160" className="shrink-0 -rotate-90">
                <circle cx="80" cy="80" r={radius} fill="none" stroke="var(--color-soil-800)" strokeWidth={stroke} />
                {data.map((d, i) => {
                    const len = (d.pct / 100) * circ;
                    const seg = (
                        <circle
                            key={i}
                            cx="80"
                            cy="80"
                            r={radius}
                            fill="none"
                            stroke={d.color || palette[i % palette.length]}
                            strokeWidth={stroke}
                            strokeDasharray={`${len} ${circ - len}`}
                            strokeDashoffset={-offset}
                        />
                    );
                    offset += len;
                    return seg;
                })}
            </svg>
            <ul className="w-full space-y-3">
                {data.map((d, i) => (
                    <li key={i} className="flex items-baseline justify-between gap-3 border-b border-soil-800 pb-2">
                        <span className="flex items-center gap-2.5 text-sm text-cream">
                            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: d.color || palette[i % palette.length] }} />
                            {d.name}
                        </span>
                        <span className="font-mono text-sm text-grain-700">{d.pct}%</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Horizontal stacked bar for crop rotation.
export function StackedBar({ data }) {
    const palette = ['var(--color-grain)', 'var(--color-field)', 'var(--color-clay)'];
    return (
        <div>
            <div className="flex h-12 w-full overflow-hidden rounded-lg">
                {data.map((d, i) => (
                    <div
                        key={d.crop}
                        title={`${d.crop}: ${d.pct}%`}
                        className="flex items-center justify-center text-xs font-semibold text-ink"
                        style={{ width: `${d.pct}%`, background: palette[i % palette.length] }}
                    >
                        {d.pct}%
                    </div>
                ))}
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                {data.map((d, i) => (
                    <li key={d.crop} className="flex items-start gap-2.5">
                        <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: palette[i % palette.length] }} />
                        <span>
                            <span className="block text-sm font-medium text-cream">{d.crop}</span>
                            <span className="text-xs text-muted">{d.role}</span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
