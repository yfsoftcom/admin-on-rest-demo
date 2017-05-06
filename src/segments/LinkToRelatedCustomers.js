import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { translate } from 'admin-on-rest';
import { stringify } from 'query-string';

import { UserIcon } from '../user';

const LinkToRelatedCustomers = ({ segment, translate }) => (
    <FlatButton
        primary
        label={translate('resources.segments.fields.customers')}
        icon={<UserIcon />}
        containerElement={<Link to={{
            pathname: "/customers",
            search: stringify({ filter: JSON.stringify({ groups: segment }) }),
        }} />}
    />
);

export default translate(LinkToRelatedCustomers);
