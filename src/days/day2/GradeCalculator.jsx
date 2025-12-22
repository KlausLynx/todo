import './Exercises.css';
function GradeCard() {
    const student = {
        name: "Alex Johnson",
        scores: {
            math: 85,
            science: 92,
            english: 78,
            history: 88,
            art: 95
        }
    };

    const GetGrade = (score) => {  
        if (score >= 90) return 'A';
        if (score >= 80) return 'B';
        if (score >= 70) return 'C';
        if (score >= 60) return 'D';
        return 'F';
    }

    const GetAverage = () => {
        const total = Object.values(student.scores).reduce((acc, score) => acc + score, 0);
        const average = (total / Object.values(student.scores).length).toFixed(2);
        if (average >= 90) return average + ' A';
        if (average >= 80) return average + ' B';
        if (average >= 70) return average + ' C';
        if (average >= 60) return average + ' D';
        return average + ' F';
    }

    return (
        <div className="grade-card">
            <h2>{student.name}'s Grade Report</h2>
            <ul>
                {Object.entries(student.scores).map(([subject, score]) => (
                    <li key={subject}>
                        {subject.charAt(0).toUpperCase() + subject.slice(1)}: {score} {GetGrade(score)}
                    </li>
                ))}
            </ul>
            <h3>Average Score: {GetAverage()}</h3>
        </div>
    );
}

export default GradeCard;