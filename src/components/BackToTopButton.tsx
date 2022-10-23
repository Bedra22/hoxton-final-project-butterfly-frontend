import React, { useEffect, useState } from "react"

export function BackToTopButton() {

    const [BackToTop, setBackToTop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div className="scrollUp">
            {BackToTop && (
                <button
                    onClick={scrollUp}
                >
                    <img src="https://cdn-icons-png.flaticon.com/128/3444/3444494.png" alt="" />
                </button>
            )}
        </div>
    )
}