export const FREE_TRIAL_ICON = "FREE_TRIAL_ICON";
export const PACKAGE = "PACKAGE";

export const setFreeTrialIcon = (data) => {
  return { type: FREE_TRIAL_ICON, data: data };
};

export const setPackage = (data) => {
  console.log(data);
  return { type: PACKAGE, data: data };
};
