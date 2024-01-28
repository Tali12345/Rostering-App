import React from 'react';
import { useDispatch } from "react-redux";
import { reset } from "../redux/features/rosteringSlice";


export function Reset() {

  const dispatch = useDispatch();

  function handleClickReset() {
    dispatch(reset());
  }

  return (

    <button type="button" className="btn btn-light" onClick={handleClickReset}>Reset</button>
  )
}