import AuthHeader from "@/components/Headers/AuthHeader"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AuthHeader />
            <main>
                {children}
            </main>
        </>
    )
}