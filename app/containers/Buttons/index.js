/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import '../../../style/foundation.6.6.0.min.css';
import '../../../style/main.css';

import H1 from 'components/H1';
import H2 from 'components/H2';

import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Buttons Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1 />
      <List>
        <ListItem>
          <ListItemTitle>
            <H2>Buttons</H2>
          </ListItemTitle>
          <p>
            <a href="about.html" className="button">
              Learn More
            </a>
            <a href="#features" className="button">
              View All Features
            </a>

            <button type="button" className="success button">
              Save
            </button>
            <button type="button" className="alert button">
              Delete
            </button>
          </p>
          <a className="button tiny" href="#">
            So Tiny
          </a>
          <a className="button small" href="#">
            So Small
          </a>
          <a className="button" href="#">
            So Basic
          </a>
          <a className="button large" href="#">
            So Large
          </a>
          <a className="button expanded" href="#">
            Such Expand
          </a>
          <a className="button small expanded" href="#">
            Wow, Small Expand
          </a>
        </ListItem>
      </List>
    </div>
  );
}
