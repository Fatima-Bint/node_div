const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //checking email is not empty
    if(email === "" || email === null){
        res.status(303).json({message: "email cannot be empty"})
        return;
    }
    //checking email is not empty
    if(password === "" || password === null){
        res.status(303).json({message: "password cannot be empty"})
        return;
    }

   //simulate database
   const expectedPassword = "admin1234";
   if (req.body.password !== expectedPassword) {
    res.status(303).json({ message: "Password incorrect" });
} else {
    res.status(200).json({
        name: "Zahrah",
        email: "zhrh@mail.com",
    });
}
}

module.exports.loginUser = loginUser;