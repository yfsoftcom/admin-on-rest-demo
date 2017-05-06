import React from 'react';
import {
    translate,
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    Delete,
    Edit,
    Filter,
    FormTab,
    List,
    LongTextInput,
    NullableBooleanInput,
    NumberField,
    ReferenceManyField,
    TabbedForm,
    TextField,
    TextInput,
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/social/person';

import EditButton from '../buttons/EditButton';
// import NbItemsField from '../commands/NbItemsField';
// import ProductReferenceField from '../products/ProductReferenceField';
// import StarRatingField from '../reviews/StarRatingField';
import FullNameField from './FullNameField';
import SegmentsField from './SegmentsField';
import SegmentsInput from './SegmentsInput';

export const UserIcon = Icon;

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="pos.search" source="q:name,email,phone" alwaysOn />
        <DateInput source="createAt" />
        <NullableBooleanInput source="bindflag" />
        {/*<NullableBooleanInput source="has_newsletter" defaultValue={true} />*/}
        {/*<SegmentsInput />*/}
    </Filter>
);

const colored = WrappedComponent => props => props.record[props.source] > 500 ?
    <span style={{ color: 'red' }}><WrappedComponent {...props} /></span> :
    <WrappedComponent {...props} />;

const ColoredNumberField = colored(NumberField);
ColoredNumberField.defaultProps = NumberField.defaultProps;

export const UserList = (props) => (
    <List {...props} filters={<UserFilter />} sort={{ field: 'createAt', order: 'desc' }} perPage={25}>
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            {/*<FullNameField />*/}
            <TextField source="name" label="resources.users.fields.name"/>
            <TextField source="email" label="resources.users.fields.email"/>
            <TextField source="phone" label="resources.users.fields.phone"/>
            <DateField source="createAt" type="date" label="resources.users.fields.createAt"/>
            {/*<NumberField source="nb_commands" label="resources.customers.fields.commands" style={{ color: 'purple' }} />*/}
            {/*<ColoredNumberField source="total_spent" options={{ style: 'currency', currency: 'USD' }} />*/}
            {/*<DateField source="latest_purchase" showTime />*/}
            {/*<BooleanField source="has_newsletter" label="News." />*/}
            {/*<SegmentsField />*/}
            <EditButton />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => record ? <FullNameField record={record} size={32} /> : null;

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <TabbedForm>
            <FormTab label="resources.users.tabs.identity">
                <TextInput source="name" style={{ display: 'inline-block' }} />
                <TextInput source="phone" style={{ display: 'inline-block', marginLeft: 32 }} />
                <TextInput type="email" source="email" validation={{ email: true }} options={{ fullWidth: true }} style={{ width: 544 }} />
                <DateInput source="createAt" />
            </FormTab>
            {/*<FormTab label="resources.customers.tabs.address">
                <LongTextInput source="address" style={{ maxWidth: 544 }} />
                <TextInput source="zipcode" style={{ display: 'inline-block' }} />
                <TextInput source="city" style={{ display: 'inline-block', marginLeft: 32 }} />
            </FormTab>
            <FormTab label="resources.customers.tabs.orders">
                <ReferenceManyField addLabel={false} reference="commands" target="customer_id">
                    <Datagrid>
                        <DateField source="date" />
                        <TextField source="reference" />
                        <NbItemsField />
                        <NumberField source="total" options={{ style: 'currency', currency: 'USD' }} />
                        <TextField source="status" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="resources.customers.tabs.reviews">
                <ReferenceManyField addLabel={false} reference="reviews" target="customer_id">
                    <Datagrid filter={{ status: 'approved' }}>
                        <DateField source="date" />
                        <ProductReferenceField />
                        <StarRatingField />
                        <TextField source="comment" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                        <EditButton style={{ padding: 0 }} />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="resources.customers.tabs.stats">
                <SegmentsField />
                <NullableBooleanInput source="has_newsletter" />
                <DateField source="first_seen" style={{ width: 128, display: 'inline-block' }} />
                <DateField source="latest_purchase" style={{ width: 128, display: 'inline-block' }} />
                <DateField source="last_seen" style={{ width: 128, display: 'inline-block' }} />
            </FormTab>*/}
        </TabbedForm>
    </Edit>
);

const UserDeleteTitle = translate(({ record, translate }) => <span>
    {translate('resources.customers.page.delete')}&nbsp;
    {record && <img src={`${record.avatar}?size=25x25`} width="25" role="presentation" />}
    {record && `${record.first_name} ${record.last_name}`}
</span>);

export const UserDelete = (props) => <Delete {...props} title={<UserDeleteTitle />} />;
