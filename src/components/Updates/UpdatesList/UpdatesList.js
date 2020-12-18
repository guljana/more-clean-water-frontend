import UpdatesItem from './UpdatesItem/UpdatesItem';

function UpdatesList({updates}) {
    let updatesList = [];

    updates.forEach((update) => {
    updatesList.push (
				<UpdatesItem 
						title={update.title}
						description={update.description} 
				/>
			)
    });

    return (
			<div className="updates-list">
					{updatesList}
			</div>
    )
}

export default UpdatesList;
   

