/**
 *
 * Contentful SDK API
 *
 * */

const contentful = require('contentful');

const SPACE_ID = '41h6gbd4xf7d';
const CONTENT_DELIVERY_ACCESS_TOKEN =
  'L9C-kMf96wP2jFBgN3_qbgkP-r2gZo5uq2A59Ezqi50';
const CONTENT_PREVIEW_ACCESS_TOKEN =
  '0iM7LTN-l6kumnlWNrLqqzhCA6IoVQzsNf-LdkP5Epo';

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: CONTENT_DELIVERY_ACCESS_TOKEN,
});

export const getContentTypes = () =>
  new Promise((resolve, reject) => {
    client
      .getContentTypes()
      .then((response) => {
        // console.log(response.items);
        resolve(response.items);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });

export const getAllProjects = () =>
  new Promise((resolve, reject) => {
    client
      .getEntries({ content_type: 'project' })
      .then((response) => {
        // console.log(response);
        resolve(response);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });

export const getWorkFlow = () =>
  new Promise((resolve, reject) => {
    client
      .getEntries({ content_type: 'workFlow' })
      .then((response) => {
        // console.log(response);
        resolve(response);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });

export const getAboutMe = () =>
  new Promise((resolve, reject) => {
    client
      .getEntries({ content_type: 'aboutMe' })
      .then((response) => {
        // console.log(response);
        resolve(response);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });

export const getProjectsHeaders = () =>
  new Promise((resolve, reject) => {
    client
      .getEntries({ content_type: 'projectsHeader' })
      .then((response) => {
        // console.log(response);
        resolve(response);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });

// export const getAllWorkProjects = () =>
//   new Promise((resolve, reject) => {
//     client
//       .getEntries({ content_type: 'project', isPersonalProject: false })
//       .then((response) => {
// console.log(response);
//         resolve(response);
//       })
//       .catch((err) => {
//         console.error(err);
//         reject(err);
//       });
//   });
// export const getAllPersonalProjects = () =>
//   new Promise((resolve, reject) => {
//     client
//       .getEntries({ content_type: 'project', isPersonalProject: true })
//       .then((response) => {
// console.log(response);
//         resolve(response);
//       })
//       .catch((err) => {
//         console.error(err);
//         reject(err);
//       });
//   });

export const getEntry = (id: string) =>
  new Promise((resolve, reject) => {
    client
      .getEntry(id)
      .then((response) => {
        // console.log(response);
        resolve(response);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
