import React, { FC, useState, useEffect } from "react";
import { setConstantValue } from "typescript";
import appValues from "../App"

interface AppStateProps {
  handleChange(): void;
}




export const Toogle: FC<AppStateProps> = ({handleChange}) => {

  return (
    <>
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Basic </span>
                  <span>Extended</span>
                </h6>
                <input onClick={() => handleChange()}
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
              </div>
            
    </>
  );
};
