import LandingHeader from "@/components/Headers/LandingHeader";

export default function Layout({children} : {children : React.ReactNode}){
    return(
        <div className="bg-bg-500 min-h-screen h-full">
            <LandingHeader />
            <main>
                {children}
            </main>
        </div>
    )
}