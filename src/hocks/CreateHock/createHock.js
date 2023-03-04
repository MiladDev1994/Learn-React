import React , {useState} from 'react';
import PageA from "./PageA";
import PageB from "./PageB";

const CreateHock = () => {

    const [page , setPage] = useState(false);

    return (
        <div>
            <h1>{page ? <PageA /> : <PageB />}</h1>
            <button onClick={() => setPage(!page)}>ChangePage</button>
        </div>
    );
};

export default CreateHock;