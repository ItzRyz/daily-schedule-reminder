import { Link } from '@inertiajs/react';
import {
    Send,
    Clock,
    ArrowRight,
    Sparkles,
    Zap,
    MessageSquare
} from 'lucide-react';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function LandingHero() {
    return (
        <>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted border border-border rounded-full text-xs text-muted-foreground mb-6">
                <Badge variant="outline" className="bg-background text-primary border-primary/30 py-0 px-2 text-[10px]">
                    v1.0
                </Badge>
                <span className="flex items-center gap-1">
                    VisionSync Product&nbsp;<Sparkles className="h-3 w-3 text-primary" />
                </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl mx-auto leading-[1.15]">
                Send Real-time Reminders <br />
                Directly to your <span className="text-primary bg-primary/10 px-2 rounded-md">Telegram</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Manage schedules, tasks, and important events from a single dashboard. Receive instant, interactive notifications via Telegram Bot with no delay.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto px-8 font-semibold shadow-sm">
                    <Link href="/register" className="flex items-center gap-2">
                        Get Started for Free <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border bg-background hover:bg-accent hover:text-accent-foreground w-full sm:w-auto px-8">
                    <a href="#features">Learn More</a>
                </Button>
            </div>

            <div className="mt-20 border border-border bg-card/50 rounded-xl p-2 backdrop-blur-sm max-w-4xl mx-auto shadow-xl">
                <div className="border border-border bg-card text-card-foreground rounded-lg p-6 sm:p-8 text-left">

                    <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-destructive/40" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                            <div className="w-3 h-3 rounded-full bg-green-500/40" />
                        </div>
                        <div className="text-xs text-muted-foreground font-mono bg-muted/80 px-4 py-1 rounded">
                            {import.meta.env.VITE_APP_URL}/dashboard
                        </div>
                        <div className="w-12" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">

                        <div className="p-4 border border-border rounded-lg bg-muted/50 relative group hover:border-primary/40 transition-colors">
                            <div className="text-primary font-bold mb-1 flex items-center gap-2">
                                <Clock className="h-4 w-4" /> 01. Set a Schedule
                            </div>
                            <p className="text-muted-foreground font-sans mt-2 text-[13px] leading-relaxed">
                                Write a message: <span className="italic font-mono text-foreground">"Review proposal with the client team"</span> scheduled every Friday at 2:00 PM.
                            </p>
                        </div>

                        <div className="p-4 border border-border rounded-lg bg-muted/50 relative group hover:border-primary/40 transition-colors flex flex-col justify-between">
                            <div>
                                <div className="text-primary font-bold mb-1 flex items-center gap-2">
                                    <Zap className="h-4 w-4" /> 02. Realtime Engine
                                </div>
                                <p className="text-muted-foreground font-sans mt-2 text-[13px] leading-relaxed">
                                    Our app queue system processes the scheduler asynchronously in the background every second.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 border border-primary/30 bg-primary/5 text-foreground rounded-lg relative hover:border-primary transition-colors">
                            <div className="text-primary font-bold mb-1 flex items-center gap-2">
                                <Send className="h-4 w-4 text-sky-500" /> 03. Telegram Push
                            </div>
                            <div className="text-xs font-sans bg-background border border-border p-2.5 rounded-md mt-3 text-muted-foreground shadow-sm">
                                <div className="flex items-center gap-1 text-[11px] text-sky-500 font-bold mb-1">
                                    <MessageSquare className="h-3 w-3" /> {import.meta.env.VITE_APP_NAME} Bot
                                </div>
                                <span className="text-foreground font-medium">[REMINDER]</span> Don't forget: today there's a proposal review with the client team at 2:00 PM.
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
