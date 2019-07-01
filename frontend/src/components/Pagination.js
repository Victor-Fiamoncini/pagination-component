// React:
import React from 'react';

// Others:
import { Pagination as Page, PaginationItem, PaginationLink } from 'reactstrap';

// Pagination:
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) pageNumbers.push(i);
  
  return (
    <nav>
      <Page className="mt-2">
        {pageNumbers.map(pageNumber => (
          <PaginationItem key={pageNumber}>
            <PaginationLink href="!#" onClick={() => paginate(pageNumber)}>
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
      </Page>
    </nav>
  );
}

// Exporting Pagination:
export default Pagination;