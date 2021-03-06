import React from 'react';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import { MDXRenderer } from 'gatsby-mdx';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

export default function PostTemplate({ data: { mdx: post } }) {
  const { title, author } = post.frontmatter;

  return (
    <Layout>
      <h1>{title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        Posted by {author}
      </p>
      <p>Post body</p>
      <MDXRenderer>{post.code.body}</MDXRenderer>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  );
}
