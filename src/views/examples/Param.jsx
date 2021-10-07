import React from "react";
import { useParams } from "react-router";

const Param = (props) => {
    const { id } = useParams();

    return (
        <div className="Param">
            <h1>With Parameter</h1>
            <p>Param: {id}</p>
        </div>
    );
};

export default Param;
