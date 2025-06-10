import { hslToRgb } from "@/utils/utils";
import Box from "../atom/Bar";

export default function DataRow({
    hue,
    origin,
    data,
    barGap,
    scale,
}: {
    hue: number;
    origin: number;
    data: unknown[];
    barGap: number;
    scale: number;
}) {
    return (
        <>
            {data.map((box, i) => {
                const value =
                    typeof box === "number" ? box : parseFloat(box as string);
                const scaledValue = value;

                const brightness = 5 + ((70 - 5) * i) / (data.length - 1);
                const saturation = 100 - (i / (data.length - 1)) * 50;
                const color = hslToRgb(hue, saturation, brightness);

                return (
                    <Box
                        key={i}
                        position={[i * scale + i * barGap, scaledValue / 2, origin]}
                        height={scaledValue}
                        color={color}
                        scale={scale}
                    />
                );
            })}
        </>
    );
}
