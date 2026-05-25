import { Head, Link } from '@inertiajs/react';
import { ChevronLeft, Scale, AlertTriangle, PlayCircle, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Terms() {
    return (
        <>
            <Head title="Terms of Service" />

            <div className="min-h-screen bg-background text-foreground antialiased pb-20">
                <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
                    <div className="container mx-auto max-w-4xl h-16 flex items-center justify-between px-4">
                        <Button asChild variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                            <Link href="/">
                                <ChevronLeft className="h-4 w-4" /> Back to Home
                            </Link>
                        </Button>
                    </div>
                </header>

                <main className="container mx-auto max-w-3xl px-4 pt-12">
                    <div className="space-y-2 border-b border-border pb-6 mb-8">
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Terms of Service</h1>
                        <p className="text-sm text-muted-foreground font-mono">Last updated: May 24, 2026</p>
                    </div>

                    <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <PlayCircle className="h-5 w-5 text-primary" /> 1. Acceptance of Terms
                            </h2>
                            <p>
                                By configuring an account profile or operating any reminder sequences through RemindMe ("the Service"), you agree to fully comply with and be bound by these legal conditions. If you do not accept these constraints, you are restricted from operating the dashboard tools.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <Scale className="h-5 w-5 text-primary" /> 2. Proper Usage & Restrictions
                            </h2>
                            <p>
                                You represent that you will only use the dispatch engine for legitimate organizing structures. You are strictly prohibited from using our scheduling queues to:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Transmit abusive, threatening, or illegal script content to third-party users or group networks.</li>
                                <li>Overload API limits via automated scripts or bot spam configurations intended to bypass service boundaries.</li>
                                <li>Attempt system penetration tests against our Laravel 13 architecture or access restricted user spaces.</li>
                            </ul>
                            <p>Violating these parameters grants us authority to terminate your access tokens instantly without notice.</p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-primary" /> 3. Disclaimer of Warranties
                            </h2>
                            <p className="uppercase font-medium text-foreground text-xs tracking-wider border-l-2 border-primary pl-3">
                                The service is provided "As Is" and "As Available" without guarantees of any kind.
                            </p>
                            <p>
                                While our processing engine operates every minute via precise background jobs, we are not legally liable for delayed alerts, server down cycles, or message structural drops resulting from network issues within external interfaces (e.g., downstream Telegram service interruptions).
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <Scale className="h-5 w-5 text-primary" /> 4. Intellectual Property
                            </h2>
                            <p>
                                All interface patterns, code architectures, underlying database configurations, design structures, logos, and dashboard workflows belong exclusively to RemindMe and its respective maintainers. You may not replicate or copy structural dashboard components without explicit written alignment.
                            </p>
                        </section>

                        <section className="space-y-3 pt-6 border-t border-border">
                            <h2 className="text-lg font-bold text-foreground flex items-center gap-1.5">
                                <HelpCircle className="h-4 w-4" /> 5. Revisions and Inquiries
                            </h2>
                            <p>
                                We reserve the operational privilege to alter structural platform conditions at any cycle to adapt to modern legislative codes. Continued usage of our system implies acceptance of the updated boundaries. Inquiries regarding structural platform rules should be routed to <code className="text-foreground font-mono bg-muted px-1.5 py-0.5 rounded text-xs">legal@srr-remindly.app</code>.
                            </p>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
}
