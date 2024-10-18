const bcrypt = require("bcrypt");

const generateHash = async () => {
  const password = "password"; // The password to hash
  const saltRounds = 10;

  try {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log("Hashed Password:", hash);
  } catch (error) {
    console.error("Error generating hash:", error);
  }
};

generateHash();
