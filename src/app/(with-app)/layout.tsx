import AppHeader from "@/components/Headers/AppHeader";
import DefaultHeader from "@/components/Headers/DefaultHeader";

export default function Layout({children} : {children : React.ReactNode}) {
    return(
        <>
            <DefaultHeader />
            <AppHeader />
            <main>
                {children}
            </main>
        </>
    )
}