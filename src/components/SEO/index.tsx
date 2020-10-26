/**
 *
 * Seo
 *
 */

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
// import styled from 'styled-components';

import usePrevious from 'utils/hooks/usePrevious';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

const defaultMeta: any = (_title: string) => [
  {
    property: 'og:title',
    content: _title, // title,
  },
  {
    property: 'og:image',
    content: '', // https://cdn.talnt.sh/global/talnt-logo.jpg
  },
  {
    property: 'og:description',
    content: description, // metaDescription
  },
  {
    property: 'og:type',
    content: 'website',
  },
  {
    name: 'twitter:card',
    content: description,
  },
  {
    name: 'twitter:title',
    content: _title, // title,
  },
  {
    name: 'twitter:description',
    content: description, // metaDescription,
  },
];

const SEO = ({ pathname = '', title = 'Title | 2020' }: SEOProps) => {
  const [meta, setMetaTags] = useState<[any]>(() => defaultMeta(title));

  const prevPathname = usePrevious(pathname);

  useEffect(() => {
    if (prevPathname && pathname !== prevPathname) {
      setMetaTags(defaultMeta(title));
    } else {
      setMetaTags(defaultMeta());
    }
  }, [pathname]);

  return (
    <Head>
      <title>{title}</title>
      {meta.map(({ property, content }) => (
        <meta key={property} property={property} content={content} />
      ))}
    </Head>
  );
};

export interface SEOProps {
  pathname?: string;
  title?: string;
}

export default SEO;

// const Meta = styled.meta``;
