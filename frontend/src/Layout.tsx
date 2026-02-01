import {type ReactNode} from 'react'
import {SidebarProvider, Sidebar, SidebarContent, SidebarInset} from '@/components/ui/sidebar' 

interface LayoutProps {
    children: ReactNode
}

function Layout({children}: LayoutProps){
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-4">
                            Enrollment Dashboard
                        </h2>
                        <nav className="flex flex-col justify-center align-center">
                            <a href="#">Dashboard</a>
                            <a href="#">New Referral</a>
                            <a href="#">Enrollment</a>
                            <a href="#">Customer</a>
                        </nav>
                    </div>
                </SidebarContent>
            </Sidebar>        
            <SidebarInset>
                <main className="p-6">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default Layout