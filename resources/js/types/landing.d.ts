export type LandingUser = {
    id: number;
    name: string;
    email: string;
}

export type LandingAuthProps = {
    user: LandingUser | null;
}

export type LandingProps = {
    auth: LandingAuthProps;
}
