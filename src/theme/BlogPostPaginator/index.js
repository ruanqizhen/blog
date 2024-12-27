import React from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import Giscus from '@giscus/react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function BlogPostPaginatorWrapper(props) {
  let theme = 'light';
  if (ExecutionEnvironment.canUseDOM) {
    theme = document.documentElement.getAttribute('data-theme');
    if (theme !== "dark") theme = 'light';
  }
  
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
