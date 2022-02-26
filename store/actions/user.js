import Auth from "@aws-amplify/auth";

import { getFromS3 } from "../../commonFunctions/S3Functions";
import DEFAULT_IMAGES from "../../CONSTANTS/DEFAULT_IMAGES";

export const SET_USER_ATTRIBUTES = "SET_USER_ATTRIBUTES";

//********** User actions **********//

const setUser = (data) => {
  return { type: SET_USER_ATTRIBUTES, data: data };
};

export const refreshUser = (onSuccess, onError) => (dispatch, getState) => {
  Auth.currentAuthenticatedUser({
    bypassCache: true, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
    .then((user) => {
      let userObject = {
        raw: user,
        id: user.attributes.sub ? user.attributes.sub : null,
        email: user.attributes.email ? user.attributes.email : null,
        name: user.attributes["custom:name"]
          ? user.attributes["custom:name"]
          : null,
        country: user.attributes["custom:country"]
          ? user.attributes["custom:country"]
          : null,
        birthday: user.attributes["custom:birthday"]
          ? user.attributes["custom:birthday"]
          : null,
        profilePicture: null,
      };
      if (user.attributes["custom:profilePicture"]) {
        getFromS3(
          user.attributes["custom:profilePicture"],
          (res) => {
            userObject.profilePicture = { uri: res };
            dispatch(setUser(userObject));
            onSuccess && onSuccess(userObject);
          },
          (err) => {
            userObject.profilePicture = DEFAULT_IMAGES.PROFILE_PICTURE;
            dispatch(setUser(userObject));
            onSuccess && onSuccess(userObject);
          }
        );
      } else {
        userObject.profilePicture = DEFAULT_IMAGES.PROFILE_PICTURE;
        dispatch(setUser(userObject));
        onSuccess && onSuccess(userObject);
      }
    })
    .catch((err) => {
      console.log("Error refreshing user: " + err);
      onError && onError(err);
    });
  return null;
};
