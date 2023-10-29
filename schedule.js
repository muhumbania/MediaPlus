
$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultView: 'month', // Initial view when the calendar loads
        editable: true, // Allow events to be edited
        eventLimit: true, // "more" link when too many events

        events: [
            {
                title: 'Event 1',
                start: '2023-10-15T10:00:00',
                end: '2023-10-15T14:00:00'
            },
            {
                title: 'Event 2',
                start: '2023-10-20T12:00:00'
            },
            // Add more events here...
        ]
    });
});
