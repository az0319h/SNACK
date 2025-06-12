import DefaultHeader from "@/components/Headers/DefaultHeader"

export default function Layout({children} : {children : React.ReactNode}){
    return(
        <>
            <DefaultHeader />
            <main>
                {children}
            </main>
        </>
    )
}