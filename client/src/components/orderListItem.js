import React from 'react';
import { Button } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const OrderListItem = props => {
  return (
    <tr>
      <td>{props.number}</td>
      <td>{props.customer}</td>
      <td>{props.date}</td>
      <td>{props.payment}</td>
      <td>{props.status}</td>
      <td>
        <Button color="link">
          <FormattedMessage id="sys.view" />
        </Button>
      </td>
    </tr>
  );
};

export default OrderListItem;
