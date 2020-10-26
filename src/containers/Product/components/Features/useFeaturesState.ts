/**
 *
 * useFeaturesState
 *
 *  */

import { useState, useEffect } from 'react';

// Product Page
import Explore from 'components/svg/Icons/Explore';
import Inventory from 'components/svg/Icons/Inventory';
import Quantify from 'components/svg/Icons/Quantify';
import Insight from 'components/svg/Icons/Insight';
import Act from 'components/svg/Icons/Act';

const useFeaturesState = ({}) => {
  const [content, setContent] = useState({
    title: 'key features',
    items: [
      {
        title: 'explore',
        Icon: Explore,
        firstText:
          'Reveles automatically discovers and locates your data to identify risks. A standard universal connection framework makes it easy to analyze both structured & unstructured data',
        secondText:
          'Reveles enables you to explore vast amounts of data in minutes. The algorithm works through data faster than a team of data analysts and with no loss of accuracy',
      },
      {
        title: 'inventory',
        Icon: Inventory,
        firstText:
          'Reveles automatically audits and classifies all data in the ecosystem, highlighting the greatest risks',
        secondText:
          'This helps to reduce unnecessary costs of storing redundant data and ensures regulatory compliance',
      },
      {
        title: 'quantify',
        Icon: Quantify,
        firstText:
          'Quantify the financial exposure and risk of the data you hold',
        secondText:
          'Attribute a value to each and every data asset, so that you can model the cost and benefit',
      },
      {
        title: 'insight',
        Icon: Insight,
        firstText:
          'Your data is now clearly presented to facilitate the identification of risk. From here, you can prioritize and decide appropriate actions to derisk your ecosystem',
        secondText:
          "Now that all of your data is fully visible, it's easier to make more informed decisions",
      },
      {
        title: 'act',
        Icon: Act,
        firstText:
          'Reveles helps you to act upon and resolve the data issues identified. The platform is connected to your data environments, so can send out instruction to secure, remove and remedy data risks',
        secondText:
          'Remediation promotes regulatory adherence, reduction of risk,  and the appropriate treatment of sensitive data',
      },
    ],
  });
  // currently toggled feature
  const [activeFeature, setActiveFeature] = useState(null);
  useEffect(() => {
    setActiveFeature(content.items[0]);
  }, []);
  // return all state values
  return { content, setContent, activeFeature, setActiveFeature };
};

export default useFeaturesState;
