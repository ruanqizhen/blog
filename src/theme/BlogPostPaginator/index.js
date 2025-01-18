import React from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import Giscus from '@giscus/react';
import {useColorMode} from '@docusaurus/theme-common';

export default function BlogPostPaginatorWrapper(props) {
  const {colorMode} = useColorMode();
  
  return (
    <>
      <BlogPostPaginator {...props} />
	  <div id="giscom"><br /></div>
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
		theme={colorMode}
		lang='zh-CN'
        loading="lazy"
	  />
    </>
  );
}
