const updateStudentGradeByCity = (studentArr, city, arrOfGrade) => {
	if (Array.isArray(studentArr)) {
		const filtered = studentArr.filter((obj) => obj.location === city);
		return filtered.map((obj) => {
			obj.grade = 'N/A';
			for (let val of arrOfGrade) {
				if (val.studentId === obj.id) {
					obj.grade = val.grade;
				}
			}
			return obj;
		});

	}
	return [];
};

export default updateStudentGradeByCity;
