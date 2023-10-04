import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { CloudinaryContext, Image } from "cloudinary-react";

function Recordings() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const clientId =
    "865837653682-9pkgkhm7mv318v22val88oj7sb0kueoe.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    console.log("success:", res);
    setIsSignedIn(true);
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };

  const onLogout = () => {
    console.log("Logout made successfully");
    setIsSignedIn(false);
  };

  return (
    <div>
      {isSignedIn ? (
        <>
          <div>
            <CloudinaryContext cloudName="elastic">
              <div>
                <Image publicId="sample" width="50" />
              </div>
              <Image publicId="sample" width="0.5" />
            </CloudinaryContext>
          </div>
          <h2>You can only see this if you're logged in.</h2>
          <br />
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onLogout}
          ></GoogleLogout>
        </>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Access Recordings"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )}
    </div>
  );
}

export default Recordings;
