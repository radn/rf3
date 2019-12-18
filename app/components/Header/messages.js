/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  datatable: {
    id: `${scope}.datatable`,
    defaultMessage: 'Datatable',
  },
  panels: {
    id: `${scope}.panels`,
    defaultMessage: 'Panels',
  },
  buttons: {
    id: `${scope}.buttons`,
    defaultMessage: 'Buttons',
  },
  notFound: {
    id: `${scope}.notFound`,
    defaultMessage: 'notFound',
  },
});
