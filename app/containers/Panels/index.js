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
        <title>Panels Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <H1 />
      <List>
        <ListItem>
          <ListItemTitle>
            <H2>Panels</H2>
          </ListItemTitle>
          <p>
            <div className="card">
              <div className="card-divider">
              This is a header
              </div>
              <img src="/app/containers/images/rectangle-1.jpg"></img>
              <div className="card-section">
                <h4>This is a card.</h4>
                <p>It has an easy to override visual style, and is appropriately subdued.</p>
              </div>
              </div>
            </div>
          </p>
        </ListItem>
      </List>
    </div>
  );
}
