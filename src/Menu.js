import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import MenuItem from 'material-ui/MenuItem';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import LabelIcon from 'material-ui/svg-icons/action/label';
import { translate, DashboardMenuItem } from 'admin-on-rest';

import { UserIcon } from './users';
import { ProductIcon } from './products';
import { CategoryIcon } from './categories';

const items = [

    // { name: 'commands', icon: <CommandIcon /> },
    { name: 'users', icon: <UserIcon /> },
    { name: 'products', icon: <ProductIcon /> },
    { name: 'categories', icon: <CategoryIcon /> },
    // { name: 'reviews', icon: <ReviewIcon /> },
];

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

const Menu = ({ onMenuTap, translate, logout }) => (
    <div style={styles.main}>
        { /*仪表板*/ }
        <DashboardMenuItem onTouchTap={onMenuTap} />

        {items.map(item => (
            <MenuItem
                key={item.name}
                containerElement={<Link to={`/${item.name}`} />}
                primaryText={translate(`resources.${item.name}.name`, { smart_count: 2 })}
                leftIcon={item.icon}
                onTouchTap={onMenuTap}
            />
        ))}
        { /*设置*/ }
        {/*<MenuItem
            containerElement={<Link to="/configuration" />}
            primaryText={translate('pos.configuration')}
            leftIcon={<SettingsIcon />}
            onTouchTap={onMenuTap}
        />*/}
        {logout}
    </div>
);

const enhance = compose(
    connect(state => ({
        theme: state.theme,
        locale: state.locale,
    })),
    translate,
);

export default enhance(Menu);
