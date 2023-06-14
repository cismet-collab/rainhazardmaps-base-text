const LIBVERSION = "%LIB_VERSION%";
const LIBHASH = "#%LIB_HASH%";

export const getLibVersion = () => {
  /*eslint-disable no-useless-concat*/
  if (LIBVERSION === "%LIB" + "_" + "VERSION%") {
    return "dev-hot-reload";
  } else {
    return LIBVERSION;
  }
};
export const getLibHash = () => {
  if (LIBHASH === "%LIB" + "_" + "HASH%") {
    return "#dev-hot-reload";
  } else {
    return LIBHASH;
  }
};
