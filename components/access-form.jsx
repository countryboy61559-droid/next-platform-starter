'use client';

import { useState } from 'react';

const audiences = [
    { value: 'Farmer', label: 'Farmer / Producer' },
    { value: 'Institutional', label: 'Institutional investor' },
    { value: 'Operator', label: 'Operator / Partner' },
    { value: 'Other', label: 'Other' }
];

export function AccessForm() {
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [audience, setAudience] = useState('Farmer');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        const formData = new FormData(e.target);
        try {
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (!res.ok) throw new Error('Request failed');
            setStatus('success');
            e.target.reset();
            setAudience('Farmer');
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="rounded-2xl border border-field-700/60 bg-soil-900 p-8 text-center sm:p-12">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-field/15">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="m5 13 4 4L19 7" stroke="var(--color-field)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h3 className="mt-5 text-cream">Request received</h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                    Thank you. The AgStream team reviews every inquiry directly. Expect a reply to the address you
                    provided — typically within two business days.
                </p>
                <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-6">
                    Submit another
                </button>
            </div>
        );
    }

    return (
        <form
            name="agstream-access"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="rounded-2xl border border-soil-800 bg-soil-900/60 p-6 sm:p-8"
        >
            <input type="hidden" name="form-name" value="agstream-access" />
            <p className="hidden">
                <label>
                    Leave blank: <input name="bot-field" />
                </label>
            </p>

            <fieldset>
                <legend className="field-label">I am a</legend>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {audiences.map((a) => (
                        <label
                            key={a.value}
                            className={`cursor-pointer rounded-lg border px-3 py-2.5 text-center text-xs font-medium transition ${
                                audience === a.value
                                    ? 'border-grain bg-grain/10 text-grain-700'
                                    : 'border-soil-700 text-cream/70 hover:border-soil-600'
                            }`}
                        >
                            <input
                                type="radio"
                                name="audience"
                                value={a.value}
                                checked={audience === a.value}
                                onChange={() => setAudience(a.value)}
                                className="sr-only"
                            />
                            {a.label}
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="field-label">Full name</label>
                    <input id="name" name="name" required className="field" placeholder="Dana Holloway" />
                </div>
                <div>
                    <label htmlFor="email" className="field-label">Email</label>
                    <input id="email" name="email" type="email" required className="field" placeholder="dana@example.com" />
                </div>
                <div>
                    <label htmlFor="organization" className="field-label">Organization / Farm</label>
                    <input id="organization" name="organization" className="field" placeholder="Holloway Grain Co." />
                </div>
                <div>
                    <label htmlFor="scale" className="field-label">Acreage or capital range</label>
                    <input id="scale" name="scale" className="field" placeholder="e.g. 6,400 acres / CAD 25M" />
                </div>
            </div>

            <div className="mt-4">
                <label htmlFor="message" className="field-label">What are you exploring?</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="field resize-none"
                    placeholder="A sentence or two about your operation or mandate."
                />
            </div>

            {status === 'error' && (
                <p className="mt-4 rounded-lg border border-clay/50 bg-clay/10 px-4 py-3 text-sm text-clay">
                    Something went wrong submitting the form. Please try again in a moment.
                </p>
            )}

            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={status === 'submitting'} className="btn-primary btn-lg disabled:opacity-60">
                    {status === 'submitting' ? 'Sending…' : 'Request access'}
                </button>
                <p className="text-xs text-muted/80">No obligation. Reviewed by a person, not a bot.</p>
            </div>
        </form>
    );
}
