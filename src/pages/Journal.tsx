import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { User } from "./HomePage";

type Journal = {
    id: Number;
    title: String;
    content: String;
    userId: Number;
}

type Props = {
    user: User | null;
}
export function Journal({ user }: Props) {
    const [journal, setJournal] = useState<Journal[]>([])
    console.log(user)
    console.log(journal)

    useEffect(() => {
        getAllJournals()
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function getAllJournals() {
        fetch("http://localhost:5000/journal")
            .then(resp => resp.json())
            .then(result => setJournal(result))
    }
    function deleteJournal(id: Number) {
        fetch(`http://localhost:5000/journal/${id}`, {
            method: 'DELETE'
        })
            .then((result) => {
                result.json().then(resp => console.log(resp))
                getAllJournals()

            })
    }

    return (
        <div className="journal">
            <h1>
                JOURNAL with us
            </h1>
            <div className="all-journals">
                <div className="creating-journal">
                    <form
                        className="create-journal"
                        onSubmit={event => {
                            event.preventDefault()
                            console.log(user)
                            fetch("http://localhost:5000/journal", {
                                method: 'POST',
                                headers: {
                                    'Content-type': 'application/json'
                                },
                                body: JSON.stringify({
                                    userId: user.id,
                                    title: event.target.title.value,
                                    content: event.target.content.value
                                })


                            })

                                .then(resp => resp.json())
                                .then(journalFromServer => setJournal(journalFromServer))
                        }}

                    >

                        <div className="journal-appearence">
                            <h2>Daily Journal</h2>
                            <div className="journal-written-part">
                                <input type="text" name="title" placeholder=" Enter title" />

                                <textarea name="content" id="content" cols={30} rows={12} placeholder=' I am gratful for "what" because "why" ...' >

                                </textarea>

                                <button>
                                    Save Me
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="all-journals-list">
                    <ul>
                        {journal.map(item => (
                            <li >
                                <Link to={`/journal/${item.id}`}>
                                    <h2>{item.title}</h2>
                                </Link>
                                <button
                                    onClick={() => deleteJournal(item.id)}
                                >🗑️</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}