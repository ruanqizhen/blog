import React from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import Giscus from '@giscus/react';
import {useColorMode} from '@docusaurus/theme-common';

export default function BlogPostPaginatorWrapper(props) {
  const {colorMode} = useColorMode();
  const theme = colorMode === 'dark' ? 'dark' : 'light';
  
  return (
    <>
      <BlogPostPaginator {...props} />
	  <br />
	  <Giscus
		repo='ruanqizhen/blog'
		repoId='R_kgDONgfJkA'
		category='Announcements'
		categoryId='DIC_kwDONgfJkM4ClbHX'
		mapping='pathname'
		strict='0'
		reactionsEnabled='1'
		emitMetadata='1'
		inputPosition='top'
		theme={theme}
		lang='zh-CN'
        loading="lazy"
	  />
    </>
  );
}
