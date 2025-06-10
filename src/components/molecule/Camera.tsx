import {
    CameraControls,
    CameraControlsImpl,
    PerspectiveCamera,
} from "@react-three/drei";

export default function Camera() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[-100, 100, 100]} fov={70} />
            <CameraControls
                makeDefault
                mouseButtons={{
                    left: CameraControlsImpl.ACTION.ROTATE,
                    middle: CameraControlsImpl.ACTION.DOLLY,
                    right: CameraControlsImpl.ACTION.TRUCK,
                    wheel: CameraControlsImpl.ACTION.DOLLY,
                }}
                touches={{
                    one: CameraControlsImpl.ACTION.TOUCH_ROTATE,
                    two: CameraControlsImpl.ACTION.TOUCH_DOLLY_TRUCK,
                    three: CameraControlsImpl.ACTION.TOUCH_DOLLY_TRUCK,
                }}
            />
        </>
    );
}
