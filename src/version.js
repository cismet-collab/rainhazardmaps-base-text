const LIBVERSION = "%LIB_VERSION%";
const LIBHASH = "#%LIB_HASH%";
const LIBGITDESCRIBE = "%LIB_DESCRIBE%";

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

export const isDirty = () => {
  if (LIBGITDESCRIBE === "%LIB" + "_" + "DESCRIBE%") {
    return true;
  } else if (LIBGITDESCRIBE !== LIBVERSION) {
    return true;
  } else {
    return false;
  }
};

export const getLibDescribe = () => {
  if (LIBGITDESCRIBE === "%LIB" + "_" + "DESCRIBE%") {
    return "dev-hot-reload";
  } else {
    return LIBGITDESCRIBE;
  }
};
