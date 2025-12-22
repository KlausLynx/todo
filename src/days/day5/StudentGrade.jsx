const StudentAGrade = ({studentInfo}) => {
    const FilteredStudentGrade = studentInfo.filter((student => student.grade === 'A'))

    return (
        <div>
            {FilteredStudentGrade.map(student => (
                <div key={student.id}>
                    <span>Name: {student.name}</span>
                    <div>Grade: {student.grade}</div>
                </div>
            ))}
        </div>
   
    )
}

export default StudentAGrade