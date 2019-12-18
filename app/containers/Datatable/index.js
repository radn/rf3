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
        <title>Datatable Page</title>
        <meta
          name="description"
          content="datatable page of React.js Boilerplate application"
        />
      </Helmet>
      <H1 />
      <List>
        <ListItem>
          <ListItemTitle>
            <H2>Datatable</H2>
          </ListItemTitle>
          

                                
<table type="button" 
className="table table-striped table-bordered dataTable" 
role="grid" 
aria-label="example_info">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">First</th>
<th scope="col">Last</th>
<th scope="col">Handle</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr>
<tr>
<th scope="row">2</th>
<td>Jacob</td>
<td>Thornton</td>
<td>@fat</td>
</tr>
<tr>
<th scope="row">3</th>
<td>Larry</td>
<td>the Bird</td>
<td>@twitter</td>
</tr>
</tbody>
</table>
                                 

        </ListItem>
      </List>
    </div>
  );
}
