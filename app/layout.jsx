import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    metadataBase: new URL('https://agstreamfinancenetlifyapp.netlify.app'),
    title: {
        template: '%s · AgStream',
        default: 'AgStream — Perpetual capital for the people who grow the world'
    },
    description:
        'AgStream turns Saskatchewan grain production into an institutional-grade, tokenized real-world asset — replacing short-term farm debt with perpetual capital, verified by hardware oracles and operated by FarmGates Group.',
    openGraph: {
        title: 'AgStream — Tokenized agricultural production',
        description:
            'Perpetual capital for farmers. Real-world agricultural yield for institutions. A vertically integrated grain platform on the Saskatchewan prairie.',
        type: 'website'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
