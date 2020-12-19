import { useState } from "react";
import UpdatesItem from './UpdatesItem/UpdatesItem';

function UpdatesList() {
  const [updates, setUpdates] = useState([
    {
      id: "001",
      title: "Water shortage updates",
      description: "Description detailing water shortage", 
      isReaded: false
    },
    {
      id: "002",
      title: "Unsafe Area update",
      description: "Description detailing unsafe area", 
      isReaded: false
    },
    {
      id: "003",
      title: "New content update",
      description: "Description detailing the update", 
      isReaded: false
    }
  ]);

  const markAsRead = id => {
    const newUpdates = [...updates];
    newUpdates.find(update => update.id === id).isReaded = true;
    setUpdates(newUpdates);
  }
  
  const unreadUpdates = updates.filter(update => !update.isReaded);


    return (
      <ul className="updates-list">
					{unreadUpdates.map(update => 
						<UpdatesItem 
								key={update.id}
								id={update.id}
								title={update.title}
                description={update.description}
                markAsRead={markAsRead}
						/>
					)}
			</ul>
    )
}

export default UpdatesList;
   

