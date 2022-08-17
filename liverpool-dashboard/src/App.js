import "./App.css";

// Get the current first team
function FirstTeam(props) {
      var myHeaders = new Headers();

      myHeaders.append("x-rapidapi-key", "7fbca228870a58a7ff8664b85d0bcb89");
      myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

      var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
      };

      fetch(
            "status",
            requestOptions
      )
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));

      return "First Team";
}

function App() {
      return (
            <div className="App">
                  <FirstTeam />
            </div>
      );
}

export default App;
