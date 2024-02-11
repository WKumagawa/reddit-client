import React from "react";
import { useSelector } from 'react-redux';
import { selectPopular } from "./popularSlice";

export default function Popular() {
    const popular = useSelector(selectPopular);
    return (
        <section className="popular">
            <p>{popular.title}</p>
        </section>
    );
}