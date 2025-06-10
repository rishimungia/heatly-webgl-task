import { hslToRgb } from "@/utils/utils";
import Box from "../atom/Bar";

export default function DataRow({
    hue,
    origin,
    data,
    dataScaler,
    rowKey,
    barGap,
    scale,
}: {
    hue: number;
    origin: number;
    data: number[];
    dataScaler: number;
    rowKey: string;
    barGap: number;
    scale: number;
}) {
    return (
        <>
            {data.map((value, i) => {
                const scaledValue = value * dataScaler;
                
                // scale from 10% to 70%
                const brightness = 10 + ((70 - 10) * i) / (data.length - 1);
                
                // scale from 100% - 10%
                const saturation = 100 - (i / (data.length - 1)) * 10;
                
                const color = hslToRgb(hue, saturation, brightness);

                return (
                    <Box
                        key={i}
                        position={[i * scale + i * barGap, scaledValue / 2, origin]}
                        height={scaledValue}
                        color={color}
                        scale={scale}
                        hoverData={{
                            value: value,
                            key: rowKey
                        }}
                    />
                );
            })}
        </>
    );
}
