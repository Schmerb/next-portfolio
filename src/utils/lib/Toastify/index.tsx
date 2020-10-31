/**
 *
 * Toastify
 *
 */

import { toast } from 'react-toastify';

// TODO: Add support for optional options prop

export const toastSuccess = (msg: string, opts = {}) =>
  toast(msg, {
    type: toast.TYPE.SUCCESS,
    ...opts,
  });

export const toastInfo = (msg: string, opts = {}) =>
  toast(msg, {
    type: toast.TYPE.INFO,
    ...opts,
  });

export const toastError = (msg: string, opts = {}) =>
  toast(msg, {
    type: toast.TYPE.ERROR,
    ...opts,
  });

export const toastWarning = (msg: string, opts = {}) =>
  toast(msg, {
    type: toast.TYPE.WARNING,
    ...opts,
  });

export const toastUpdateSuccess = (toastId: string, msg: string, opts = {}) =>
  toast.update(toastId, {
    render: msg,
    type: toast.TYPE.SUCCESS,
    ...opts,
  });
export const toastUpdateInfo = (toastId: string, msg: string, opts = {}) =>
  toast.update(toastId, {
    render: msg,
    type: toast.TYPE.INFO,
    ...opts,
  });
export const toastUpdateError = (toastId: string, msg: string, opts = {}) =>
  toast.update(toastId, {
    render: msg,
    type: toast.TYPE.ERROR,
    ...opts,
  });
export const toastUpdateWarning = (toastId: string, msg: string, opts = {}) =>
  toast.update(toastId, {
    render: msg,
    type: toast.TYPE.WARNING,
    ...opts,
  });

/**
 * Needs work --> not the best animation lol
 *
 * @param {*} toastId
 */
export const progressControl = (toastId: string) => {
  let progress = 1;
  setInterval(() => {
    if (progress <= 0) {
      progress = 1;
    }
    toast.update(toastId, {
      progress: progress -= 0.01,
    });
  }, 30);
};
