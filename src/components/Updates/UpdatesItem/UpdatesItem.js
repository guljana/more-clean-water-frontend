import './UpdatesItem.css';

function UpdatesItem({title, description}) {
  return (
    <div className="update">
        <h2 class="update__title">
            {title}
        </h2>

        <p class="update__description">
            {description}
        </p>
    </div>
  )
}

export default UpdatesItem;
   