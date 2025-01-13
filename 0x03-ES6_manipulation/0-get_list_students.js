const getListStudents = () => {
	const arr = [];
	const a = {id: 1, firstName: 'Guillaume', location: 'San Francisco'};
	const b = {id: 2, firstName: 'James', location: 'Columbia'};
	const c = {id: 5, firstName: 'Serena', location: 'San Francisco'};
	arr.push( a, b, c );
	return arr;
};

export default getListStudents;
