const getFakePerson = async () => {
    const res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    const {result} = await res.json();
    console.log(result);
};

getFakePerson();
