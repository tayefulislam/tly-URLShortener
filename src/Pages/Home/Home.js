import React from "react";

const Home = () => {
  const handleUrlShort = () => {};
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="card w-96">
          <h1 className="text-center text-2xl font-bold">
            Tly - URL Shortener
          </h1>

          <div className="card-body">
            <form onSubmit={handleUrlShort}>
              <div className="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Input a link :</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Input a link"
                  name="patient"
                  class="input input-bordered input-error w-full max-w-xs"
                />
                <label className="label"></label>
              </div>

              <div className="flex justify-center items-center">
                <input className="btn" type="submit" value="Short URL" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
//https://codefrontend.com/reactjs-redirect-to-url/
