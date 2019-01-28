import React from 'react';
import TileComponent from './TileComponent';

const ListComponent = ({ contents, deleteContent }) => {
///onClick={() => deleteContent(content._id)}
  return (
    <ul>
      {
        contents &&
          contents.length > 0 ?
            (
              contents.map(content => {
                return(
                  <li key={content._id} > 
                    <TileComponent titleProp= {content.title} dateProp = {content.dateStamp} bodyProp={content.body} imagesProp = {content.images}/> 
                  </li>
                )
              })
            )
            :

            (
              <li>No todo(s) left</li>
            )
      }
    </ul>
  )
}

export default ListComponent