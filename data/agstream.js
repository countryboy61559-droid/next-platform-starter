// All figures sourced from the AgStream SPV institutional briefing documents:
// "Strategic Five-Year Financial Forecast & Institutional Allocation Model" and the
// "Executive Summary: AgStream & The Future of Agricultural Finance".
// Forecasts are directional institutional planning estimates.

export const headlineStats = [
    { value: '128,000', unit: 'acres', label: 'Target cultivated land base by Year 5' },
    { value: '41.9', unit: 'MMT', label: 'Recent Saskatchewan grain production' },
    { value: '100%', unit: 'ownership', label: 'Farmer retains legal title to the land' },
    { value: '11.6×', unit: 'coverage', label: 'Year-5 treasury coverage ratio' }
];

// Five-year operational expansion
export const proForma = [
    { year: 'Year 1', acres: 12800, units: 10, landValue: 31.5 },
    { year: 'Year 2', acres: 41600, units: 32.5, landValue: 102.5 },
    { year: 'Year 3', acres: 70400, units: 55, landValue: 173.4 },
    { year: 'Year 4', acres: 99200, units: 77.5, landValue: 244.2 },
    { year: 'Year 5', acres: 128000, units: 100, landValue: 315.0 }
];

// Revenue & treasury forecast ($M)
export const revenue = [
    { year: 'Y1', gpv: 6.4, opex: 4.8, ebitda: 1.6, tokenPool: 1.28, surplus: 0.32 },
    { year: 'Y2', gpv: 20.8, opex: 15.6, ebitda: 5.2, tokenPool: 4.16, surplus: 1.04 },
    { year: 'Y3', gpv: 35.2, opex: 26.4, ebitda: 8.8, tokenPool: 7.04, surplus: 1.76 },
    { year: 'Y4', gpv: 51.6, opex: 38.7, ebitda: 12.9, tokenPool: 10.32, surplus: 2.58 },
    { year: 'Y5', gpv: 66.56, opex: 49.92, ebitda: 16.64, tokenPool: 13.31, surplus: 3.33 }
];

// Token yield obligations & coverage
export const tokenYield = [
    { year: 'Y1', pt: 0.04, yt: 0.06, coverage: 12.8 },
    { year: 'Y2', pt: 0.15, yt: 0.21, coverage: 11.6 },
    { year: 'Y3', pt: 0.25, yt: 0.35, coverage: 11.7 },
    { year: 'Y4', pt: 0.36, yt: 0.52, coverage: 11.7 },
    { year: 'Y5', pt: 0.47, yt: 0.67, coverage: 11.6 }
];

// Supplemental FarmGates toll-processing revenue ($M) — upside not in base GPV
export const tollRevenue = [
    { year: 'Y1', amount: 0.45 },
    { year: 'Y2', amount: 1.4 },
    { year: 'Y3', amount: 2.35 },
    { year: 'Y4', amount: 3.45 },
    { year: 'Y5', amount: 4.6 }
];

// Institutional capital structure
export const capitalLayers = [
    { name: 'Principal Tokens (PT)', pct: 45, role: 'Long-duration RWA exposure', color: 'var(--color-grain)' },
    { name: 'Yield Tokens (YT)', pct: 25, role: 'Yield-focused institutional exposure', color: 'var(--color-field)' },
    { name: 'Senior Agricultural Debt', pct: 20, role: 'Land acquisition leverage', color: 'var(--color-clay)' },
    { name: 'SPV Treasury & Reserve', pct: 10, role: 'Liquidity and stabilization', color: 'var(--color-bone-300)' }
];

// Crop rotation allocation
export const cropAllocation = [
    { crop: 'Wheat & Durum', pct: 40, role: 'Revenue stabilization' },
    { crop: 'Canola', pct: 35, role: 'Primary cash-flow generator' },
    { crop: 'Pulses (Peas & Lentils)', pct: 25, role: 'Nitrogen anchor & diversification' }
];

// Year-5 treasury allocation
export const treasuryAllocation = [
    { name: 'Principal Token distributions', pct: 50 },
    { name: 'Yield Token distributions', pct: 25 },
    { name: 'Treasury stabilization reserve', pct: 15 },
    { name: 'Strategic buyback reserve', pct: 10 }
];

export const vaults = [
    {
        tag: 'Vault 1',
        name: 'The Pure Native',
        cropShare: '20%',
        summary: 'Standard crop-share funding with immediate daily yield streaming.',
        points: [
            '20% crop share for upfront liquidity',
            'Daily yield streaming from first harvest',
            'Fair Market Value (FMV) buy-back option',
            'Best fit for established operations seeking working capital'
        ]
    },
    {
        tag: 'Vault 2',
        name: 'The Growth Vault',
        cropShare: '25%',
        summary: 'A cash-flow breather engineered for organic transitions.',
        points: [
            '3-year "Yield Holiday" — 0% yield during certification',
            'Investor receives 25% crop share starting Year 4',
            'Buy-back price capped at 1.5× original capital',
            'Best fit for farms transitioning to organic'
        ]
    }
];

export const truthLayer = [
    {
        title: 'Proof of Harvest',
        body: 'Regina-built Bin-Sense sensors monitor quantity, quality and movement 24/7. As grain enters the bin, the yield is verified and the daily yield stream is minted for investors.'
    },
    {
        title: 'Nutrient Fingerprinting',
        body: 'FarmGates uses Near-Infrared (NIR) Spectroscopy to measure protein, minerals and chemical makeup without damaging a single kernel — cryptographic proof of nutrient density.'
    },
    {
        title: 'Automated Execution',
        body: 'When grain hits a farmer’s price target, the Market Trader Gem triggers an Auto-Strike that locks the price and initiates the Clean & Mill order at FarmGates.'
    }
];

export const investorTypes = [
    { who: 'Pension Funds', want: 'Inflation-protected, long-duration hard assets with stable yield', via: 'Principal Tokens' },
    { who: 'Family Offices', want: 'Agricultural appreciation and real-asset diversification', via: 'Blended PT / YT' },
    { who: 'Sovereign & Food Funds', want: 'Long-term food-supply security and strategic land exposure', via: 'Principal Tokens' },
    { who: 'Digital Asset Institutions', want: 'Tokenized RWAs and yield-bearing on-chain infrastructure', via: 'Yield Tokens' },
    { who: 'Agricultural Banks', want: 'Secured farmland collateral and revenue-linked credit', via: 'Senior secured facilities' }
];

export const risks = [
    {
        title: 'Commodity price risk',
        mitigations: ['Diversified crop rotation', 'Staggered grain marketing', 'Toll-processing value capture']
    },
    {
        title: 'Yield volatility',
        mitigations: ['SCIC crop insurance', 'AgriStability participation', 'Black-soil concentration & precision agronomy']
    },
    {
        title: 'Interest rate risk',
        mitigations: ['Long-duration fixed-rate debt', 'Conservative leverage', 'Treasury reserve accumulation']
    },
    {
        title: 'Regulatory & tokenization risk',
        mitigations: ['Real-world asset collateralization', 'Transparent treasury reporting', 'Institutional-grade audit systems']
    }
];

export const tokens = [
    {
        code: 'PT',
        name: 'Principal Token',
        yield: '3.5%',
        descriptor: 'Asset-backed',
        body: 'Fractional exposure to underlying farmland value and productive infrastructure. Lower volatility, institutional collateral suitability, potential secondary-market appreciation.'
    },
    {
        code: 'YT',
        name: 'Yield Token',
        yield: '5.0%',
        descriptor: 'Production-linked',
        body: 'Exposure to annual production outcomes and harvest performance. Variable upside, commodity-linked participation and a higher institutional return profile.'
    }
];
