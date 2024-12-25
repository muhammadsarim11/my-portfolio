async function getProjectsFromFirebase() {

    await firebase.database().ref("projects").get()
    .then((snap) => {
        var values = Object.values(snap.val())
            // console.log(values)
            for (var item of values) {
                console.log(item)
                output(item)
            }

        }).catch((e) => {
            console.log(e)
        })
}
    getProjectsFromFirebase();

    let container = document.querySelector(".container")
    function output(value) {

                container.innerHTML += `
                <div class="card mb-3" style="width: 18rem; height: 20rem; display: flex; flex-direction: column; justify-content: space-between;">
                    <div class="card-body">
                        <h2 class="card-title">${value.projectTitle}</h2>
                        <p class="card-text">${value.projectDesc}</p>
                    </div>
                    <div class="card-footer" style="background: none; border: none; text-align: center;">
                        <a href="${value.projectLink}" class="btn btn-dark" target="_blank" style="width: 100%;">View Project</a>
                    </div>
                </div>
            `
            
            }
    