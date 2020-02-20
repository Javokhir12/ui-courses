import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { FormattedMessage } from 'react-intl';
import { Field } from 'react-final-form';
import { Headline, Col, Row, Select, Datepicker } from '@folio/stripes/components';

const ReserveFormInfo = (props) => {
  const { data } = props;

  return (
    <div data-test-reserve-info id="courseFormInfo">
      <Headline><i>{get(data, 'reserve.copiedItem.title')}</i></Headline>
      <Row>
        <Col xs={6}>
          <Field
            component={Select}
            dataOptions={data.loanTypes}
            id="edit-reserve-temporary-loan-type"
            label={<FormattedMessage id="ui-courses.field.temporaryLoanType" />}
            name="temporaryLoanTypeId"
          />
        </Col>
        <Col xs={6}>
          <Field
            component={Select}
            dataOptions={data.processingStatuses}
            id="edit-reserve-processing-status"
            label={<FormattedMessage id="ui-courses.field.processingStatus" />}
            name="processingStatusId"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <FormattedMessage id="ui-courses.headings.startDate">
            {placeholder => (
              <Field
                id="edit-reserve-start-date"
                name="startDate"
                dateFormat="YYYY-MM-DD"
                backendDateStandard="YYYY-MM-DD"
                label={placeholder}
                component={Datepicker}
              />
            )}
          </FormattedMessage>
        </Col>
        <Col xs={6}>
          <FormattedMessage id="ui-courses.headings.endDate">
            {placeholder => (
              <Field
                id="edit-reserve-end-date"
                name="endDate"
                dateFormat="YYYY-MM-DD"
                backendDateStandard="YYYY-MM-DD"
                label={placeholder}
                component={Datepicker}
              />
            )}
          </FormattedMessage>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          XXX To do:
          <tt>copyrightTracking</tt>
        </Col>
      </Row>
      <p />
      <hr />
      <h1>Developer Info</h1>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};


ReserveFormInfo.propTypes = {
  data: PropTypes.shape({
    loanTypes: PropTypes.array.isRequired,
    processingStatuses: PropTypes.array.isRequired,
    reserve: PropTypes.shape({
      copiedItem: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,
};

export default ReserveFormInfo;
