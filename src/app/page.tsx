import DataOptions from "@/components/molecule/DataOptions";
import GraphOptions from "@/components/molecule/GraphOptions";
import DataRenderer from "@/components/organism/DataRenderer";

export default function Home() {
    return (
        <main className="w-full h-screen p-6 flex">
            <div className="bg-white/10 rounded-2xl relative overflow-clip flex-1">
                <div className="absolute inset-0 p-4 w-full flex items-start content-start md:justify-between gap-4 flex-wrap">
                    <GraphOptions />
                    <h3 className="hidden md:block bg-black/50 backdrop-blur-2xl rounded-lg shadow-[0px_2px_8px_#0000008c] px-4 py-3 text-sm font-medium z-10">
                        Consumption by fuel and sector (ktoe)
                    </h3>
                    <DataOptions />
                </div>

                <DataRenderer />
            </div>
        </main>
    );
}
