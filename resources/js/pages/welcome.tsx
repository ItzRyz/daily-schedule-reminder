import { Head } from '@inertiajs/react';
import { LandingFeatures, LandingHero } from '@/components/landing';
import LandingLayout from '@/layouts/landing/layout';

import type { LandingProps } from '@/types';

export default function Welcome({ auth }: LandingProps) {
    return (
        <>
            <Head title="Realtime Reminder" />
            <LandingLayout auth={auth}>
                <main className="container mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-24 text-center relative z-10">
                    <LandingHero />
                </main>
                <LandingFeatures />
            </LandingLayout>
        </>
    );
}
