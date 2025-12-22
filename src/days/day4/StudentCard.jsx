import PropTypes from 'prop-types';

const StudentCard = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Grade: {props.grade}</p>
            <p>Subject: {props.subject}</p>
            <p>Active: {props.isEnrolled ? 'YES' : 'NO'}</p>
        </div>
    )
}   

StudentCard.propTypes = {
    name: PropTypes.string.isRequired,
    grade: PropTypes.number,
    subject: PropTypes.string,
    isEnrolled: PropTypes.bool
}

StudentCard.defaultProps = {
    grade: 0,
    subject: 'Not Assigned',
    isEnrolled: false
}

export default StudentCard