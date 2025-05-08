import { useState } from "react";
import useFetch from "../Hooks/useFetch";
import Time from "./Time";

function TimeZone() {
    const url = "https://timeapi.io/api/timezone/availabletimezones";
    const { data, loading, error } = useFetch(url);

    const [selectedZone, setSelectedZone] = useState("")

    const handleSelect = (e) =>{
        setSelectedZone(e.target.value)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading time zones: {error}</p>;

    return (
        <section>
            <select
                id="timezone"
                value = {selectedZone}
                onChange={handleSelect}
            >
                <option value="" disabled>
                    -- Select Time Zone --
                </option>
                {data.map((zone) => (
                    <option key={zone} value={zone}>
                        {zone}
                    </option>
                ))}
            </select>
        </section>
    );
}

export default TimeZone;
