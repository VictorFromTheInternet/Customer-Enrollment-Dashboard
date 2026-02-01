import {type ReactNode} from 'react'
import { Link } from 'react-router-dom' 
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
                        <h2 className="text-lg font-semibold mb-4 text-left">
                            Enrollment Dashboard
                        </h2>
                        <nav className="flex flex-col justify-center align-center">
                            <Link to="/" className=" flex flex-start p-2 hover:bg-blue-100 rounded">
                                Referral Dashboard
                            </Link>                            
                            <Link to="/referral-form" className="flex flex-start p-2 hover:bg-blue-100 rounded">
                                Referral Form
                            </Link>                            
                            <Link to="/enrollment-form" className="flex flex-start p-2 hover:bg-blue-100 rounded">
                                Enrollment Form
                            </Link>                            
                            <Link to="/customer-dash" className="flex flex-start p-2 hover:bg-blue-100 rounded">
                                Customer Dashboard
                            </Link>                            
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