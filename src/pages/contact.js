import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/Layout"
import SEO from '../components/SEO'

export default () => (
  <Layout>
    <SEO
      title = "Contact"
      keywords = {
        [`Colin Smith`, `Colin`, `Smith`, `colin`, `smith`, `boston`, `new hampshire`, `email`]
      }
    />
    <h1> I 'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
  </Layout>
);
