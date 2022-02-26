import Storage from "@aws-amplify/storage";

export const storeToS3 = async (fileUri, key, onSuccess, onError) => {
  try {
    const response = await fetch(fileUri);
    const blob = await response.blob();
    const res = await Storage.put(key, blob);
    onSuccess && onSuccess(res);
  } catch (err) {
    console.log("Error uploading file to S3: ", err);
    onError && onError(err);
  }
};

export const getFromS3 = async (key, onSuccess, onError) => {
  try {
    const res = await Storage.get(key);
    onSuccess && onSuccess(res);
    return res;
  } catch (err) {
    console.log("Error downloading file from S3: ", err);
    onError && onError(err);
    return null;
  }
};
