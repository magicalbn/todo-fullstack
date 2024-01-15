import React from "react";
import StatusDropDown from "./Shared/StatusDropDown";

const FilterTodo = ({ setFilter }) => {
    return (
        <>
            <StatusDropDown
                onValueChange={setFilter}
                filter={true}
                defaultValue={"all"}
            />
        </>
    );
};

export default FilterTodo;
