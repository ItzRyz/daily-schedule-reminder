import { CheckCircle, Send, Shield } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function LandingFeatures() {
    const features = [
        {
            title: 'Instant & No Delay',
            description: 'Notifications are sent via the fastest Telegram Webhook/API. When the scheduled minute arrives, the bot responds immediately.',
            icon: Send,
        },
        {
            title: 'Easy to Configure',
            description: 'Simply run the bot command once in your chat to securely link your Telegram ID to the dashboard.',
            icon: CheckCircle,
        },
        {
            title: 'Security Guaranteed',
            description: 'We protect your privacy. Your reminders will not be shared or used for tracking purposes.',
            icon: Shield,
        }
    ]

    return (
        <section id="features" className="border-t border-border bg-muted/30 py-24 relative z-10">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Benefits of Using {import.meta.env.VITE_APP_NAME}</h2>
                    <p className="mt-3 text-muted-foreground text-sm sm:text-base">
                        A modern infrastructure designed to integrate easily with your daily routines.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-card border-border text-card-foreground shadow-sm hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="flex flex-row items-center gap-4 mb-3">
                                    <div className="p-2 bg-muted border border-border text-primary rounded-lg w-fit">
                                        <feature.icon className="h-5 w-5" />
                                    </div>
                                    <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
                                </div>
                                <CardDescription className="text-muted-foreground text-sm pt-1">
                                    {feature.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
