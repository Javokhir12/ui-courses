import React from 'react';
import PropTypes from 'prop-types';
import { AccordionSet } from '@folio/stripes/components';
import VCAccordion from './VCAccordion';
import {
  ViewCourseData,
  ViewCourseCrosslistings,
  ViewCourseInstructors,
  ViewCourseTerm,
  ViewCourseReserves,
  ViewCourseDeveloper,
} from './sections';

class ViewCourse extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      course: PropTypes.object,
      crossListed: PropTypes.arrayOf(PropTypes.object),
      reserves: PropTypes.arrayOf(PropTypes.object),
      items: PropTypes.arrayOf(PropTypes.object),
    }),
  };

  render() {
    const { data } = this.props;
    const { course, crossListed, reserves, items } = data;

    return (
      <AccordionSet>
        <VCAccordion id="data">
          <ViewCourseData record={course} />
        </VCAccordion>
        <VCAccordion id="crosslistings">
          <ViewCourseCrosslistings crossListed={crossListed} />
        </VCAccordion>
        <VCAccordion id="instructors">
          <ViewCourseInstructors record={course} />
        </VCAccordion>
        <VCAccordion id="term">
          <ViewCourseTerm record={course} />
        </VCAccordion>
        <VCAccordion id="reserves">
          <ViewCourseReserves course={course} reserves={reserves} items={items} />
        </VCAccordion>
        <VCAccordion id="developer" closedByDefault>
          <ViewCourseDeveloper record={data} />
        </VCAccordion>
      </AccordionSet>
    );
  }
}

export default ViewCourse;
