import fetch from "node-fetch";

const htmlRowMaker = (userName, email) => {

    const htmlRow = 
        `<tr>${userName}</tr>`;

    return htmlRow;
}

const personalMeetingID = "7303593917";

const getAttendees = async () => {
    let attendees;

    try {
        attendees = await fetch(`https://api.zoom.us/v2/metrics/meetings/${personalMeetingID}/participants`);
        // let finalAttendees = await JSON.parse(attendees);
        // console.log(finalAttendees);
        console.log(attendees);

    }
    catch(e) {console.log('Error: '+e)}

}

getAttendees();