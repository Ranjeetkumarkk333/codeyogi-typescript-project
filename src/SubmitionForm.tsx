import React from 'react';

const SubmitionForm = (props) => {
  return (
    <div className="fixed inset-0 z-10 ">
      <div className="flex items-center self-center justify-center w-full h-screen text-center min-h-screen justify-items-center px-4 pt-4 pb-20 sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 transition-opacity bg-opacity-75">
          <span className=" inline-block align-middle h-screen" />
          <div className="inline-block w-full max-w-2xl overflow-visible transition-all text-left align-middle transform bg-white rounded-lg shadow-xl undefined">
            <div>
              <form className="bg-white p-4 rounded-md z-10">
                <hr />
                <div className="sm:flex sm:my-6 sm:items-center">
                  <h1 className="text-gray-500 my-4 sm:mr-32">
                    Submition Link{' '}
                  </h1>
                  <div className="grow">
                    <input
                      onBlur={props.onBlur}
                      value={props.value}
                      onChange={props.onChange}
                      placeholder="Submition Link"
                      type="text"
                      required
                      className="rounded-md w-full"
                    />
                    <div className="h-5">
                      {props.touched && !props.urlValid && <div className="text-red-500">{props.urlError}</div>}
                    </div>
                  </div>
                </div>
                <hr className="hidden sm:block" />

                <button
                  onClick={props.onClick}
                  type="button"
                  disabled={!props.urlValid}
                  className="mt-6 bg-blue-500 border rounded-md px-4 py-2 w-32 text-white  disabled:bg-gray-500 mr-2"
                >
                  Submit
								</button>
                <button
                  onClick={props.closePopup}
                  type="button"

                  className="mt-6  border rounded-md px-4 py-2 w-32 "
                >
                  Cancel
								</button>
              </form>
            </div>
          </div>{' '}
        </div>{' '}
      </div>
    </div>
  );
};
export default SubmitionForm;
