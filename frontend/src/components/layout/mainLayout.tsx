import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";

function MainLayout() {
    return (
        <>


            <div className="container mx-auto px-8 relative min-h-screen overflow-hidden">
                {/* Colorful Floating Particles Background */}
                <div className="absolute inset-0 z-0">
                    {Array.from({ length: 50 }).map((_, i) => {
                        const colors = [
                            'rgba(255,0,0,0.7)',
                            'rgba(255,127,0,0.7)',
                            'rgba(255,255,0,0.7)',
                            'rgba(0,255,0,0.7)',
                            'rgba(0,0,255,0.7)',
                            'rgba(75,0,130,0.7)',
                            'rgba(148,0,211,0.7)'
                        ];
                        const color = colors[i % colors.length];
                        return (
                            <div
                                key={i}
                                className="particle"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    width: `${10 + Math.random() * 60}px`,
                                    height: `${10 + Math.random() * 60}px`,
                                    background: `radial-gradient(circle, ${color}, transparent)`,
                                    animationDuration: `${5 + Math.random() * 15}s`,
                                    opacity: `${0.3 + Math.random() * 0.7}`
                                }}
                            ></div>
                        );
                    })}
                </div>

                {/* Main Content */}
                <div className="relative z-10">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </div>






        </>
    );
}

export default MainLayout;