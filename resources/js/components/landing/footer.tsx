export function LandingFooter() {
    return (
        <footer className="border-t border-border bg-background py-10 text-xs text-muted-foreground font-mono">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    &copy; {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME}. Built with Fastest Engine.
                </div>
                <div className="flex items-center gap-6">
                    <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
                    <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}
