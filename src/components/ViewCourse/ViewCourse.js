import React from 'react';
import PropTypes from 'prop-types';
import { AccordionSet } from '@folio/stripes/components';
import VCAccordion from './VCAccordion';
import {
  ViewCourseData,
  ViewCourseCrosslistings,
  ViewCourseInstructors,
  ViewCourseTerm,
  ViewCourseOrganization,
  ViewCourseDeveloper,
} from './sections';

class ViewCourse extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      course: PropTypes.object,
      crossListed: PropTypes.arrayOf(PropTypes.object),
    }),
  };

  render() {
    const { data } = this.props;
    const record = data.course;

    return (
      <AccordionSet>
        <VCAccordion id="data">
          <ViewCourseData record={record} />
        </VCAccordion>
        <VCAccordion id="crosslistings">
          <ViewCourseCrosslistings crossListed={data.crossListed} />
        </VCAccordion>
        <VCAccordion id="instructors">
          <ViewCourseInstructors record={record} />
        </VCAccordion>
        <VCAccordion id="term">
          <ViewCourseTerm record={record} />
        </VCAccordion>
        <VCAccordion id="organization">
          <ViewCourseOrganization record={record} />
        </VCAccordion>
        <VCAccordion id="developer" closedByDefault>
          <ViewCourseDeveloper record={record} />
        </VCAccordion>
      </AccordionSet>
    );
  }
}

export default ViewCourse;
