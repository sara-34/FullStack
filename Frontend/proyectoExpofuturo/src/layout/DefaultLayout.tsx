import { Children } from "react";
import { Link } from "react-router-dom";

interface DefaultLayoutProps {
    children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <header>
                <nav>
                    <ul className="home">
                        
                    </ul>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
