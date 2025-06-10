import DataOptions from "@/components/molecule/DataOptions";
import GraphOptions from "@/components/molecule/GraphOptions";
import DataRenderer from "@/components/organism/DataRenderer";

export default function Home() {
    return (
        <main className="w-full h-screen p-6 flex">
            <div className="bg-white/10 rounded-2xl relative overflow-clip isolate flex-1">
                <DataRenderer />
                <h3 className="absolute top-4 left-4 bg-black/50 backdrop-blur-2xl rounded-lg shadow-[0px_2px_8px_#0000008c] px-4 py-3 text-sm font-medium">
                    Consumption by fuel and sector (ktoe)
                </h3>
                <GraphOptions />
                <DataOptions />
            </div>
        </main>
    );
}
