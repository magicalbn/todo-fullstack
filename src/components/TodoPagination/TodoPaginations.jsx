import React from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

const TodoPaginations = ({ totalPages, currentPage, changePageHandler }) => {
    return (
        <Pagination className="justify-end mt-5 mb-10">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        className="cursor-pointer"
                        onClick={() => changePageHandler(false)}
                    />
                </PaginationItem>
                <PaginationItem className="mx-5">
                    <PaginationLink>
                        Page: {currentPage} of {totalPages}
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationNext
                        className="cursor-pointer"
                        onClick={() => changePageHandler(true)}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default TodoPaginations;
