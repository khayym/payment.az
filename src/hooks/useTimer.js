import { useEffect, useState } from "react"

function fmtMSS(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }




export const useTimer = (start, restart) => {
    const [count, setCount] = useState(120);
    const resetTimer = () => setCount(120);

    useEffect(() => {
        if (start) {
            if (count > 0) {
                const secondsLeft = setInterval(() => {
                    setCount(c => c - 1);
                }, 1000);

                return () => clearInterval(secondsLeft);
            }
        }

    }, [count, restart]);

    useEffect(() => {
        resetTimer()
    }, [restart])

    return {
        time: fmtMSS(count),
        access: count !== 0,
        reset: resetTimer
    };
}