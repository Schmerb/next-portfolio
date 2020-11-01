/**
 *
 * useGetContentState
 *
 *  */

import { useEffect, useState } from 'react';

import {
  getAllProjects,
  getWorkFlow,
  getProjectsHeaders,
  getAboutMe,
} from 'utils/contentful/api';

export const useGetContentState = () => {
  const [error, setError] = useState(null);
  const [projectState, setProjectState] = useState<any>({
    personal: [],
    work: [],
    workFlow: { title: '', text: '', tools: [] },
    projectHeaders: {
      work: null,
      personal: null,
    },
    aboutMe: null,
  });

  useEffect(() => {
    (async () => {
      try {
        // fetch project data from CMS
        const projectsRes: any = await getAllProjects();
        const workflowRes: any = await getWorkFlow();
        const projectsHeadersRes: any = await getProjectsHeaders();
        const aboutMeRes: any = await getAboutMe();
        console.log({ aboutMeRes });
        // sort work/personal projects
        const projects: any = projectsRes.items.reduce(
          (acc, proj) => {
            if (proj.fields.isPersonalProject) {
              return {
                ...acc,
                personal: [...acc.personal, proj],
              };
            } else {
              return {
                ...acc,
                work: [...acc.work, proj],
              };
            }
          },
          { personal: [], work: [] },
        );
        // sort project section headers
        const projectHeaders: any = projectsHeadersRes.items.reduce(
          (acc, proj) => {
            console.log({ proj });
            if (proj.fields.title === 'Projects') {
              return {
                ...acc,
                personal: proj,
              };
            } else {
              return {
                ...acc,
                work: proj,
              };
            }
          },
          { personal: [], work: [] },
        );
        // set locally
        setProjectState({
          ...projects,
          projectHeaders,
          personal: projects.personal,
          work: projects.work,
          workFlow: workflowRes.items[0].fields,
          aboutMe: aboutMeRes.items[0].fields,
        });
      } catch (err) {
        console.error(err);
        setError(err);
      }
    })();
  }, []);

  return { projectState, error };
};

export default useGetContentState;
