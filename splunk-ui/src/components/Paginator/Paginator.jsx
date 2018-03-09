import React from 'react';
import PropTypes from 'prop-types';
import { invariant } from 'splunk-ui/util/errorHandling';
import { _ } from 'splunk-ui/util/i18n';
import { createTestHook } from 'splunk-ui/util/testSupport';
import Box from 'splunk-ui/components/Box';
import ChevronLeft from 'splunk-ui/icons/ChevronLeft';
import ChevronRight from 'splunk-ui/icons/ChevronRight';
import PaginatorButton from './PaginatorButton';

const propTypes = {
    /** Currently selected page */
    current: PropTypes.number.isRequired,
    /** Display a link to the last page in a collection */
    alwaysShowLastPageLink: PropTypes.bool,
    /**
     * Number of pages to display. If greater than `totalPages`, `totalPages` will be used instead.
     */
    numPageLinks: PropTypes.number,
    /** Callback to handle page change */
    onChange: PropTypes.func,
    /** Total number of pages in collection. This can change as collection populates. */
    totalPages: PropTypes.number.isRequired,
};

const defaultProps = {
    current: 1,
    alwaysShowLastPageLink: false,
    numPageLinks: 9,
};

function Paginator(props) {
    const {
        onChange,
        current,
        alwaysShowLastPageLink,
        numPageLinks,
        totalPages,
        ...otherProps
    } = props;

    // Can't show more links than total number of pages.
    const numLinks = Math.min(numPageLinks, totalPages);

    const loMid = Math.ceil(numLinks / 2);
    const hiMid = Math.ceil(totalPages - (numLinks / 2));

    const pages = [];
    if (totalPages <= 1) {
        return null;
    }
    if ((current > totalPages || current < 1) && __DEV__) {
        invariant('Error in Paginator: CurrentPage is out of bounds');
    }
    let firstPage;
    let lastPage;
    if (current <= loMid) {
        firstPage = 1;
        lastPage = (firstPage + Math.min(totalPages, numLinks)) - 1;
    } else if (current > loMid && current < hiMid) {
        lastPage = Math.ceil(current + ((numLinks - 1) / 2));
        firstPage = (lastPage - numLinks) + 2;
    } else if (current >= hiMid) {
        firstPage = (totalPages - numLinks) + 1;
        lastPage = totalPages;
    }

    pages.push(
        <PaginatorButton
            disabled={current === 1}
            label={_('Prev')}
            icon={<ChevronLeft screenReaderText={null} />}
            onClick={onChange}
            page={current - 1}
            key="prev"
        />,
    );

    if (current > loMid && totalPages > numLinks) {
        pages.push(
            <PaginatorButton
                label="1"
                key="first"
                onClick={onChange}
                page={1}
            />,
        );
        pages.push(
            <PaginatorButton
                label="..."
                disabled
                key="prevEllipsis"
            />,
        );
    }

    for (let i = firstPage; i <= lastPage; i += 1) {
        pages.push(
            <PaginatorButton
                label={String(i)}
                selected={i === current}
                onClick={onChange}
                page={i}
                key={i}
            />,
        );
    }

    if (current < hiMid && totalPages > numLinks) {
        pages.push(
            <PaginatorButton
                label="..."
                disabled
                key="nextEllipsis"
            />,
        );
        if (alwaysShowLastPageLink) {
            pages.push(
                <PaginatorButton
                    label={String(totalPages)}
                    key="last"
                    onClick={onChange}
                    page={totalPages}
                />,
            );
        }
    }

    pages.push(
        <PaginatorButton
            disabled={current === totalPages}
            label={_('Next')}
            onClick={onChange}
            page={current + 1}
            key="next"
        >
            <ChevronRight screenReaderText={null} />
        </PaginatorButton>,
    );
    return (
        <Box flex inline {...createTestHook(__filename)} {...otherProps}>
            { pages }
        </Box>
    );
}

Paginator.propTypes = propTypes;
Paginator.defaultProps = defaultProps;
export default Paginator;
