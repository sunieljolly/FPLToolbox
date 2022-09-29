const BASE_URL =
  "https://myfpl-proxy.herokuapp.com/http://fantasy.premierleague.com/api/";

//BASE_URL = "https://fantasy.premierleague.com/api/";
export default async function getStatus(){
$.ajax({
  url: BASE_URL + "leagues-classic/314/standings/",
  type: "GET",
  success: function (data) {
    console.log(data)
    return true
  },
  error: function (error) {
    if (error.status == 503) {
      alert(error.statusText + "Updating - Please come back later");
    }
    console.log(error.statusText);
  },
})
}

