import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { assignDriver } from "../redux/features/rosteringSlice";


function Actions(props) {

  const driver_id = useSelector((state) => state.rostering.value.driver_id);

  const dispatch = useDispatch();

  function handleClickDriver(event) {
    var { id } = event.target;
    dispatch(assignDriver(id));
  }

  return (
    <button type="button" className={driver_id === props.row.id ? "btn btn btn-primary" : "btn btn-outline-primary"} id={props.row.id} onClick={handleClickDriver}></button>
  )
}

export default Actions;