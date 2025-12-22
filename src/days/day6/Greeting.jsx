function TimeGreeting () {
    const hour = new Date().getHours() % 12 || 12
    const isAm = new Date().getHours() < 12  ? 'AM' : 'PM'

    let greetings;
    if(hour < 12) {
        greetings = `GoodMorning.....Let's get the Morning Started ${hour + isAm}`;
    } else if(hour === 12 && hour < 15) {
        greetings = `GoodAfternoon....I hope you are balling ${hour + isAm}`;
    } else {
        greetings = `GoodEvening...Today is Gone ${hour + isAm}`;
    }

    return (
        <div>
            <h1 className="font-extrabold">{greetings}</h1>
        </div>
    )
}

export default TimeGreeting