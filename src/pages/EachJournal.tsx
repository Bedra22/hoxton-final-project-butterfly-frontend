import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Headers } from "../components/Headers";

type OneJournal = {
    id: Number;
    title: String;
    content: String;
    userId: Number;
}
export function EachJournal() {
    const [eachJournal, setEachJournal] = useState<OneJournal>()
    const params = useParams()
    console.log(eachJournal)
    useEffect(() => {
        fetch(`http://localhost:5000/journal/${params.id}`)
            .then(resp => resp.json())
            .then(eachJournalFromServer => setEachJournal(eachJournalFromServer))
    }, [])
    console.log(eachJournal)

    return (
        <div>
            <Headers />
            <div className="eachJournal">
                <h2>{eachJournal?.title}</h2>
                <p>{eachJournal?.content}</p>
            </div>
            <Footer />
        </div>
    )
}