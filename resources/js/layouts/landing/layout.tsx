import type { PropsWithChildren } from 'react';
import { LandingFooter, LandingHeader } from '@/components/landing';
import type { LandingAuthProps } from '@/types';

export default function LandingLayout({ children, auth }: PropsWithChildren<{ auth: LandingAuthProps }>) {
    return (
        <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-112.5 bg-linear-to-b from-primary/5 to-transparent blur-3xl pointer-events-none" />
            <LandingHeader auth={auth} />
            {children}
            <LandingFooter />
        </div>
    )
}
