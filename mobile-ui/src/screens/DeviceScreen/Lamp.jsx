import { DeviceLayout, MainLayout } from "../../layouts";
import { Lamp } from "../../components";
import { useState } from "react";

export default function LampScreen({ route, navigation }) {
    const [lampValue, setlampValue] = useState(1);
    const updatelampValue = (value) => {
        setlampValue(value);
    };
    return (
        <MainLayout>
            <DeviceLayout deviceName="Lamp Device" navigation={navigation}>
                <Lamp powerState={lampValue} callback={updatelampValue}></Lamp>
            </DeviceLayout>
        </MainLayout>
    );
}
