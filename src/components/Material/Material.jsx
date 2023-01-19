// import { Component } from 'react';

// const EditMaterialModal = () => {
//   return (
//     <div>
//       <button type="button">Вот теперь точно редактировать</button>
//       <button>Close</button>
//     </div>
//   );
// };

export const Material = ({ item, onDelete, onUpdate }) => {
  return (
    <div>
      <p>
        <b>Title: </b> {item.title}
      </p>
      <p>
        <b>Link: </b>
        {item.link}
      </p>
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete{' '}
      </button>

      <button
        type="button"
        onClick={() => onUpdate({ id: item.id, title: Date.now() })} // тут кнопка но по правильному вызываем модалку для редактирования статьи
      >
        Edit
      </button>
      {/* <EditMaterialModal /> */}
    </div>
  );
};
