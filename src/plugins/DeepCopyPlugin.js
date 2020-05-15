const deepCopy = data => {
  if (Array.isArray(data)) {
    return data.slice().map(value => deepCopy(value));
  }

  if (typeof data === 'object' && data !== null) {
    return Object.keys(data).reduce((acc, key) => {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        acc[key] = deepCopy(data[key]);
      }

      return acc;
    }, {});
  }

  return data;
};

export default {
  install(Vue) {
    Vue.prototype.$deepCopy = deepCopy;
  },
};

export { deepCopy };
