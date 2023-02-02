import React from 'react'
import { usePagination } from '@table-library/react-table-library/pagination';
import DataAPI from '../DataAPI/DataAPI';
import { PostObj } from '../DataAPI/DataAPI';
import "./Pagination.css";



interface PostObjProps {
  postsPerPage: number;
  totalPosts: number;
  setCurrentPage: (value: number) => void;
  currentPage: number
}


const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage } : PostObjProps) => {
let pages = [];


for (let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
  pages.push(i)
}

  return (
    <div className = 'pagination'>
      {
        pages.map((page, index) => {
          return <button key={index} onClick={() => setCurrentPage(page)} className = {page == currentPage ? 'active' : '' }>{page}</button>
        })
      }
     </div>
  )
}

export default Pagination



