import { Head, Link } from '@inertiajs/react';
import { ChevronLeft, Shield, Lock, Eye, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Privacy() {
    return (
        <>
            <Head title="Privacy Policy" />

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
                        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Privacy Policy</h1>
                        <p className="text-sm text-muted-foreground font-mono">Last updated: May 24, 2026</p>
                    </div>

                    <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <Eye className="h-5 w-5 text-primary" /> 1. Information We Collect
                            </h2>
                            <p>
                                At RemindMe, we collect minimal data required to deliver our core synchronization and messaging services securely:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong className="text-foreground">Account Information:</strong> Your name, email address, and encrypted credentials when you register.</li>
                                <li><strong className="text-foreground">Telegram Synchronization Metadata:</strong> Your unique Telegram Chat ID or Group ID provided when authenticating with our official Telegram Bot.</li>
                                <li><strong className="text-foreground">Reminder Content:</strong> The specific text custom descriptions, schedules, and timing configurations you input to trigger alerts.</li>
                            </ul>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <Lock className="h-5 w-5 text-primary" /> 2. How We Use Your Data
                            </h2>
                            <p>We process your data strictly to execute operational features:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>To dispatch automated cron-scheduled payloads safely via the Telegram Bot API framework.</li>
                                <li>To maintain, evaluate, and fix performance bugs inside the Inertia-Laravel system logic.</li>
                                <li>To contact you strictly regarding crucial updates, security patches, or account management inquiries.</li>
                            </ul>
                            <p className="italic bg-muted p-3 rounded-md border border-border text-xs text-foreground">
                                We never rent, sell, or trade your reminder content or personal identities to any third-party marketing networks.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <Shield className="h-5 w-5 text-primary" /> 3. Data Protection & Storage
                            </h2>
                            <p>
                                Your privacy values high priority. All sensitive tokens, user emails, and raw reminder configurations are stored in secure databases protected by industrial firewalls. Transmission over the web is handled via encrypted Transport Layer Security (TLS/HTTPS) structures.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                                <FileText className="h-5 w-5 text-primary" /> 4. Your Rights & Erasure
                            </h2>
                            <p>
                                You retain complete governance over your data configurations. You may modify or terminate your reminder sequences directly through your dashboard navigation at any cycle. Should you choose to remove your user profile permanently, all linked data payloads, configurations, and active Telegram chat mapping links will be permanently deleted from our active production infrastructure.
                            </p>
                        </section>

                        <section className="space-y-3 pt-6 border-t border-border">
                            <h2 className="text-lg font-bold text-foreground">5. Contact Infrastructure</h2>
                            <p>
                                For direct security reporting, strict clarity inquiries, or data access logs, feel free to coordinate assistance channels through our engineering team at <code className="text-foreground font-mono bg-muted px-1.5 py-0.5 rounded text-xs">privacy@srr-remindly.app</code>.
                            </p>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
}
