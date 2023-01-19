import { Material } from '../Material/Material';

export const MaterialList = ({ items, ...otherProps }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Material item={item} {...otherProps} />
        </li>
      ))}
    </ul>
  );
};

// в ...otherProps добавляем пропсы, которые этому елем не нужны а кидаем их глубже
// чтобы не было тавтологии onDelete={onDelete} onUpdate={onUpdate}
// TRANSIT PROPS транзитные пропсы
