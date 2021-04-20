import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const tasks = [
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 2:30pm",
      reminder: true
    }
  ];

  return (
    <div className="container">
      <h1>
        <Header />
        <Tasks tasks={tasks} />
      </h1>
    </div>
  );
}

export default App;
