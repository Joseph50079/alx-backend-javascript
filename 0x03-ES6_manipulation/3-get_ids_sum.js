const getStudentIdsSum = (arr) => {
	if (Array.isArray(arr)) {
		return arr.reduce((acc, curr) => {
			return curr.id + acc; 
		}, 0);
	}
	return 0;
};

export default getStudentIdsSum;
