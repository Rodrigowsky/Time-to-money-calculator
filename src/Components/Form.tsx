import React, { FC, useState } from "react";
import type { appValues } from "../App";

interface FormStateProps {
  appMode: appValues;
  handleChangeForm(event: React.ChangeEvent<HTMLInputElement>): void;
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
}

export const Form: FC<FormStateProps> = ({
  handleChangeForm,
  handleSubmit,
  appMode,
}) => {
  return (
    <>
      <div className="section">
        <div className="card-3d-wrapper">
          {appMode.basic ? (
            <form
              onSubmit={(e) => handleSubmit(e)}
            >
              <h4>Insert your Data</h4>
              <div className="form-group">
                <input
                  type="number"
                  name="salary"
                  className="form-style"
                  placeholder="Monthly Salary"
                  id="salary"
                  autoComplete="off"
                  onChange={(e) => handleChangeForm(e)}
                />
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="time"
                  className="form-style"
                  placeholder="Weekly Hours"
                  id="time"
                  autoComplete="off"
                  onChange={(e) => handleChangeForm(e)}
                />
                <i className="input-icon uil uil-lock-alt"></i>
              </div>
              <button className="btn">submit</button>
            </form>
          ) : (
            <form
              onSubmit={(e) => handleSubmit(e)}
            >
              <h4>Insert your Data</h4>
              <div className="form-group">
                <input
                  type="number"
                  name="salary"
                  className="form-style"
                  placeholder="Monthly Salary"
                  id="salary"
                  autoComplete="off"
                  onChange={(e) => handleChangeForm(e)}
                />
                <i className="input-icon uil uil-user"></i>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="time"
                  className="form-style"
                  placeholder="Weekly Hours"
                  id="time"
                  autoComplete="off"
                  onChange={(e) => handleChangeForm(e)}
                />
                <i className="input-icon uil uil-at"></i>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="food"
                  className="form-style"
                  placeholder="Daily Food Cost"
                  id="food"
                  autoComplete="off"
                  onChange={(e) => handleChangeForm(e)}
                />
                <i className="input-icon uil uil-lock-alt"></i>
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="transport"
                  className="form-style"
                  placeholder="Daily Car Expense"
                  id="transport"
                  autoComplete="off"
                  onChange={(e) => handleChangeForm(e)}
                />
                <i className="input-icon uil uil-lock-alt"></i>
              </div>
              <button className="btn">submit</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
