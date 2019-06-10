
import Calendar from 'react_google_calendar'

const calendar_configuration = {
  api_key: AIzaSyBXRPpLcMJFUOy2cKCMCcnQTIEgU9P6M7A,
  calendars: [
    {
      name: 'demo',
      url: 'exampleURL@group.calendar.google.com'
    }
  ],
  dailyRecurrence: 700,
  weeklyRecurrence: 500,
  monthlyRecurrence: 20
}

export default class MyApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
  }

  render = () =>
    <div>
      <Calendar
        events={this.state.events}
        config={calendar_configuration} />
    </div>
}
