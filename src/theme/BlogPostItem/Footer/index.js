import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

export default function FooterWrapper(props) {
  const {metadata, isBlogPostPage} = useBlogPost();

	
  return (
    <>
      <Footer {...props} />
	  {!isBlogPostPage && (<b><a href={metadata.permalink+'#giscom'}>查看或添加留言</a></b>)}

    </>
  );
}
