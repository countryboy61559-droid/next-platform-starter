import Link from 'next/link';
import { Reveal } from 'components/reveal';
import { AccessForm } from 'components/access-form';
import { GrowthBars, RevenueChart, CoverageLine, Donut, StackedBar } from 'components/charts';
import {
    headlineStats,
    proForma,
    revenue,
    tokenYield,
    tollRevenue,
    capitalLayers,
    cropAllocation,
    treasuryAllocation,
    vaults,
    truthLayer,
    investorTypes,
    risks,
    tokens
} from 'data/agstream';

export default function Page() {
    return (
        <>
            <Hero />
            <StatStrip />
            <Thesis />
            <HowItWorks />
            <Vaults />
            <TruthLayer />
            <FarmGates />
            <Tokens />
            <Model />
            <Capital />
            <Structure />
            <Access />
        </>
    );
}

/* ---------------------------------------------------------------- Hero */

function Hero() {
    return (
        <section className="grain-overlay relative overflow-hidden">
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background:
                        'radial-gradient(120% 90% at 75% -10%, rgba(227,178,81,0.16), transparent 55%), radial-gradient(90% 70% at 0% 100%, rgba(102,114,74,0.18), transparent 60%)'
                }}
            />
            <div className="shell relative z-10 grid gap-14 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-28">
                <div className="max-w-2xl">
                    <Reveal>
                        <span className="eyebrow">Real-world agricultural assets · Saskatchewan</span>
                    </Reveal>
                    <Reveal delay={80}>
                        <h1 className="mt-6 text-balance">
                            Perpetual capital for the people who{' '}
                            <span className="italic text-grain-700">grow the world.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={160}>
                        <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/85">
                            AgStream tokenizes the crop share — not the land — turning a stream of Saskatchewan wheat,
                            canola and pulses into an institutional-grade real-world asset. Farmers trade short-term debt
                            for upfront liquidity that never has to be repaid. Investors gain perpetual exposure to
                            productive farmland.
                        </p>
                    </Reveal>
                    <Reveal delay={240}>
                        <div className="mt-9 flex flex-wrap gap-3">
                            <Link href="#access" className="btn-primary btn-lg">
                                Request access
                            </Link>
                            <Link href="#thesis" className="btn-ghost btn-lg">
                                Read the thesis
                            </Link>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={200} className="self-end">
                    <div className="rounded-2xl border border-soil-800 bg-soil-900/70 p-6 backdrop-blur-sm">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-grain-700">The structure</p>
                        <dl className="mt-5 space-y-4">
                            {[
                                ['Vehicle', 'Perpetual land-backed SPV'],
                                ['Instruments', 'Principal & Yield Tokens'],
                                ['Operator', 'FarmGates Group'],
                                ['Scale', '12,800 → 128,000 acres'],
                                ['Horizon', '2026 – 2030']
                            ].map(([k, v]) => (
                                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-soil-800 pb-3 last:border-0 last:pb-0">
                                    <dt className="text-sm text-muted">{k}</dt>
                                    <dd className="text-right text-sm font-medium text-cream">{v}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------- Stat strip */

function StatStrip() {
    return (
        <section className="border-y border-soil-800 bg-soil-900/50">
            <div className="shell grid grid-cols-2 divide-soil-800 py-10 sm:grid-cols-4 sm:divide-x">
                {headlineStats.map((s, i) => (
                    <Reveal key={s.label} delay={i * 70} className="px-2 py-3 text-center sm:px-6">
                        <p className="font-display text-4xl font-light text-grain-700 sm:text-5xl">{s.value}</p>
                        <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-cream/60">{s.unit}</p>
                        <p className="mx-auto mt-3 max-w-[18ch] text-xs leading-relaxed text-muted">{s.label}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------- Thesis */

function Thesis() {
    return (
        <Section id="thesis" eyebrow="The thesis" title="From debtor to producer-partner.">
            <div className="grid gap-8 lg:grid-cols-2">
                <Reveal className="rounded-2xl border border-soil-800 bg-soil-900/40 p-7">
                    <h3 className="text-clay">The old model squeezes the farm</h3>
                    <p className="mt-4 text-sm leading-relaxed text-cream/80">
                        Traditional agricultural finance — like the CCGA Advance Payments Program — is short-term debt
                        that must be repaid within 18 months. Against high interest rates and record input costs, that
                        creates a cash-flow squeeze for grain and oilseed farmers exactly when droughts hit hardest.
                    </p>
                    <ul className="mt-6 space-y-3">
                        {['Debt repayable in 18 months', 'Grain buyers capture the milling margin', 'Cash-flow risk concentrated on the farm'].map((t) => (
                            <li key={t} className="flex items-start gap-3 text-sm text-muted">
                                <Dash />
                                {t}
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal delay={100} className="rounded-2xl border border-grain/30 bg-gradient-to-b from-grain/[0.07] to-transparent p-7">
                    <h3 className="text-grain-700">AgStream rewrites it as perpetual capital</h3>
                    <p className="mt-4 text-sm leading-relaxed text-cream/85">
                        Instead of a loan, the farmer sells a permanent share of production for upfront liquidity — a lump
                        sum that never has to be returned. The farm becomes a producer-partner, keeping 100% legal
                        ownership of the land while accessing global capital from Tokyo to London.
                    </p>
                    <ul className="mt-6 space-y-3">
                        {['Liquidity that is never repaid', 'Milling margin stays in the farmer’s ecosystem', '25% value-add premium for verified ingredients'].map((t) => (
                            <li key={t} className="flex items-start gap-3 text-sm text-cream">
                                <Check />
                                {t}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </Section>
    );
}

/* ---------------------------------------------------------------- How it works */

function HowItWorks() {
    const steps = [
        {
            n: '01',
            title: 'Tokenize the crop share',
            body: 'The protocol wraps a permanent share of production in a digital token — a "Digital Twin" of the physical harvest on-chain. The land itself is never tokenized, so the farmer keeps full legal title.'
        },
        {
            n: '02',
            title: 'Stream verified yield',
            body: 'Hardware oracles in the grain bin verify each harvest as it lands, automatically minting a daily yield stream. The platform functions as a commodity vault backed by productive acres.'
        },
        {
            n: '03',
            title: 'Capture the full margin',
            body: 'FarmGates acts as a toll processor rather than a buyer, so cleaning, milling and value-add throughput stay inside the farmer’s ecosystem instead of leaking to multinationals.'
        }
    ];
    return (
        <Section eyebrow="How it works" title="A commodity vault on the prairie.">
            <div className="grid gap-6 md:grid-cols-3">
                {steps.map((s, i) => (
                    <Reveal key={s.n} delay={i * 90} className="relative rounded-2xl border border-soil-800 bg-soil-900/40 p-7">
                        <span className="font-mono text-sm text-grain-700/70">{s.n}</span>
                        <h3 className="mt-4 text-cream">{s.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}

/* ---------------------------------------------------------------- Vaults */

function Vaults() {
    return (
        <Section
            id="vaults"
            eyebrow="For farmers"
            title="Two vaults. Chosen at the kitchen table."
            lede="Standardized financial structures a farmer can pick to fit their operational goals — no bespoke negotiation required."
        >
            <div className="grid gap-6 lg:grid-cols-2">
                {vaults.map((v, i) => (
                    <Reveal key={v.tag} delay={i * 100} className="flex flex-col rounded-2xl border border-soil-800 bg-soil-900/50 p-8">
                        <div className="flex items-center justify-between">
                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-grain-700">{v.tag}</span>
                            <span className="rounded-full border border-soil-700 px-3 py-1 font-mono text-xs text-cream/80">
                                {v.cropShare} crop share
                            </span>
                        </div>
                        <h3 className="mt-5 font-display text-2xl text-cream">{v.name}</h3>
                        <p className="mt-2 text-sm text-muted">{v.summary}</p>
                        <ul className="mt-6 space-y-3 border-t border-soil-800 pt-6">
                            {v.points.map((p) => (
                                <li key={p} className="flex items-start gap-3 text-sm text-cream/85">
                                    <Check />
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}

/* ---------------------------------------------------------------- Truth Layer */

function TruthLayer() {
    return (
        <Section
            id="truth"
            eyebrow="The Truth Layer"
            title="Verifiable data replaces institutional trust."
            lede="High-tech hardware oracles — like Regina-built Bin-Sense — watch quantity, quality and movement around the clock."
        >
            <div className="grid gap-6 md:grid-cols-3">
                {truthLayer.map((t, i) => (
                    <Reveal key={t.title} delay={i * 90} className="rounded-2xl border border-soil-800 bg-soil-900/40 p-7">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-field/15">
                            <OracleIcon i={i} />
                        </div>
                        <h3 className="mt-5 text-lg text-cream">{t.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted">{t.body}</p>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}

/* ---------------------------------------------------------------- FarmGates */

function FarmGates() {
    return (
        <Section eyebrow="The operator" title="FarmGates: the toll-processor that closes the loop.">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <Reveal>
                    <p className="text-lg leading-relaxed text-cream/85">
                        By acting as a service layer rather than a buyer, FarmGates Group keeps grain inside the farmer’s
                        ecosystem — capturing the milling margin that usually flows to multinationals. Food processors pay
                        a <span className="text-grain-700">25% value-add premium</span> for verified, high-spec ingredients
                        with cryptographic proof of nutrient density and traceability.
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                        {[
                            ['Operating manager', 'Seeding, harvest & rotation'],
                            ['Toll processor', 'Clean, sort, store, mill'],
                            ['Marketing platform', 'Procurement & grain logistics'],
                            ['Reporting layer', 'Acre-level institutional data']
                        ].map(([k, v]) => (
                            <div key={k} className="rounded-xl border border-soil-800 bg-soil-900/40 p-4">
                                <p className="text-sm font-medium text-cream">{k}</p>
                                <p className="mt-1 text-xs text-muted">{v}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={120} className="rounded-2xl border border-soil-800 bg-soil-900/50 p-7">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-grain-700">Supplemental toll revenue</p>
                    <p className="mt-2 text-sm text-muted">Upside not reflected in base production value ($M)</p>
                    <div className="mt-6 space-y-3">
                        {tollRevenue.map((t) => {
                            const max = Math.max(...tollRevenue.map((x) => x.amount));
                            return (
                                <div key={t.year} className="flex items-center gap-3">
                                    <span className="w-7 font-mono text-xs text-muted">{t.year}</span>
                                    <div className="h-6 grow overflow-hidden rounded bg-soil-800">
                                        <div
                                            className="flex h-full items-center justify-end rounded bg-gradient-to-r from-field-700 to-field pr-2 text-[0.65rem] font-semibold text-bone"
                                            style={{ width: `${(t.amount / max) * 100}%` }}
                                        >
                                            ${t.amount}M
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}

/* ---------------------------------------------------------------- Tokens */

function Tokens() {
    return (
        <Section eyebrow="The instruments" title="Two tokens, one productive asset.">
            <div className="grid gap-6 md:grid-cols-2">
                {tokens.map((t, i) => (
                    <Reveal key={t.code} delay={i * 100} className="rounded-2xl border border-soil-800 bg-soil-900/50 p-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-grain/10 font-mono text-lg font-semibold text-grain-700">
                                    {t.code}
                                </span>
                                <div>
                                    <h3 className="text-cream">{t.name}</h3>
                                    <p className="text-xs uppercase tracking-wide text-muted">{t.descriptor}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-display text-3xl font-light text-grain-700">{t.yield}</p>
                                <p className="font-mono text-[0.65rem] uppercase tracking-wide text-muted">target yield</p>
                            </div>
                        </div>
                        <p className="mt-6 border-t border-soil-800 pt-6 text-sm leading-relaxed text-muted">{t.body}</p>
                    </Reveal>
                ))}
            </div>
            <Reveal delay={150}>
                <p className="mt-6 text-center text-sm text-muted">
                    20% of annual Gross Production Value flows into a perpetual token treasury — a hard cap that preserves
                    operating liquidity, debt service and reserve accumulation.
                </p>
            </Reveal>
        </Section>
    );
}

/* ---------------------------------------------------------------- Model */

function Model() {
    return (
        <Section
            id="model"
            eyebrow="Five-year model · 2026–2030"
            title="A scale-up engineered for institutional cash flow."
            lede="Directional pro-forma estimates for the deployment from 10 to 100 production units across Saskatchewan."
        >
            <div className="grid gap-6 lg:grid-cols-2">
                <Reveal className="rounded-2xl border border-soil-800 bg-soil-900/40 p-7">
                    <ChartHead label="Land-base expansion" note="Cultivated acres by year" />
                    <div className="mt-6">
                        <GrowthBars data={proForma} />
                    </div>
                </Reveal>

                <Reveal delay={100} className="rounded-2xl border border-soil-800 bg-soil-900/40 p-7">
                    <ChartHead label="Revenue & treasury" note="$M per fiscal year" />
                    <div className="mt-6">
                        <RevenueChart data={revenue} />
                    </div>
                </Reveal>
            </div>

            <Reveal delay={120} className="mt-6 rounded-2xl border border-soil-800 bg-soil-900/40 p-7">
                <ChartHead label="Treasury coverage ratio" note="Token pool ÷ total yield obligations — held above 11×" />
                <div className="mt-6">
                    <CoverageLine data={tokenYield} />
                </div>
            </Reveal>

            <Reveal delay={140} className="mt-6 overflow-x-auto rounded-2xl border border-soil-800 bg-soil-900/40">
                <table className="w-full min-w-[640px] text-left text-sm">
                    <thead>
                        <tr className="border-b border-soil-800 text-xs uppercase tracking-wider text-muted">
                            <th className="px-5 py-4 font-medium">Fiscal year</th>
                            <th className="px-5 py-4 text-right font-medium">Acres</th>
                            <th className="px-5 py-4 text-right font-medium">Units</th>
                            <th className="px-5 py-4 text-right font-medium">Land value</th>
                            <th className="px-5 py-4 text-right font-medium">GPV</th>
                            <th className="px-5 py-4 text-right font-medium">EBITDA</th>
                            <th className="px-5 py-4 text-right font-medium">Token pool</th>
                        </tr>
                    </thead>
                    <tbody className="font-mono text-cream/90">
                        {proForma.map((p, i) => (
                            <tr key={p.year} className="border-b border-soil-800/60 last:border-0">
                                <td className="px-5 py-3.5 font-sans text-cream">{p.year}</td>
                                <td className="px-5 py-3.5 text-right">{p.acres.toLocaleString()}</td>
                                <td className="px-5 py-3.5 text-right">{p.units}</td>
                                <td className="px-5 py-3.5 text-right">${p.landValue}M</td>
                                <td className="px-5 py-3.5 text-right">${revenue[i].gpv}M</td>
                                <td className="px-5 py-3.5 text-right">${revenue[i].ebitda}M</td>
                                <td className="px-5 py-3.5 text-right text-grain-700">${revenue[i].tokenPool}M</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Reveal>

            <Reveal delay={120} className="mt-6 rounded-2xl border border-soil-800 bg-soil-900/40 p-7">
                <ChartHead label="Three-year crop rotation" note="Pulse · cereal · oilseed cycle for soil health and yield stability" />
                <div className="mt-6">
                    <StackedBar data={cropAllocation} />
                </div>
            </Reveal>
        </Section>
    );
}

/* ---------------------------------------------------------------- Capital */

function Capital() {
    return (
        <Section
            id="capital"
            eyebrow="Institutional allocation"
            title="Four capital layers. One perpetual platform."
        >
            <div className="grid gap-6 lg:grid-cols-2">
                <Reveal className="rounded-2xl border border-soil-800 bg-soil-900/40 p-7">
                    <ChartHead label="Capital structure" note="Allocation across instruments" />
                    <div className="mt-7">
                        <Donut data={capitalLayers} />
                    </div>
                </Reveal>

                <Reveal delay={100} className="rounded-2xl border border-soil-800 bg-soil-900/40 p-7">
                    <ChartHead label="Year-5 treasury" note="Where distributions and reserves go" />
                    <div className="mt-7">
                        <Donut data={treasuryAllocation} />
                    </div>
                </Reveal>
            </div>

            <Reveal delay={120} className="mt-6 overflow-hidden rounded-2xl border border-soil-800 bg-soil-900/40">
                <div className="border-b border-soil-800 px-7 py-5">
                    <ChartHead label="Who it is built for" note="Institutional targeting by primary vehicle" />
                </div>
                <ul className="divide-y divide-soil-800">
                    {investorTypes.map((inv) => (
                        <li key={inv.who} className="grid gap-2 px-7 py-5 sm:grid-cols-[1fr_1.6fr_1fr] sm:items-center sm:gap-6">
                            <span className="font-medium text-cream">{inv.who}</span>
                            <span className="text-sm text-muted">{inv.want}</span>
                            <span className="font-mono text-xs text-grain-700 sm:text-right">{inv.via}</span>
                        </li>
                    ))}
                </ul>
            </Reveal>
        </Section>
    );
}

/* ---------------------------------------------------------------- Structure / risk */

function Structure() {
    return (
        <Section
            id="structure"
            eyebrow="Legal security & risk"
            title="Global capital, local safety."
            lede="A 100% Canadian-owned SPV holds the liens and security agreements locally — built to comply with the Saskatchewan Farm Security Act."
        >
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
                <Reveal className="rounded-2xl border border-grain/25 bg-gradient-to-b from-grain/[0.06] to-transparent p-7">
                    <h3 className="text-grain-700">The regulatory buffer</h3>
                    <ul className="mt-5 space-y-4 text-sm leading-relaxed text-cream/85">
                        <li className="flex gap-3"><Check />A Canadian-owned SPV holds the legal liens and General Security Agreements on home soil.</li>
                        <li className="flex gap-3"><Check />The farmer’s Saskatchewan Crop Insurance (SCIC) policy is formally assigned to the SPV.</li>
                        <li className="flex gap-3"><Check />If a crop fails, the insurance payout flows to the smart contract to satisfy the investor’s crop share — making the platform the first-priority assignee.</li>
                    </ul>
                </Reveal>

                <Reveal delay={100} className="rounded-2xl border border-soil-800 bg-soil-900/40 p-7">
                    <h3 className="text-cream">Risk management framework</h3>
                    <div className="mt-5 space-y-5">
                        {risks.map((r) => (
                            <div key={r.title}>
                                <p className="text-sm font-medium text-grain-700">{r.title}</p>
                                <p className="mt-1 text-sm text-muted">{r.mitigations.join(' · ')}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}

/* ---------------------------------------------------------------- Access */

function Access() {
    return (
        <section id="access" className="grain-overlay relative overflow-hidden border-t border-soil-800">
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{ background: 'radial-gradient(80% 60% at 50% 0%, rgba(227,178,81,0.12), transparent 60%)' }}
            />
            <div className="shell relative z-10 grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                <Reveal>
                    <span className="eyebrow">Request access</span>
                    <h2 className="mt-5 text-balance">Whether you grow it or fund it, start the conversation.</h2>
                    <p className="mt-5 max-w-md text-cream/80">
                        Farmers exploring a vault and institutions seeking durable agricultural yield both begin the same
                        way. Tell us where you sit and a person on the AgStream team will follow up directly.
                    </p>
                    <div className="mt-8 space-y-4">
                        {[
                            ['Farmers', 'Upfront liquidity, never repaid — keep your land and your milling margin.'],
                            ['Institutions', 'Perpetual exposure to productive Saskatchewan acres, verified on-chain.']
                        ].map(([k, v]) => (
                            <div key={k} className="border-l-2 border-grain/50 pl-4">
                                <p className="text-sm font-medium text-cream">{k}</p>
                                <p className="text-sm text-muted">{v}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
                <Reveal delay={120}>
                    <AccessForm />
                </Reveal>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------- Shared bits */

function Section({ id, eyebrow, title, lede, children }) {
    return (
        <section id={id} className="shell py-20 sm:py-28">
            <div className="max-w-3xl">
                <Reveal>
                    <span className="eyebrow">{eyebrow}</span>
                </Reveal>
                <Reveal delay={60}>
                    <h2 className="mt-5 text-balance">{title}</h2>
                </Reveal>
                {lede && (
                    <Reveal delay={120}>
                        <p className="mt-5 text-lg leading-relaxed text-muted">{lede}</p>
                    </Reveal>
                )}
            </div>
            <div className="mt-12">{children}</div>
        </section>
    );
}

function ChartHead({ label, note }) {
    return (
        <div>
            <h3 className="font-display text-lg font-medium text-cream">{label}</h3>
            <p className="mt-1 text-xs text-muted">{note}</p>
        </div>
    );
}

function Check() {
    return (
        <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m5 13 4 4L19 7" stroke="var(--color-grain)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function Dash() {
    return (
        <svg className="mt-2 shrink-0" width="14" height="2" viewBox="0 0 14 2" aria-hidden="true">
            <line x1="0" y1="1" x2="14" y2="1" stroke="var(--color-clay)" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function OracleIcon({ i }) {
    const stroke = 'var(--color-field)';
    if (i === 0) {
        return (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 9 12 4l8 5v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9Z" stroke={stroke} strokeWidth="1.6" />
                <path d="M9 19v-5h6v5" stroke={stroke} strokeWidth="1.6" />
            </svg>
        );
    }
    if (i === 1) {
        return (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 12h3l2-6 4 14 3-9 2 4h4" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="8" stroke={stroke} strokeWidth="1.6" />
            <path d="M12 8v4l3 2" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}
