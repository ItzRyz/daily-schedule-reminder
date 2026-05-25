import { Link } from "@inertiajs/react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

import type { LandingAuthProps } from "@/types";

export function LandingHeader({ auth }: { auth: LandingAuthProps }) {
    return (
        <header className="sticky top-4 z-50 w-full mt-8">
            <div className="container mx-auto max-w-6xl h-20 flex items-center justify-between px-4 sm:px-6 border border-border rounded-4xl bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/60">
                <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
                    <div className="p-2 bg-muted border border-border rounded-lg text-primary">
                        <Bell className="h-4 w-4" />
                    </div>
                    <span className="bg-linear-to-r from-foreground to-foreground/80 bg-clip-text">
                        SRR Remindly
                    </span>
                </div>

                <nav className="flex items-center gap-3">
                    {auth?.user ? (
                        <Button asChild variant="outline" className="border-border hover:bg-accent hover:text-accent-foreground">
                            <Link href="/dashboard">Dashboard</Link>
                        </Button>
                    ) : (
                        <>
                            <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
                                <Link href="/login">Sign In</Link>
                            </Button>
                            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                                <Link href="/register">Register</Link>
                            </Button>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}
