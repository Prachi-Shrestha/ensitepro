import React from 'react'
import { HomeworkCheckContext } from '../../Contexts/HomeworkCheckContext';
import { useContext } from 'react';

function Check(props) {
  const [qna] = useContext(HomeworkCheckContext)
  console.log(qna);
  return (
    <div>
     {qna ? 
        <>
          <h1>Question: {qna[0]}</h1>
          <h1>Answer: {qna[1]}</h1>
        </>
      :
      <h1>No Data</h1>
      }
    </div>
  )
}

export default Check