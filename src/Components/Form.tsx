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
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                {appMode.basic ? (
                  <div className="card-front">
                    <div className="center-wrap">
                      <form
                        className="section text-center"
                        onSubmit={(e) => handleSubmit(e)}
                      >
                        <h4 className="mb-4 pb-3">Log In</h4>
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
                        <div className="form-group mt-2">
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
                        <button className="btn mt-4">submit</button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <div className="card-back">
                    <div className="center-wrap">
                      <form
                        className="section text-center"
                        onSubmit={(e) => handleSubmit(e)}
                      >
                        <h4 className="mb-4 pb-3">Sign Up</h4>
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
                        <div className="form-group mt-2">
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
                        <div className="form-group mt-2">
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
                        <div className="form-group mt-2">
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
                        <button className="btn mt-4">submit</button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
