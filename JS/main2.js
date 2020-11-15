axios.get('https://api.github.com/users/lucasdovale')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
