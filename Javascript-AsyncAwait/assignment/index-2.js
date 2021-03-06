const getGitHubUser = (username) => {
  let dataUser = {};
  if (username === "") {
    return null;
  }

  return new Promise((resolve, reject) => {
    let getData = fetch(`https://api.github.com/users/${username}`);

    getData
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        if (result.message === "Not Found") {
          reject("Not Found");
        } else {
          resolve(result);
        }
      });
  });
};

// const getDataUser = async () => {
//   let data = await getGitHubUser("luthfi070");

//   console.log(data);
// };
const printGitHubUser = async () => {
  const mojombo = await getGitHubUser("mojombo");
  const orange = await getGitHubUser("");
  const rudiTabuti = await getGitHubUser("luthfi070");

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
};

printGitHubUser();
