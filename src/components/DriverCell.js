import React from 'react';
import DATA_DRIVERS from './drivers.json';
import { useDispatch, useSelector } from "react-redux";
import { assignTask } from "../redux/features/rosteringSlice";


function DriverCell(props) {

    const assign_task_to_driver = useSelector((state) => state.rostering.value.assign_task_to_driver);
    const task_id = useSelector((state) => state.rostering.value.task_id);

    const dispatch = useDispatch();

    function handleClickTask(event) {
        var { id } = event.target;
        dispatch(assignTask(id));
    }

    return (
        <div>
            {!(props.row.id in assign_task_to_driver) ? <button type="button" className={task_id === props.row.id ? "btn btn-success" : "btn btn-outline-success"} onClick={handleClickTask} id={props.row.id}>+ Driver</button> : DATA_DRIVERS[assign_task_to_driver[props.row.id]].name}
        </div>
    )
}

export default DriverCell;